const roads_Source = new ol.source.TileWMS({
    url: `${url_server}/wms`,
    params: {
        // 'REQUEST': 'Getmap',
        'LAYERS': 'test.tmt.gis:hcm_roads',
        'TILED': true,

        // 'BBOX': `${extent[0]},${extent[1]},${extent[2]},${extent[3]}`,
        // 'WIDTH': '1080',
        // 'HEIGHT': '1080',
    },
    serverType: 'geoserver',
    transition: 0,
    crossOrigin: 'anonymous',
});

const layers_roads = new ol.layer.Tile({
    source: roads_Source,
});

const attribution = new ol.control.Attribution({
    collapsible: false,
});
// const newcontrol = new ol.control.defaults({attribution:false}).extend([attribution]);
// console.log(newcontrol);
// console.log(newcontrol.extend([attribution]));



//tạo tên đường
const style = new ol.style.Style({
    //     fill: new ol.style.Fill({
    //         color: 'rgba(255, 255, 255, 0.6)',
    //     }),
    //     // stroke: new ol.style.Stroke({
    //     //     color: '#319FD3',
    //     //     width: 1,
    // }),
    text: new ol.style.Text({
        placement: 'line',
        font: '12px Calibri,sans-serif',
        fill: new ol.style.Fill({
            color: '#000',
        }),
        stroke: new ol.style.Stroke({
            color: '#fff',
            width: 3,
        }),
    }),
});



// tạo bản đồ theo layerdata

const VL_road = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: 'http://103.113.81.38:5566/geoserver/test.tmtgis.vn/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=test.tmtgis.vn%3Ahcm_roads&outputFormat=application%2Fjson',
        format: new ol.format.GeoJSON(),
    }),
    style: function(feature) {
        style.getText().setText(feature.get('name'));
        return style;
    },
});