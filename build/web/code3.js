gdjs.PackCode = {};
gdjs.PackCode.GDFrameObjects1= [];
gdjs.PackCode.GDFrameObjects2= [];
gdjs.PackCode.GDFrameObjects3= [];
gdjs.PackCode.GDFrameBackObjects1= [];
gdjs.PackCode.GDFrameBackObjects2= [];
gdjs.PackCode.GDFrameBackObjects3= [];
gdjs.PackCode.GDLevelButtonObjects1= [];
gdjs.PackCode.GDLevelButtonObjects2= [];
gdjs.PackCode.GDLevelButtonObjects3= [];


gdjs.PackCode.mapOfGDgdjs_9546PackCode_9546GDLevelButtonObjects2Objects = Hashtable.newFrom({"LevelButton": gdjs.PackCode.GDLevelButtonObjects2});
gdjs.PackCode.mapOfGDgdjs_9546PackCode_9546GDLevelButtonObjects1Objects = Hashtable.newFrom({"LevelButton": gdjs.PackCode.GDLevelButtonObjects1});
gdjs.PackCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LevelButton"), gdjs.PackCode.GDLevelButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PackCode.mapOfGDgdjs_9546PackCode_9546GDLevelButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10952052);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PackCode.GDLevelButtonObjects2 */
{for(var i = 0, len = gdjs.PackCode.GDLevelButtonObjects2.length ;i < len;++i) {
    gdjs.PackCode.GDLevelButtonObjects2[i].setOpacity(155);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10951716);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelButton"), gdjs.PackCode.GDLevelButtonObjects2);
{for(var i = 0, len = gdjs.PackCode.GDLevelButtonObjects2.length ;i < len;++i) {
    gdjs.PackCode.GDLevelButtonObjects2[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelButton"), gdjs.PackCode.GDLevelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PackCode.mapOfGDgdjs_9546PackCode_9546GDLevelButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.PackCode.GDLevelButtonObjects1 */
{for(var i = 0, len = gdjs.PackCode.GDLevelButtonObjects1.length ;i < len;++i) {
    gdjs.PackCode.GDLevelButtonObjects1[i].setOpacity(255);
}
}}

}


};gdjs.PackCode.asyncCallback10954908 = function (runtimeScene, asyncObjectsList) {
}
gdjs.PackCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) + "levels.txt", "", "GET", "application/x-www-form-urlencoded", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1)), (runtimeScene) => (gdjs.PackCode.asyncCallback10954908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PackCode.mapOfGDgdjs_9546PackCode_9546GDLevelButtonObjects3Objects = Hashtable.newFrom({"LevelButton": gdjs.PackCode.GDLevelButtonObjects3});
gdjs.PackCode.eventsList2 = function(runtimeScene) {

};gdjs.PackCode.mapOfGDgdjs_9546PackCode_9546GDLevelButtonObjects1Objects = Hashtable.newFrom({"LevelButton": gdjs.PackCode.GDLevelButtonObjects1});
gdjs.PackCode.asyncCallback10958524 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("GET_LEVEL_DATA")));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}
gdjs.PackCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.PackCode.GDLevelButtonObjects1 */

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.PackCode.GDLevelButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PackCode.GDLevelButtonObjects1[0].getVariables()).get("level")))) + ".json", "", "GET", "application/x-www-form-urlencoded", runtimeScene.getScene().getVariables().get("GET_LEVEL_DATA"), runtimeScene.getScene().getVariables().get("GET_LEVEL_DATA_ERROR")), (runtimeScene) => (gdjs.PackCode.asyncCallback10958524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PackCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.PackCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.PackCode.GDFrameObjects3);
gdjs.PackCode.GDLevelButtonObjects3.length = 0;

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PackCode.mapOfGDgdjs_9546PackCode_9546GDLevelButtonObjects3Objects, ((( gdjs.PackCode.GDFrameObjects3.length === 0 ) ? 0 :gdjs.PackCode.GDFrameObjects3[0].getPointX("")) + 32) + (128 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) + 1), (( gdjs.PackCode.GDFrameObjects3.length === 0 ) ? 0 :gdjs.PackCode.GDFrameObjects3[0].getPointY("")) + 136, "");
}{for(var i = 0, len = gdjs.PackCode.GDLevelButtonObjects3.length ;i < len;++i) {
    gdjs.PackCode.GDLevelButtonObjects3[i].setSize(96, 96);
}
}{for(var i = 0, len = gdjs.PackCode.GDLevelButtonObjects3.length ;i < len;++i) {
    gdjs.PackCode.GDLevelButtonObjects3[i].returnVariable(gdjs.PackCode.GDLevelButtonObjects3[i].getVariables().get("toFrameX")).setNumber((gdjs.PackCode.GDLevelButtonObjects3[i].getPointX("")) - (( gdjs.PackCode.GDFrameObjects3.length === 0 ) ? 0 :gdjs.PackCode.GDFrameObjects3[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.PackCode.GDLevelButtonObjects3.length ;i < len;++i) {
    gdjs.PackCode.GDLevelButtonObjects3[i].returnVariable(gdjs.PackCode.GDLevelButtonObjects3[i].getVariables().get("toFrameY")).setNumber((gdjs.PackCode.GDLevelButtonObjects3[i].getPointY("")) - (( gdjs.PackCode.GDFrameObjects3.length === 0 ) ? 0 :gdjs.PackCode.GDFrameObjects3[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.PackCode.GDLevelButtonObjects3.length ;i < len;++i) {
    gdjs.PackCode.GDLevelButtonObjects3[i].returnVariable(gdjs.PackCode.GDLevelButtonObjects3[i].getVariables().get("level")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) + 1);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
{ //Subevents: 
gdjs.PackCode.eventsList2(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelButton"), gdjs.PackCode.GDLevelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PackCode.mapOfGDgdjs_9546PackCode_9546GDLevelButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.PackCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.PackCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.PackCode.GDFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelButton"), gdjs.PackCode.GDLevelButtonObjects1);
{for(var i = 0, len = gdjs.PackCode.GDLevelButtonObjects1.length ;i < len;++i) {
    gdjs.PackCode.GDLevelButtonObjects1[i].returnVariable(gdjs.PackCode.GDLevelButtonObjects1[i].getVariables().get("toFrameX")).setNumber((gdjs.PackCode.GDLevelButtonObjects1[i].getPointX("")) - (( gdjs.PackCode.GDFrameObjects1.length === 0 ) ? 0 :gdjs.PackCode.GDFrameObjects1[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.PackCode.GDLevelButtonObjects1.length ;i < len;++i) {
    gdjs.PackCode.GDLevelButtonObjects1[i].returnVariable(gdjs.PackCode.GDLevelButtonObjects1[i].getVariables().get("toFrameY")).setNumber((gdjs.PackCode.GDLevelButtonObjects1[i].getPointY("")) - (( gdjs.PackCode.GDFrameObjects1.length === 0 ) ? 0 :gdjs.PackCode.GDFrameObjects1[0].getPointY("")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.PackCode.GDFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("FrameBack"), gdjs.PackCode.GDFrameBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelButton"), gdjs.PackCode.GDLevelButtonObjects1);
{for(var i = 0, len = gdjs.PackCode.GDFrameObjects1.length ;i < len;++i) {
    gdjs.PackCode.GDFrameObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.PackCode.GDFrameBackObjects1.length ;i < len;++i) {
    gdjs.PackCode.GDFrameBackObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.PackCode.GDLevelButtonObjects1.length ;i < len;++i) {
    gdjs.PackCode.GDLevelButtonObjects1[i].setCenterPositionInScene((( gdjs.PackCode.GDFrameObjects1.length === 0 ) ? 0 :gdjs.PackCode.GDFrameObjects1[0].getPointX("")) + (gdjs.RuntimeObject.getVariableNumber(gdjs.PackCode.GDLevelButtonObjects1[i].getVariables().get("toFrameX"))) + (gdjs.PackCode.GDLevelButtonObjects1[i].getWidth()) / 2,(( gdjs.PackCode.GDFrameObjects1.length === 0 ) ? 0 :gdjs.PackCode.GDFrameObjects1[0].getPointY("")) + (gdjs.RuntimeObject.getVariableNumber(gdjs.PackCode.GDLevelButtonObjects1[i].getVariables().get("toFrameY"))) + (gdjs.PackCode.GDLevelButtonObjects1[i].getHeight()) / 2);
}
}}

}


{


gdjs.PackCode.eventsList0(runtimeScene);
}


{


gdjs.PackCode.eventsList4(runtimeScene);
}


};

gdjs.PackCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PackCode.GDFrameObjects1.length = 0;
gdjs.PackCode.GDFrameObjects2.length = 0;
gdjs.PackCode.GDFrameObjects3.length = 0;
gdjs.PackCode.GDFrameBackObjects1.length = 0;
gdjs.PackCode.GDFrameBackObjects2.length = 0;
gdjs.PackCode.GDFrameBackObjects3.length = 0;
gdjs.PackCode.GDLevelButtonObjects1.length = 0;
gdjs.PackCode.GDLevelButtonObjects2.length = 0;
gdjs.PackCode.GDLevelButtonObjects3.length = 0;

gdjs.PackCode.eventsList5(runtimeScene);

return;

}

gdjs['PackCode'] = gdjs.PackCode;
