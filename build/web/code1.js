gdjs.Level_32Packs_32MenuCode = {};
gdjs.Level_32Packs_32MenuCode.forEachCount0_3 = 0;

gdjs.Level_32Packs_32MenuCode.forEachCount1_3 = 0;

gdjs.Level_32Packs_32MenuCode.forEachIndex3 = 0;

gdjs.Level_32Packs_32MenuCode.forEachObjects3 = [];

gdjs.Level_32Packs_32MenuCode.forEachTotalCount3 = 0;

gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects1= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects2= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects3= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects4= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects5= [];
gdjs.Level_32Packs_32MenuCode.GDBG2Objects1= [];
gdjs.Level_32Packs_32MenuCode.GDBG2Objects2= [];
gdjs.Level_32Packs_32MenuCode.GDBG2Objects3= [];
gdjs.Level_32Packs_32MenuCode.GDBG2Objects4= [];
gdjs.Level_32Packs_32MenuCode.GDBG2Objects5= [];
gdjs.Level_32Packs_32MenuCode.GDLogoObjects1= [];
gdjs.Level_32Packs_32MenuCode.GDLogoObjects2= [];
gdjs.Level_32Packs_32MenuCode.GDLogoObjects3= [];
gdjs.Level_32Packs_32MenuCode.GDLogoObjects4= [];
gdjs.Level_32Packs_32MenuCode.GDLogoObjects5= [];
gdjs.Level_32Packs_32MenuCode.GDBlockObjects1= [];
gdjs.Level_32Packs_32MenuCode.GDBlockObjects2= [];
gdjs.Level_32Packs_32MenuCode.GDBlockObjects3= [];
gdjs.Level_32Packs_32MenuCode.GDBlockObjects4= [];
gdjs.Level_32Packs_32MenuCode.GDBlockObjects5= [];
gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects1= [];
gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects2= [];
gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects3= [];
gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects4= [];
gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects5= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects1= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects3= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects4= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects5= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects1= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects2= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects3= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects4= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects5= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects1= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects2= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects3= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects4= [];
gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects5= [];


gdjs.Level_32Packs_32MenuCode.mapOfGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPacksMenuButtonObjects2ObjectsGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackTest1Objects2ObjectsGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackCoverObjects2Objects = Hashtable.newFrom({"LevelPacksMenuButton": gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects2, "LevelPackTest1": gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2, "LevelPackCover": gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects2});
gdjs.Level_32Packs_32MenuCode.mapOfGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPacksMenuButtonObjects1ObjectsGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackTest1Objects1ObjectsGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackCoverObjects1Objects = Hashtable.newFrom({"LevelPacksMenuButton": gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects1, "LevelPackTest1": gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects1, "LevelPackCover": gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects1});
gdjs.Level_32Packs_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LevelPackCover"), gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects2);
gdjs.copyArray(runtimeScene.getObjects("LevelPackTest1"), gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2);
gdjs.copyArray(runtimeScene.getObjects("LevelPacksMenuButton"), gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32Packs_32MenuCode.mapOfGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPacksMenuButtonObjects2ObjectsGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackTest1Objects2ObjectsGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackCoverObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11261156);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects2 */
/* Reuse gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2 */
/* Reuse gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects2 */
{for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects2[i].setOpacity(155);
}
for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2[i].setOpacity(155);
}
for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects2.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects2[i].setOpacity(155);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8443548);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelPackCover"), gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects2);
gdjs.copyArray(runtimeScene.getObjects("LevelPackTest1"), gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2);
gdjs.copyArray(runtimeScene.getObjects("LevelPacksMenuButton"), gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects2);
{for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects2[i].setOpacity(255);
}
for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2[i].setOpacity(255);
}
for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects2.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects2[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelPackCover"), gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelPackTest1"), gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelPacksMenuButton"), gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32Packs_32MenuCode.mapOfGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPacksMenuButtonObjects1ObjectsGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackTest1Objects1ObjectsGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackCoverObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects1 */
/* Reuse gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects1 */
/* Reuse gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects1 */
{for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects1.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects1[i].setOpacity(255);
}
for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects1.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects1[i].setOpacity(255);
}
for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects1.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects1[i].setOpacity(255);
}
}}

}


};gdjs.Level_32Packs_32MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelPacksMenuButton"), gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.Level_32Packs_32MenuCode.GDLogoObjects1);
{for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects1.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDLogoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};gdjs.Level_32Packs_32MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Level_32Packs_32MenuCode.GDBlockObjects2);
gdjs.copyArray(runtimeScene.getObjects("LaserChain"), gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects2);
{for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDBlockObjects2.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDBlockObjects2[i].setX(gdjs.Level_32Packs_32MenuCode.GDBlockObjects2[i].getX() - (1));
}
for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects2.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects2[i].setX(gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects2[i].getX() - (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Level_32Packs_32MenuCode.GDBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("LaserChain"), gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32Packs_32MenuCode.GDBlockObjects1.length;i<l;++i) {
    if ( gdjs.Level_32Packs_32MenuCode.GDBlockObjects1[i].getX() <= -(64) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Packs_32MenuCode.GDBlockObjects1[k] = gdjs.Level_32Packs_32MenuCode.GDBlockObjects1[i];
        ++k;
    }
}
gdjs.Level_32Packs_32MenuCode.GDBlockObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects1.length;i<l;++i) {
    if ( gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects1[i].getX() <= -(64) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects1[k] = gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects1[i];
        ++k;
    }
}
gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32Packs_32MenuCode.GDBlockObjects1 */
/* Reuse gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects1 */
{for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDBlockObjects1.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDBlockObjects1[i].setX(gdjs.Level_32Packs_32MenuCode.GDBlockObjects1[i].getX() + (2560 + 64));
}
for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects1.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects1[i].setX(gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects1[i].getX() + (2560 + 64));
}
}}

}


};gdjs.Level_32Packs_32MenuCode.mapOfGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackTest2Objects2ObjectsGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackTest1Objects2Objects = Hashtable.newFrom({"LevelPackTest2": gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects2, "LevelPackTest1": gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2});
gdjs.Level_32Packs_32MenuCode.mapOfGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackCoverObjects3Objects = Hashtable.newFrom({"LevelPackCover": gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects3});
gdjs.Level_32Packs_32MenuCode.mapOfGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackCoverObjects5Objects = Hashtable.newFrom({"LevelPackCover": gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects5});
gdjs.Level_32Packs_32MenuCode.asyncCallback8463348 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("LevelPackCover"), gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects5);

