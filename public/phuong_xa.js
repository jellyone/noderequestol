var phuong_xa_Source = new ol.source.TileWMS({
    url: `${url_server}/wms`,
    params: {
        // 'REQUEST': 'Getmap',
        'LAYERS': 'test.tmt.gis:hcm_phuong_xa',
        'TILED': true,

        // 'BBOX': `${extent[0]},${extent[1]},${extent[2]},${extent[3]}`,
        // 'WIDTH': '1080',
        // 'HEIGHT': '1080',
    },

    serverType: 'geoserver',
    transition: 0,
    crossOrigin: 'anonymous',
    // projection: projections
});

var layers_phuong_xa = new ol.layer.Tile({
    // extents: extent,
    source: phuong_xa_Source,

});

//
// var sourcevector = new ol.source.Vector({
//     url: url_phuong_xa,
//     format: new ol.format.GeoJSON(),
//   });