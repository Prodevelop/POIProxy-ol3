var POIProxyCache = function(url, services) {
    this.url = url;
    this.services = services;
};

POIProxyCache.prototype = new POIClient();

POIProxyCache.prototype.createLayers = function(callback) {
    var self = this;
    var layers = [];
    
    for (var service in this.services) {
        var serviceConfig = this.services[service];
        var strategy = serviceConfig.strategy;
        
        layer = self[strategy + 'Layer'](serviceConfig);

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
    
};

// POIProxyCache.prototype.tileLayer = function(service) {
//     var self = this;
//     var vectorSource = new ol.source.ServerVector({
//       format: new ol.format.GeoJSON(),
//       loader: function(extent, resolution, projection) {
//         if (self.searchMode) {
//             return;
//         }
//         var minCoord = ol.proj.transform([extent[0], extent[1]], 'EPSG:3857', 'EPSG:4326');
//         var maxCoord = ol.proj.transform([extent[2], extent[3]], 'EPSG:3857', 'EPSG:4326');
//         var url = self.url + '/browseByExtent?' +
//              'service='+ service.id +'&minX=' + minCoord[0] + '&minY=' + minCoord[1] +'&maxX=' + maxCoord[0] + '&maxY=' + maxCoord[1]
//             + '';
//         $.ajax({
//           url: url,
//           dataType: 'json'
//         }).done(function(result) {
//             self.loadFeatures(result, service.id);
//         }).fail(function(jqxhr) {
//             console.log(jqxhr);
//         });
//       },
//       strategy: ol.loadingstrategy.createTile(new ol.tilegrid.XYZ({
//         maxZoom: 19
//       })),
//       projection: 'EPSG:4326'
//     });
    
//     var poiproxyLayer = new ol.layer.Vector({
//         source: vectorSource,
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

POIProxyCache.prototype.tileLayer = function(service) {
    var self = this;
    var tileSource = new ol.source.TileVector({
        format: new ol.format.GeoJSON({
            defaultProjection: 'EPSG:4326'
        }),
        projection: 'EPSG:3857',
        tileGrid: new ol.tilegrid.XYZ({
            maxZoom: 19
        }),
        url: this.url + '/'+ service.cacheFolder +'/{z}/{x}/{y}.json'
    });

    // tileSource.on('change', function(vectorEvent) {
    //     var features = vectorEvent.target.getFeatures();
        
    //     $('#features').empty();
    //     for (var i = 0, l = features.length; i<l; i++) {
    //         features[i].setId(++idCounter);
    //         tileSource.dispatchEvent(new ol.source.VectorEvent(ol.source.VectorEventType.ADDFEATURE, features[i]));
    //     }
    // });
    
    var poiproxyLayer = new ol.layer.Vector({
        source: tileSource,
        title: service.name,
        name: service.name,
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