const OSM = new ol.layer.Tile({
    source: new ol.source.OSM(),
});


const layers_vector = [];

layers_vector.push(point)

const base_map = [];

base_map.push(OSM);


const allLayers = [layers_quan_huyen, layers_phuong_xa, VL_road, layers_building, layers_Gr];

const choseLayers = [];





const layer_base = new ol.Collection({
    array:layers_vector  
});

const layer_select = layer_base.getArray()['array']
console.log(layer_select)

function Collection_Taba(collection,callback,index,layer){
    const arr = collection['array_']['array'];
    return callback(arr,index,layer,collection)
    // console.log(callback(arr))
};

function getLength_Taba(arr){
    const length = arr['length']
    return length
}


//push 1 layer to collection in index
function push_Taba(arr,index,layer,collection){
    const length = arr['length']
    
    if(length > 0){        
        arr.splice(index,0,layer)              
        return collection
    }
};



// choseLayers.push(base_map[0]);

// choseLayers.push(allLayers[0])

const a = Collection_Taba(layer_base,push_Taba,3,base_map[0]).getArray()['array'];


const view = new ol.View({
    center: ol.proj.fromLonLat([106.6666, 10.7777]),
    zoom: 19,
    
});


const map = new ol.Map({
    layers: a,
    target: 'show-map__content',
    view: view,
    controls: ol.control.defaults({ attribution: false }).extend([attribution]),
});
//


//seclect coordinate
map.on('singleclick', function(evt) {
    
    addInteraction(draw)

});
//get Info target map
map.on('singleclick', function(evt) {

    const viewResolution = /** @type {number} */ (view.getResolution());
    //get url phuong_xa
    const url_phuong_xa = phuong_xa_Source.getFeatureInfoUrl(
        evt.coordinate,
        viewResolution,
        'EPSG:3857', { 'INFO_FORMAT': 'application/json' } //4326 not show databases, 3857 is show database
    );


    //get url roads
    const url_roads = roads_Source.getFeatureInfoUrl(
        evt.coordinate,
        viewResolution,
        'EPSG:3857', { 'INFO_FORMAT': 'application/json' } //4326 not show data
    );

    //get info phuong_xa_Source
    if (url_phuong_xa) {
        fetch(url_phuong_xa)
            .then(function(response) { return response.json(); })
            .then(function(html) {
                if (html.numberReturned == 1) {
                    const adm2_name = html.features[0].properties.adm2_name;
                    const adm3_name = html.features[0].properties.adm3_name;
                    document.getElementById('quan_huyen').innerHTML = adm2_name;
                    document.getElementById('phuong_xa').innerHTML = adm3_name;
                    document.getElementById('tinh_tp').innerHTML = 'Hồ Chí Minh';
                    document.getElementById('check').innerHTML = `<div class="right" id="right">Địa Phận Hồ Chí Minh</a>`;
                } else {
                    document.getElementById('check').innerHTML = `<div class="left" id="left">Ngoại ô</a>`;
                    document.getElementById('quan_huyen').innerHTML = '';
                    document.getElementById('phuong_xa').innerHTML = '';
                    document.getElementById('tinh_tp').innerHTML = '';
                }
            })

    }

    //get Info roads_Source           
    if (url_roads) {
        fetch(url_roads)
            .then(function(response) { return response.json(); })
            .then(function(html) {

                if (html.numberReturned == 1) {
                    const street = html.features[0].properties.name
                    document.getElementById('street').innerHTML = street;
                } else {
                    document.getElementById('street').innerHTML = '';
                }
            })
    }
});


// set pointermove for  map 
map.on('pointermove', function(evt) {

    // set dragging for mouse on map 
    const dragging = evt.dragging;
    if (dragging == true) {
        return map.getTargetElement().style.cursor = hit ? 'pointer' : 'grab'; /**if true => action */
    }
    // set moving for mouse on map
    const pixel = map.getEventPixel(evt.originalEvent);
    const hit = map.forEachLayerAtPixel(pixel, function() {
        return true;
    });
    map.getTargetElement().style.cursor = hit ? 'pointer' : ''; /** if true action */
});

map.addEventListener('resize', () => {
    console.log(map.getSize())
})

function findfunction() {
    console.log(document.getElementById("looking_coor").value)
}




/////
// modify.on(['modifystart', 'modifyend'], function (evt) {
//     target.style.cursor = evt.type === 'modifystart' ? 'grabbing' : 'pointer';
//   });
//   const overlaySource = modify.getOverlay().getSource();
//   overlaySource.on(['addfeature', 'removefeature'], function (evt) {
//     target.style.cursor = evt.type === 'addfeature' ? 'pointer' : '';
//   });
//   map.addInteraction(modify);
//