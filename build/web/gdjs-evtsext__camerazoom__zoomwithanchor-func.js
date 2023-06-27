
if (typeof gdjs.evtsExt__CameraZoom__ZoomWithAnchor !== "undefined") {
  gdjs.evtsExt__CameraZoom__ZoomWithAnchor.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraZoom__ZoomWithAnchor = {};


gdjs.evtsExt__CameraZoom__ZoomWithAnchor.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AnchorX")) || 0 : 0) + (gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AnchorX")) || 0 : 0)) * gdjs.evtTools.camera.getCameraZoom(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)) / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Zoom")) || 0 : 0), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AnchorY")) || 0 : 0) + (gdjs.evtTools.camera.getCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AnchorY")) || 0 : 0)) * gdjs.evtTools.camera.getCameraZoom(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)) / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Zoom")) || 0 : 0), "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Zoom")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
}}

}


};

gdjs.evtsExt__CameraZoom__ZoomWithAnchor.func = function(runtimeScene, Zoom, Layer, Camera, AnchorX, AnchorY, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Zoom") return Zoom;
if (argName === "Layer") return Layer;
if (argName === "Camera") return Camera;
if (argName === "AnchorX") return AnchorX;
if (argName === "AnchorY") return AnchorY;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraZoom__ZoomWithAnchor.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CameraZoom__ZoomWithAnchor.registeredGdjsCallbacks = [];