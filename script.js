require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/widgets/Home",
  "esri/widgets/Legend",
  "esri/widgets/LayerList",
  "esri/widgets/Search",
  "esri/layers/FeatureLayer"
], function(WebScene, SceneView, Home, Legend, LayerList, Search, FeatureLayer) {
  
  var scene = new WebScene({
    portalItem: {
      id: "cf99c4d9a84241339ce657a4b99c9fa3"
    }
  });
  
  var view = new SceneView({
    container: "viewDiv",
    map: scene,
    environment: {
      lighting: {
        date: new Date(),
        directShadowsEnabled: true,
        cameraTrackingEnabled: false
      }
    }
  });

  var homeBtn = new Home({
    view: view
  });
  view.ui.add(homeBtn, "top-left");

  var legend = new Legend({
    view: view
  });
  view.ui.add(legend, "bottom-right");

  var searchWidget = new Search({
    view: view,
    sources: [{
      layer: new FeatureLayer({
        url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/GIS_5091__App3_for_Project1_WFL1/FeatureServer",
        outFields: ["*"]
      }),
      searchFields: ["TEXT_"],
      displayField: "TEXT_",
      outFields: ["*"],
    }]
  });
  view.ui.add(searchWidget, "top-right");

  var layerList = new LayerList({
    view: view
  });
  view.ui.add(layerList, "top-right");
});

