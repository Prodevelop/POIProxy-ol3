/**
 * Add all your dependencies here.
 *
 * @require pace.min.js
 * @require LayersControl.js
 * @require TransactionHandler.js
 * @require FeatureTable.js
 * @require WFSBBOXLoader.js
 * @require poiclient.js
 * @require poiproxy.js
 * @require ficontent.js
 * @require funcs.js
 * @require newservice.js
 * @require knockout-3.1.0.js
 * @require chosen_v1.1.0/chosen.jquery.min.js
 */

// ========= config section =============================================
var center = [242764.00183371827, 5069915.212099172];
var zoom = 10;
var poiProxyURL = '/poiproxy';
// var registerServiceURL = '/ficontent/api/poiproxy/registerService';
var registerServiceURL = '/poiproxy/registerService';
var poiproxy = new POIProxyClient(poiProxyURL);
var ficontent = new FIContentClient('/ficontent/api', 'osm');
var ficontentdb = new FIContentClient('/ficontent/api', 'dbpedia');
var map;
var select;
var selectedFeature;
var activeLayerTitle;
var activeLayer;
// ======================================================================

$(document).ready(function() {
  
  init();

  Pace.start({
    document: true
  });

  // add resize listener for table height, enables scroll-y
  // on table for responsive and full view
  var rszTimer;

  $(window).resize(function(e) {
    clearTimeout(rszTimer);
    rszTimer = setTimeout(resizeTableHeight(), 100);
  }).resize(); // call on first load

});

var init = function() {
  ficontentdb.createLayers(function(filayersdb) {
    ficontent.createLayers(function(filayers) {
      poiproxy.createLayers(function(layers) {
        layers = layers.concat(filayers);
        layers = layers.concat(filayersdb);
        layers = layers.sort(function(a, b) {
          if (a.get('name') < b.get('name')) return -1;
          return 1;
        });
        initMap(layers);
        initUI(layers);
      });
    });
  });
};

var initUI = function(layers) {
  var newHeight = $(document).outerHeight() - $('.navbar').outerHeight();
  $('#features-container').height(newHeight);

  buildPOIProxySelector(layers);

  var popup = buildPopup();
  map.addOverlay(popup);

  // display popup on click
  map.on('click', function(evt) {
    onMapClick(evt.pixel);
  });

  registerChangeCursor();

  $('.poiproxy-search').keypress(function(event) {
    if (!$('.poiproxy-search').val()) {
      clearSearch();
      return;
    }
    if (event.keyCode == 13) {
      search($('.poiproxy-search').val());
    }
  });

  onNewServiceClick();

  onRegisterServiceClick();
};

var search = function(val) {
  var extent = map.getView().calculateExtent([800,800]);
  var minCoord = ol.proj.transform([extent[0], extent[1]], 'EPSG:3857', 'EPSG:4326');
  var maxCoord = ol.proj.transform([extent[2], extent[3]], 'EPSG:3857', 'EPSG:4326');
  if (isPoiProxyLayer(activeLayerTitle)) {
    poiproxy.search($('.poiproxy-services').val(), val, minCoord[0], maxCoord[0], minCoord[1], maxCoord[1]);
  } else {
    ficontent.search($('.poiproxy-services').val(), val, minCoord[0], maxCoord[0], minCoord[1], maxCoord[1]);
  }
};

var clearSearch = function() {
  poiproxy.clearSearch();
  ficontent.clearSearch();
};

var buildPOIProxySelector = function(layers) {
  var $combo = $('.poiproxy-services');
  $combo.attr('data-placeholder', 'Choose a service...');
  var $option, text, value;

  for (var i = 0, l = layers.length; i<l; i++) {
    text = layers[i].get('name');
    value = layers[i].get('title');
    $option = $('<option />').text(text).val(value);
    $combo.append($option);
  }

  $combo.chosen({
    no_results_text: "Oops, nothing found!",
    allow_single_deselect: true
  }).change(function(evt) {
      $('#features').empty();
      hidePopup();
      var layers = map.getLayers().getArray();
      var layer;
      for (var i=0, ii=layers.length; i<ii; ++i) {
        layer = layers[i];
        if (layer instanceof ol.layer.Vector) {
          layer.set('visible', false);
          if (layer.get('title') == $(this).val()) {
            activateLayer(layer);
          }
        }
      }
  });
};

var registerChangeCursor = function() {
  // change mouse cursor when over marker
  $(map.getViewport()).on('mousemove', function(e) {
    var pixel = map.getEventPixel(e.originalEvent);
    var hit = map.forEachFeatureAtPixel(pixel, function(feature, layer) {
      return true;
    });
    if (hit) {
      map.getTarget().style.cursor = 'pointer';
    } else {
      map.getTarget().style.cursor = '';
    }
  });
};

var buildPopup = function() {
  var element = $('<div id="popup" data-original-title="" title=""></div>');
  $('body').append(element);

  popup = new ol.Overlay({
    element: element,
    positioning: 'bottom-center',
    stopEvent: false
  });

  return popup;
};

var onNewServiceClick = function() {
  $('#new-service').on('shown.bs.modal', function (e) {
    ko.applyBindings(newService, $('#new-service')[0]);
  });
};

var onRegisterServiceClick = function() {
  $('#register-service').click(function() {
    $.post(registerServiceURL, {"data": JSON.stringify(newService)}, function(data, textStatus, jqXHR) {
      $('#new-service').modal('hide');
      $('.modal-refresh').modal('show');
    })
    .error(function(jqXHR) {
      $('#new-service').modal('hide');
      $('.modal-refresh').modal('show');
    });
  });
};

