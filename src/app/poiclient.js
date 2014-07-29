var idCounter = 0;
var table;
var POIClient = function() {

};

POIClient.prototype.emptyTable = function(layer) {
    if (table) {
        table.clear();
    }

    table = new app.FeatureTable({
      id: 'features',
      showFeatureId: true,
      fields: ['name'],
      source: layer.getSource(),
      map: map,
      container: 'features-container',
      select: select,
      offset: 37
    });
};

POIClient.prototype.getLayer = function(service) {
    var layers = map.getLayers().getArray();
    var layer;
    for (var i = 0, l = layers.length; i<l; i++) {
        if (layers[i].get('title') == service) {
            layer = layers[i];
            break;
        }
    }

    return layer;
};

POIClient.prototype.clearFeatures = function(layer) {
    var oldFeatures = layer.getSource().getFeatures();
    for (var i = 0, l = oldFeatures.length; i<l; i++) {
        layer.getSource().removeFeature(oldFeatures[i]);
    }
};

POIClient.prototype.loadFeatures = function(result, service) {
    var layer = this.getLayer(service);
    
    //clear table
    // this.emptyTable(layer);
    // this.clearFeatures(layer);
    //parse features
    var features = this.parseGeoJSONFeatures(result);
    //add to source
    layer.getSource().addFeatures(features);
    //send events
};

POIClient.prototype.clearSearch = function() {
    this.searchMode = false;
};

POIClient.prototype.parseGeoJSONFeatures = function(result) {
    var format = new ol.format.GeoJSON();
      
    var features = format.readFeatures(result);
    for (var i = 0, l = features.length; i<l; i++) {
        features[i].getGeometry().transform('EPSG:4326', 'EPSG:3857');
        features[i].setId(++idCounter);
    }

    return features;
};

POIClient.prototype.bboxLayer = function(service, category) {
    var self = this;
    var vectorSource = new ol.source.ServerVector({
      format: new ol.format.GeoJSON(),
      loader: function(extent, resolution, projection) {
        
      },
      strategy: function(extent, resolution) {
        if (self.searchMode || vectorSource._prevExtent && extent[0] == vectorSource._prevExtent[0] && extent[1] == vectorSource._prevExtent[1]) {
            return [extent];
        } else {
            vectorSource._prevExtent = extent.slice(0);
        }
        var minCoord = ol.proj.transform([extent[0], extent[1]], 'EPSG:3857', 'EPSG:4326');
        var maxCoord = ol.proj.transform([extent[2], extent[3]], 'EPSG:3857', 'EPSG:4326');
        var url = self.buildUrl(service.id, minCoord, maxCoord, category);
        $.ajax({
          url: url,
          dataType: 'json'
        }).done(function(result) {
            self.loadFeatures(result, service.id);
        }).fail(function(jqxhr) {
            console.log(jqxhr);
        });
        return [extent];
      },
      projection: 'EPSG:4326'
    });
    
    var layer = new ol.layer.Vector({
        source: vectorSource,
        title: service.id,
        'name': self.getName(service, service.id, category),
        group: 'default',
        visible: false,
        style: new ol.style.Style({
            image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                opacity: 0.75,
                src: 'src/css/poi.png'
            }))
        })
    });

    return layer;
};

POIClient.prototype.search = function(service, keyword, minX, maxX, minY, maxY) {
    var self = this;
    if (!service || !keyword) {
        alert('select a service and type a search term');
        return;
    }
    self.searchMode = true;

    var url = this.buildSearchUrl(service, keyword, minX, maxX, minY, maxY);

    $.getJSON(url, null)
        .done(function(result) {
            var layer = self.getLayer(service);
            self.emptyTable(layer);
            self.clearFeatures(layer);
            self.loadFeatures(result, service);
        })
        .fail(function(jqxhr, textStatus, error) {
            console.log(textStatus);
        });
};