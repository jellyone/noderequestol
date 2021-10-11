var quan_huyen_Source = new ol.source.TileWMS({
    url:  `${url_server}/wms`,
    params: {
            // 'REQUEST': 'Getmap',
            'LAYERS':'test.tmt.gis:hcm_quan_huyen',
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

var layers_quan_huyen = new ol.layer.Tile({
        // extents: extent,
        source: quan_huyen_Source,
        });
       