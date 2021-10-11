var wmsSource = new ol.source.ImageWMS({
    url:  `${url_server}/wms`,
    params: { 'LAYERS': 'test.tmt.gis:hcm_quan_huyen' },
    'TILED': true,
    servertype: 'geoserver',
    
});

var wmsLayer = new ol.layer.Image({
    source: wmsSource
    
});

var view = new ol.View({
    // center:[0,0],
    center: ol.proj.fromLonLat([106.63654, 10.76825]),
    zoom: 13,

});


var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM({}),

        }),
        wmsLayer

    ],
    target: 'map',
    view: view,
});

map.on('singleclick', function(evt) {
    document.getElementById('info').innerHTML = '';
    var viewResolution = /** @type {number} */ (view.getResolution());
    console.log(viewResolution);
    var url = wmsSource.getFeatureInfoUrl(
        evt.coordinate,
        viewResolution,
        'EPSG:3857', { 'INFO_FORMAT': 'application/json' } //4326 not show data
    );
    console.log(url);
    if (url) {
        fetch(url)
            .then(function(response) { return response.text(); })
            .then(function(html) {
                document.getElementById('info').innerHTML = html;
            });
    }
});

// map.on('pointermove', function(evt) {
//     if (evt.dragging) {
//         return;
//     }
//     var pixel = map.getEventPixel(evt.originalEvent);
//     var hit = map.forEachLayerAtPixel(pixel, function() {
//         return true;
//     });
//     map.getTargetElement().style.cursor = hit ? 'pointer' : '';
// });

// http://localhost:8080/geoserver/sf/wms?SERVICE=WMS&VERSION=1.3.0&request=GetMap&layers=sf%3Aarchsites&CRS=EPSG%3A3857&WIDTH=900&HEIGHT=960&BBOX=-8599.165682082328%2C-9172.44339422115%2C8599.165682082328%2C9172.44339422115&format=image%2Fpng

// http://localhost:8080/geoserver/sf/wms?service=WMS&version=1.3.0&request=GetMap&layers=sf%3Aarchsites&bbox=589851.4376666048%2C4914490.882968263%2C608346.4603107043%2C4926501.8980334345&width=768&height=498&srs=EPSG%3A26713&styles=&format=image%2Fpng