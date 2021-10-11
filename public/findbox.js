// const geolocation = new Geolocation({
//     // enableHighAccuracy must be set to true to have the heading value.
//     trackingOptions: {
//       enableHighAccuracy: true,
//     },
//     projection: view.getProjection(),
//   });
// const iconFeature = new ol.Feature({
//     geometry: new ol.geom.Point([0, 0]),
//     name: 'Null Island',
//     population: 4000,
//     rainfall: 500,
//   });


// const iconStyle = new ol.style.Style({
//     image: new ol.style.Icon({
//       anchor: [0.5, 46],
//       anchorXUnits: 'fraction',
//       anchorYUnits: 'pixels',
//       src: 'icon/icon.png',
//     }),
//   });

// iconFeature.setStyle(iconStyle);

// const vectorSource = new ol.source.Vector({
//         features: [iconFeature],
// });
const source_vector = new ol.source.Vector({ wrapX: false });
const style_point = new ol.style.Style({
    fill: new ol.style.Fill({
        color: '#FF4500',
    }),
    stroke: new ol.style.Stroke({
        color: '#FF4500',
        width: 3,
    }),
    image: new ol.style.Icon({
    anchor: [0.5, 0.96],
    src: ".//icon//icontt.png",
    scale: 1/20,
    offsetOrigin: 'top-right'
    })
    
})

const point = new ol.layer.Vector({
    source: source_vector,
    style:style_point
});

let draw;
// global so we can remove it later
function addInteraction() {
    draw = new ol.interaction.Draw({
        source: source_vector,
        type: 'Point',
    })
        map.addInteraction(draw);
    };


// var modify = new ol.interaction.Modify({
//     hitDetection: point,
//     source: vectorSource,

// })