var onMapClick = function(pixel) {
  var feature = map.forEachFeatureAtPixel(pixel,
      function(feature, layer) {
        return feature;
      });
  if (feature) {
    showPopup(feature);
  } else {
    hidePopup(feature);
  }
};

var isPoiProxyLayer = function(layerTitle) {
  return layerTitle.indexOf('osm_') == -1 && layerTitle.indexOf('dbpedia_') == -1;
};

var activateLayer = function(layer) {
  var title = layer.get('title');
  var layerConfig = config.services[title];
  activeLayerTitle = title;
  activeLayer = layer;

  if (!layerConfig) {
    layer.set('visible', true);
    $('.poiproxy-search').attr('placeholder', "Search...");
    $('.poiproxy-search').prop('disabled', false);
    return;
  }

  $('.poiproxy-search').prop('disabled', !layerConfig.search);

  if (layerConfig.browse && layerConfig.search) {
    layer.set('visible', true);
    if (isLocalBcn(layer.get('title'))) {
      loadData(layer);
    }
  } else if (layerConfig.browse && !layerConfig.search) {
    layer.set('visible', true);
    $('.poiproxy-search').attr('placeholder', "Not available...");
  } else if (!layerConfig.browse && layerConfig.search) {
    layer.set('visible', true);
    $('.poiproxy-search').attr('placeholder', "Search...");
  }
};

var showPopup = function(feature) {
  hidePopup();
  selectedFeature = feature;
  var $element = $('#popup');
  var geometry = feature.getGeometry();
  var coord = geometry.getCoordinates();
  popup.setPosition(coord);

  $element.popover({
    'placement': 'top',
    'html': true,
    'content': createPopup(feature)
  });
  $element.popover('show');
};

var hidePopup = function() {
  selectedFeature = null;
  var $element = $('#popup');
  $element.popover('destroy');
};

var createPopup = function(feature) {
  var keys = feature.getKeys();

  var html = "";
  for (var i = 0, l = keys.length; i<l; i++) {
    var key = keys[i];
    if (isValidAttribute(key)) {
      var value = feature.get(key);
      html += "<div class='row'>" + "<div class='popup-attribute'>"+key+': </div>'+"<div class='popup-content'>"+createPopupContent(key, value)+'</div></div>';
    }
  }

  return html;
};

var createPopupContent = function(key, value) {
  var res = value;
  if (key == 'image' || value.indexOf('.jpg') != -1 || value.indexOf('.jpeg') != -1 || value.indexOf('.png') != -1 || value.indexOf('.gif') != -1) {
    res = '<a href="'+value+'" target="_blank"><img src="'+value+'" width="100" height="100"/></a>';
  } else if (key == 'web' || key == 'link' || key == 'url' || value.indexOf('http') != -1) {
    res = '<a href="'+value+'" target="_blank">' + value + '</a>';
  }

  return res;
}

var isValidAttribute = function(attribute) {
  return attribute && attribute.indexOf('geom') == -1 && attribute != 'id' 
    && attribute.indexOf('px_categories') == -1 && attribute.indexOf('px_service') == -1;
};

var loadData = function(layer) {
  var url = layer.get('url');
  $.getJSON(url, null)
    .done(function(result) {
      var oldFeatures = layer.getSource().getFeatures();
      for (var i = 0, l = oldFeatures.length; i<l; i++) {
          layer.getSource().removeFeature(oldFeatures[i]);
      }

      var features = poiproxy.parseGeoJSONFeatures(result);

      layer.getSource().addFeatures(features);
    })
    .fail(function(jqxhr, textStatus, error) {
        alert(textStatus);
    });
};

var isLocalBcn = function(title) {
  return title.indexOf('local_bcn');
};

var initMap = function(poiproxyLayers) {
  select = new ol.interaction.Select({
            featureOverlay: new ol.FeatureOverlay({
              style: new ol.style.Style({
                image: new ol.style.Circle({
                  radius: 20,
                  fill: new ol.style.Fill({
                    color: '#FF0000'
                  }),
                  stroke: new ol.style.Stroke({
                    color: '#000000'
                  })
                })
              })
            })
          });
  // create the map
  map = new ol.Map({
    interactions: ol.interaction.defaults().extend([select]),
    /*controls: ol.control.defaults().extend([
      new app.LayersControl({
        groups: {
          background: {
            title: "Base Layers",
            exclusive: true
          },
          'default': {
            title: "POI",
            exclusive: true
          }
        }
      })
    ]),*/
    // render the map in the 'map' div
    target: document.getElementById('map'),
    // use the Canvas renderer
    renderer: 'canvas',
    layers: [
      // MapQuest streets
      new ol.layer.Tile({
        title: 'Street Map',
        group: "background",
        source: new ol.source.MapQuest({layer: 'osm'})
      }),
      // MapQuest imagery
      new ol.layer.Tile({
        title: 'Aerial Imagery',
        group: "background",
        visible: false,
        source: new ol.source.MapQuest({layer: 'sat'})
      }),
      // MapQuest hybrid (uses a layer group)
      new ol.layer.Group({
        title: 'Imagery with Streets',
        group: "background",
        visible: false,
        layers: [
          new ol.layer.Tile({
            source: new ol.source.MapQuest({layer: 'sat'})
          }),
          new ol.layer.Tile({
            source: new ol.source.MapQuest({layer: 'hyb'})
          })
        ]
      })
    ].concat(poiproxyLayers),
    // initial center and zoom of the map's view
    view: new ol.View2D({
      center: center,
      zoom: zoom
    })
  });
};