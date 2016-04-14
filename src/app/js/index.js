/*
 * Test app to demonstrate an error handling scenario. This app will purposely cause an error so we can
 * demonstrate the proper way to handle error conditions.
 */

require([
    'esri/Map',
    'esri/views/MapView',
    'dojo/domReady!'
], function (Map, MapView) {


    var appParameterModel = {
            mapDOMid: "mapView",
            baseMap: "scscs", // test invalid basemap: Map.basemap: Unable to find basemap definition for: "scscs". Try one of these: streets, satellite, hybrid, terrain, topo, gray, dark-gray, oceans, national-geographic, osm
            initialLOD: 8,
            initialLonLat: [0, 52],
            itemId: "caf7718cd2974a2e997cf98aa005ef25" // test valid portal item but its private, requires a login
// invalid item: "9999DAED9999DEAD1234DEAD1234DEAD"
// bad item: "aejkr#$%^"
// private item: "caf7718cd2974a2e997cf98aa005ef25"
// public item: "46768d4d0e9244cd85861108068fb86d"
        },
        map,
        mapView;

    // Load a base map at the default view
    map = new Map({
        basemap: appParameterModel.baseMap
    });

    function mapLoaded () {
        console.log("Map loaded");
    }

    function mapError (error) {
        console.log("Error caught " + error.toString());
    }

    mapView = new MapView({
        container: appParameterModel.mapDOMid,
        map: map,
        center: appParameterModel.initialLonLat,
        zoom: appParameterModel.initialLOD
    }).then(mapLoaded, mapError);
});
