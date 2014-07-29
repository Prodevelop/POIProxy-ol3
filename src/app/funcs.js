var berlin = ol.proj.transform([13.392333984375, 52.50953477032729], 'EPSG:4326', 'EPSG:3857');
var barcelona = ol.proj.transform([2.1807861328125, 41.38917324986403], 'EPSG:4326', 'EPSG:3857');

function elastic(t) {
    return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
}

var flyToBerlin = document.getElementById('fly-to-berlin');
flyToBerlin.addEventListener('click', function() {
    var view = map.getView();
    var duration = 7000;
    var start = +new Date();
    var pan = ol.animation.pan({
        duration: duration,
        source: /** @type {ol.Coordinate} */
        (view.getCenter()),
        start: start
    });
    var bounce = ol.animation.bounce({
        duration: duration,
        resolution: 4 * view.getResolution(),
        start: start
    });
    map.beforeRender(pan, bounce);
    view.setCenter(berlin);
}, false);

var elasticToBarcelona = document.getElementById('elastic-to-barcelona');
elasticToBarcelona.addEventListener('click', function() {
    var view = map.getView();
    var pan = ol.animation.pan({
        duration: 7000,
        easing: elastic,
        source: /** @type {ol.Coordinate} */
        (view.getCenter())
    });
    map.beforeRender(pan);
    view.setCenter(barcelona);
}, false);

var panTo = function(map, view, center) {
    var pan = ol.animation.pan({
        duration: 500,
        source: /** @type {ol.Coordinate} */
        (view.getCenter())
    });
    map.beforeRender(pan);
    view.setCenter(center);

};

// set table height based on responsive panel size
var resizeTableHeight = function() {
  if (!table) {
    return;
  }

  var _window = $(window);
  var window_h = _window.height(), 
      window_w =  _window.width(), 
      navbar_h = $('.navbar').height(),
      table_container = $('#features-container'),
      table = $('#features');

  if (window_w < 768) { // table is beneath map
    var table_height = window_h - $('#map').height();

  } else { // table is right of map
    var table_height = $('#map').height(); 
  }
  table.height(table_height);
  table_container.height(table_height);
};