url = 'http://103.113.81.38:5566/geoserver/test.tmtgis.vn/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=test.tmtgis.vn%3Ahcm_roads'


function callback(e) {
    const key = e.target.value
    const keys = `*${key}*`
    const road = getRequestFeature(keys, 'hcm_roads')
    GetCourses(url, road, FeatureReponse)
};

function getRequestFeature(road, featureTypes) {
    const featureRequest = new ol.format.WFS().writeGetFeature({
        srsName: 'EPSG:3857',
        featureNS: 'http://103.113.81.38:5566/geoserver',
        featurePrefix: 'test.tmtgis.vn',
        featureTypes: [featureTypes],
        outputFormat: 'application/json',
        filter: ol.format.filter.like('name', road),
        maxFeatures: 5
    })
    return featureRequest
};

async function GetCourses(url, featureRequest, callback) {
    await fetch(url, {
            method: 'POST',
            body: new XMLSerializer().serializeToString(featureRequest)
        })
        .then(res => res.json())
        .then(callback)
};

function FeatureReponse(data) {
    const features = data.features;
    features.map(index => console.log(index.properties['name']))
};

const searchbox = document.querySelector('.key');
searchbox.addEventListener('input', callback);