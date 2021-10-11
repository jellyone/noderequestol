// hide/show Layers roads
var osm_layer = document.getElementById('osm_layer');
osm_layer.addEventListener('change', () => {
                                        if(osm_layer.checked){
                                            map.getLayers();
                                            console.log()
                                        }else{
                                            map.removeLayer(base_map[0]);
                                        }
});

var Gr_layer = document.getElementById('Gr_layer');
Gr_layer.addEventListener('change', () => {
                                        if(Gr_layer.checked){
                                            map.addLayer(allLayers[4]);
                                        }else{
                                            map.removeLayer(allLayers[4]);
                                        }
});



// hide/show Layers roads
var quan_huyen_layer = document.getElementById('quan_huyen_layer');
quan_huyen_layer.addEventListener('change', () => {
                                        if(quan_huyen_layer.checked){
                                            map.addLayer(allLayers[0]);
                                        }else{
                                            map.removeLayer(allLayers[0]);
                                        }
});



// hide/show Layers phuong_xa
var phuong_xa_layer = document.getElementById('phuong_xa_layer');
phuong_xa_layer.addEventListener('change', () => {
                                        if(phuong_xa_layer.checked){
                                            map.addLayer(allLayers[1]);
                                        }else{
                                            map.removeLayer(allLayers[1]);
                                        }
});



// hide/show Layers roads
var roads_layer = document.getElementById('roads_layer');
roads_layer.addEventListener('change', () => {
                                        if(roads_layer.checked){
                                            map.addLayer(allLayers[2]);
                                        }else{
                                            map.removeLayer(allLayers[2]);
                                        }
})

// hide/show Layers roads
var buildings_layer = document.getElementById('buildings_layer');
buildings_layer.addEventListener('change', () => {
                                        if(buildings_layer.checked){
                                            map.addLayer(allLayers[3]);
                                        }else{
                                            map.removeLayer(allLayers[3]);
                                        }
})