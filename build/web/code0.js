gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects1= [];
gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects2= [];
gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects3= [];
gdjs.Main_32MenuCode.GDBG2Objects1= [];
gdjs.Main_32MenuCode.GDBG2Objects2= [];
gdjs.Main_32MenuCode.GDBG2Objects3= [];
gdjs.Main_32MenuCode.GDLogoObjects1= [];
gdjs.Main_32MenuCode.GDLogoObjects2= [];
gdjs.Main_32MenuCode.GDLogoObjects3= [];
gdjs.Main_32MenuCode.GDBlockObjects1= [];
gdjs.Main_32MenuCode.GDBlockObjects2= [];
gdjs.Main_32MenuCode.GDBlockObjects3= [];
gdjs.Main_32MenuCode.GDLaserChainObjects1= [];
gdjs.Main_32MenuCode.GDLaserChainObjects2= [];
gdjs.Main_32MenuCode.GDLaserChainObjects3= [];


gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDLevelPacksMenuButtonObjects2Objects = Hashtable.newFrom({"LevelPacksMenuButton": gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDLevelPacksMenuButtonObjects1Objects = Hashtable.newFrom({"LevelPacksMenuButton": gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects1});
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LevelPacksMenuButton"), gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDLevelPacksMenuButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10677940);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects2[i].setOpacity(155);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10677652);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelPacksMenuButton"), gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects2[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelPacksMenuButton"), gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDLevelPacksMenuButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects1[i].setOpacity(255);
}
}}

}


};gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelPacksMenuButton"), gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.Main_32MenuCode.GDLogoObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLogoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Main_32MenuCode.GDBlockObjects2);
gdjs.copyArray(runtimeScene.getObjects("LaserChain"), gdjs.Main_32MenuCode.GDLaserChainObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlockObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlockObjects2[i].setX(gdjs.Main_32MenuCode.GDBlockObjects2[i].getX() - (1));
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDLaserChainObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLaserChainObjects2[i].setX(gdjs.Main_32MenuCode.GDLaserChainObjects2[i].getX() - (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Main_32MenuCode.GDBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("LaserChain"), gdjs.Main_32MenuCode.GDLaserChainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDBlockObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDBlockObjects1[i].getX() <= -(64) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDBlockObjects1[k] = gdjs.Main_32MenuCode.GDBlockObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDBlockObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLaserChainObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDLaserChainObjects1[i].getX() <= -(64) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLaserChainObjects1[k] = gdjs.Main_32MenuCode.GDLaserChainObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLaserChainObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDBlockObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDLaserChainObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlockObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlockObjects1[i].setX(gdjs.Main_32MenuCode.GDBlockObjects1[i].getX() + (2560 + 64));
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDLaserChainObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLaserChainObjects1[i].setX(gdjs.Main_32MenuCode.GDLaserChainObjects1[i].getX() + (2560 + 64));
}
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDLevelPacksMenuButtonObjects1Objects = Hashtable.newFrom({"LevelPacksMenuButton": gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects1});
gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList0(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList1(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("LevelPacksMenuButton"), gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDLevelPacksMenuButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Packs Menu", true);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDLevelPacksMenuButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDBG2Objects1.length = 0;
gdjs.Main_32MenuCode.GDBG2Objects2.length = 0;
gdjs.Main_32MenuCode.GDBG2Objects3.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects1.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects2.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects3.length = 0;
gdjs.Main_32MenuCode.GDBlockObjects1.length = 0;
gdjs.Main_32MenuCode.GDBlockObjects2.length = 0;
gdjs.Main_32MenuCode.GDBlockObjects3.length = 0;
gdjs.Main_32MenuCode.GDLaserChainObjects1.length = 0;
gdjs.Main_32MenuCode.GDLaserChainObjects2.length = 0;
gdjs.Main_32MenuCode.GDLaserChainObjects3.length = 0;

gdjs.Main_32MenuCode.eventsList3(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
