var POIProxyClient = function(url) {
    this.url = url;
    this.describeServicesEndPoint = '/describeServices';
};

POIProxyClient.prototype = new POIClient();

POIProxyClient.prototype.createLayers = function(callback) {
    var self = this;
    var layers = [];
    this.getDescribeServices(function(describeServices) {
        self.describeServices = describeServices;
        var layer;
        for (var service in describeServices.services) {
            var serviceConfig = config.services[service];
            var strategy = "bbox";
            if (serviceConfig && !serviceConfig.strategy) {
                continue;
            }

            if (!serviceConfig) {
                strategy = "bbox";
            }

            if (serviceConfig && serviceConfig.strategy) {
                strategy = serviceConfig.strategy;
            }
            
            layer = self[strategy + 'Layer'](describeServices.services[service]);

            layer.on('change:visible', function(event) {
                // create a feature table that will represent our features in a tabular form
                if (!event.target.getVisible()) {
                    return;
                }
                self.emptyTable(event.target);
            });

            layers.push(layer);
        }

        callback(layers);
    });
};

POIProxyClient.prototype.localLayer = function(service) {
    var vectorSource = new ol.source.Vector({
        projection: 'EPSG:3857'
    });
    var vector = new ol.layer.Vector({
        source: vectorSource,
        title: service.id,
        name: config.services[service.id].name,
        url: this.url + '/browse?' +
                 'service='+ service.id +'&z=0&x=0&y=0',
        group: 'default',
        visible: false,
        style: new ol.style.Style({
            image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                opacity: 0.75,
                src: 'src/css/icon.png'
            }))
        })
    });

    return vector;
};

POIProxyClient.prototype.buildSearchUrl = function(service, keyword, minX, maxX, minY, maxY) {
    return this.url + '/browseByExtent?' +
            'service='+ service +'&minX=' + minX +'&maxX=' + maxX + '&minY=' + minY + '&maxY=' + maxY + '&query=' + keyword;
};

POIProxyClient.prototype.search = function(service, keyword, minX, maxX, minY, maxY) {
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

POIProxyClient.prototype.buildUrl = function(serviceID, minCoord, maxCoord, category) {
    return this.url + '/browseByExtent?' +
             'service='+ serviceID +'&minX=' + minCoord[0] + '&minY=' + minCoord[1] +'&maxX=' + maxCoord[0] + '&maxY=' + maxCoord[1]
            + '';
};

POIProxyClient.prototype.getName = function(service, serviceID, category) {
    return config.services[service.id] && config.services[service.id].name || service.id;
};

POIProxyClient.prototype.getTitle = function(service, serviceID, category) {
    return service.id;
};

POIProxyClient.prototype.tileLayer = function(service) {
    var self = this;
    var vectorSource = new ol.source.ServerVector({
      format: new ol.format.GeoJSON(),
      loader: function(extent, resolution, projection) {
        if (self.searchMode) {
            return;
        }
        var minCoord = ol.proj.transform([extent[0], extent[1]], 'EPSG:3857', 'EPSG:4326');
        var maxCoord = ol.proj.transform([extent[2], extent[3]], 'EPSG:3857', 'EPSG:4326');
        var url = self.url + '/browseByExtent?' +
             'service='+ service.id +'&minX=' + minCoord[0] + '&minY=' + minCoord[1] +'&maxX=' + maxCoord[0] + '&maxY=' + maxCoord[1]
            + '';
        $.ajax({
          url: url,
          dataType: 'json'
        }).done(function(result) {
            self.loadFeatures(result, service.id);
        }).fail(function(jqxhr) {
            console.log(jqxhr);
        });
      },
      strategy: ol.loadingstrategy.createTile(new ol.tilegrid.XYZ({
        maxZoom: 19
      })),
      projection: 'EPSG:4326'
    });
    
    var poiproxyLayer = new ol.layer.Vector({
        source: vectorSource,
        title: service.id,
        name: config.services[service.id].name,
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

    return poiproxyLayer;
};

// POIProxyClient.prototype.tileLayer = function(service) {
//     var self = this;
//     var tileSource = new ol.source.TileVector({
//         format: new ol.format.GeoJSON({
//             defaultProjection: 'EPSG:4326'
//         }),
//         projection: 'EPSG:3857',
//         tileGrid: new ol.tilegrid.XYZ({
//             maxZoom: 19
//         }),
//         url: this.url + '/browse?' +
//             'service='+ service.id +'&z={z}&x={x}&y={y}'
//     });

//     tileSource.on('change', function(vectorEvent) {
//         var features = vectorEvent.target.getFeatures();
        
//         $('#features').empty();
//         for (var i = 0, l = features.length; i<l; i++) {
//             features[i].setId(++idCounter);
//             tileSource.dispatchEvent(new ol.source.VectorEvent(ol.source.VectorEventType.ADDFEATURE, features[i]));
//         }
//     });
    
//     var poiproxyLayer = new ol.layer.Vector({
//         source: tileSource,
//         title: service.id,
//         name: config.services[service.id].name,
//         group: 'default',
//         visible: false,
//         style: new ol.style.Style({
//             image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
//                 anchor: [0.5, 46],
//                 anchorXUnits: 'fraction',
//                 anchorYUnits: 'pixels',
//                 opacity: 0.75,
//                 src: 'src/css/poi.png'
//             }))
//         })
//     });

//     return poiproxyLayer;
// };

POIProxyClient.prototype.isLocalBcn = function(service) {
    return service.indexOf('bcn_') != -1;
};

POIProxyClient.prototype.getDescribeServices = function(callback) {
    $.getJSON(this.url + this.describeServicesEndPoint, null)
    .done(function(result) {
        callback(result);
    })
    .fail(function(jqxhr, textStatus, error) {
        alert(textStatus);
    });
};