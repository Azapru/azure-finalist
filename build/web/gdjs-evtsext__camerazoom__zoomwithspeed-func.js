
if (typeof gdjs.evtsExt__CameraZoom__ZoomWithSpeed !== "undefined") {
  gdjs.evtsExt__CameraZoom__ZoomWithSpeed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraZoom__ZoomWithSpeed = {};


gdjs.evtsExt__CameraZoom__ZoomWithSpeed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.camera.getCameraZoom(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)) * Math.pow((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ZoomSpeed")) || 0 : 0), gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
}}

}


};

gdjs.evtsExt__CameraZoom__ZoomWithSpeed.func = function(runtimeScene, ZoomSpeed, Layer, Camera, parentEventsFunctionContext) {
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
if (argName === "ZoomSpeed") return ZoomSpeed;
if (argName === "Layer") return Layer;
if (argName === "Camera") return Camera;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraZoom__ZoomWithSpeed.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CameraZoom__ZoomWithSpeed.registeredGdjsCallbacks = [];