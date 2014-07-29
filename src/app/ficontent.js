var FIContentClient = function(url, type) {
    this.url = url + '/' + type + '/pois/json';
    this.categoriesURL = url + '/' + type + '/categories/search?list=poi';
    this.type = type;
};

FIContentClient.prototype = new POIClient();

FIContentClient.prototype.createLayers = function(callback) {
    var self = this;
    var layers = [];

    var categories = config[this.type].categories;

    for (var i = 0, l = categories.length; i<l; i++) {
        var layer = self['bboxLayer']({id: this.type}, categories[i]);

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


    // this.getDescribeServices(function(describeServices) {
    //     self.describeServices = describeServices;
    //     var layer;
    //     for (var service in describeServices.services) {
    //         var serviceConfig = config.services[service];
    //         if (!serviceConfig.strategy) {
    //             continue;
    //         }
    //         layer = self[serviceConfig.strategy + 'Layer'](describeServices.services[service]);

    //         layer.on('change:visible', function(event) {
    //             // create a feature table that will represent our features in a tabular form
    //             if (!event.target.getVisible()) {
    //                 return;
    //             }
    //             self.emptyTable(event.target);
    //         });

    //         layers.push(layer);
    //     }

    //     callback(layers);
    // });
};

FIContentClient.prototype.buildSearchUrl = function(service, keyword, minX, maxX, minY, maxY) {
    var category = this.getCategory(service);

    var url = this.url + '/search?' +
             'category='+ category +'&coords=' + minX + ',' + minY +',' + maxX + ',' + maxY + '&complete=' + keyword;

    return url;
};

FIContentClient.prototype.getCategory = function(service) {
    return service.split('_')[1];
};

FIContentClient.prototype.buildUrl = function(serviceID, minCoord, maxCoord, category) {
    return this.url + '/search?' +
             'category='+ category +'&coords=' + minCoord[0] + ',' + minCoord[1] +',' + maxCoord[0] + ',' + maxCoord[1]
            + '';
};

FIContentClient.prototype.getName = function(service, serviceID, category) {
    return serviceID+'_'+category;
};

FIContentClient.prototype.getTitle = function(service, serviceID, category) {
    return serviceID+'_'+category;
};