gdjs.copyArray(asyncObjectsList.getObjects("LevelPackTest1"), gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects5);

gdjs.copyArray(asyncObjectsList.getObjects("LevelPackTest2"), gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects5);

{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, (gdjs.RuntimeObject.getVariableString(((gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects5.length === 0 ) ? ((gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects5[0].getVariables()) : gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects5[0].getVariables()).get("pack"))) + "image.png", gdjs.Level_32Packs_32MenuCode.mapOfGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackCoverObjects5Objects, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.Level_32Packs_32MenuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects3) asyncObjectsList.addObject("LevelPackCover", obj);
for (const obj of gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects3) asyncObjectsList.addObject("LevelPackTest1", obj);
for (const obj of gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects3) asyncObjectsList.addObject("LevelPackTest2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.Level_32Packs_32MenuCode.asyncCallback8463348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_32Packs_32MenuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LevelPackTest1"), gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2);
gdjs.copyArray(runtimeScene.getObjects("LevelPackTest2"), gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects2);

gdjs.Level_32Packs_32MenuCode.forEachTotalCount3 = 0;
gdjs.Level_32Packs_32MenuCode.forEachObjects3.length = 0;
gdjs.Level_32Packs_32MenuCode.forEachCount0_3 = gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects2.length;
gdjs.Level_32Packs_32MenuCode.forEachTotalCount3 += gdjs.Level_32Packs_32MenuCode.forEachCount0_3;
gdjs.Level_32Packs_32MenuCode.forEachObjects3.push.apply(gdjs.Level_32Packs_32MenuCode.forEachObjects3,gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects2);
gdjs.Level_32Packs_32MenuCode.forEachCount1_3 = gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2.length;
gdjs.Level_32Packs_32MenuCode.forEachTotalCount3 += gdjs.Level_32Packs_32MenuCode.forEachCount1_3;
gdjs.Level_32Packs_32MenuCode.forEachObjects3.push.apply(gdjs.Level_32Packs_32MenuCode.forEachObjects3,gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2);
for (gdjs.Level_32Packs_32MenuCode.forEachIndex3 = 0;gdjs.Level_32Packs_32MenuCode.forEachIndex3 < gdjs.Level_32Packs_32MenuCode.forEachTotalCount3;++gdjs.Level_32Packs_32MenuCode.forEachIndex3) {
gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects3.length = 0;

gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects3.length = 0;

gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects3.length = 0;


if (gdjs.Level_32Packs_32MenuCode.forEachIndex3 < gdjs.Level_32Packs_32MenuCode.forEachCount0_3) {
    gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects3.push(gdjs.Level_32Packs_32MenuCode.forEachObjects3[gdjs.Level_32Packs_32MenuCode.forEachIndex3]);
}
else if (gdjs.Level_32Packs_32MenuCode.forEachIndex3 < gdjs.Level_32Packs_32MenuCode.forEachCount0_3+gdjs.Level_32Packs_32MenuCode.forEachCount1_3) {
    gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects3.push(gdjs.Level_32Packs_32MenuCode.forEachObjects3[gdjs.Level_32Packs_32MenuCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_32Packs_32MenuCode.mapOfGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackCoverObjects3Objects, (( gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects3.length === 0 ) ? (( gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects3.length === 0 ) ? 0 :gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects3[0].getPointX("")) :gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects3[0].getPointX("")) + 8, (( gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects3.length === 0 ) ? (( gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects3.length === 0 ) ? 0 :gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects3[0].getPointY("")) :gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects3[0].getPointY("")) + 8, "Covers");
}
{ //Subevents: 
gdjs.Level_32Packs_32MenuCode.eventsList3(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Level_32Packs_32MenuCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LevelPackTest1"), gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2);
gdjs.copyArray(runtimeScene.getObjects("LevelPackTest2"), gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32Packs_32MenuCode.mapOfGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackTest2Objects2ObjectsGDgdjs_9546Level_959532Packs_959532MenuCode_9546GDLevelPackTest1Objects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2 */
/* Reuse gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setString((gdjs.RuntimeObject.getVariableString(((gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2.length === 0 ) ? ((gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects2[0].getVariables()) : gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2[0].getVariables()).get("pack"))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pack", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_32Packs_32MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelPackCover"), gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects1);
{for(var i = 0, len = gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects1.length ;i < len;++i) {
    gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects1[i].setSize(256 - 16, 512 - 16);
}
}}

}


};gdjs.Level_32Packs_32MenuCode.eventsList6 = function(runtimeScene) {

{


gdjs.Level_32Packs_32MenuCode.eventsList0(runtimeScene);
}


{


gdjs.Level_32Packs_32MenuCode.eventsList1(runtimeScene);
}


{


gdjs.Level_32Packs_32MenuCode.eventsList2(runtimeScene);
}


{


gdjs.Level_32Packs_32MenuCode.eventsList5(runtimeScene);
}


};

gdjs.Level_32Packs_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects1.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects2.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects3.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects4.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPacksMenuButtonObjects5.length = 0;
gdjs.Level_32Packs_32MenuCode.GDBG2Objects1.length = 0;
gdjs.Level_32Packs_32MenuCode.GDBG2Objects2.length = 0;
gdjs.Level_32Packs_32MenuCode.GDBG2Objects3.length = 0;
gdjs.Level_32Packs_32MenuCode.GDBG2Objects4.length = 0;
gdjs.Level_32Packs_32MenuCode.GDBG2Objects5.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLogoObjects1.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLogoObjects2.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLogoObjects3.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLogoObjects4.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLogoObjects5.length = 0;
gdjs.Level_32Packs_32MenuCode.GDBlockObjects1.length = 0;
gdjs.Level_32Packs_32MenuCode.GDBlockObjects2.length = 0;
gdjs.Level_32Packs_32MenuCode.GDBlockObjects3.length = 0;
gdjs.Level_32Packs_32MenuCode.GDBlockObjects4.length = 0;
gdjs.Level_32Packs_32MenuCode.GDBlockObjects5.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects1.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects2.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects3.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects4.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLaserChainObjects5.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects1.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects2.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects3.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects4.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest1Objects5.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects1.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects2.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects3.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects4.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPackTest2Objects5.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects1.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects2.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects3.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects4.length = 0;
gdjs.Level_32Packs_32MenuCode.GDLevelPackCoverObjects5.length = 0;

gdjs.Level_32Packs_32MenuCode.eventsList6(runtimeScene);

return;

}

gdjs['Level_32Packs_32MenuCode'] = gdjs.Level_32Packs_32MenuCode;
