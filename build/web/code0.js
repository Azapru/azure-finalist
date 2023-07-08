gdjs.GameCode = {};
gdjs.GameCode.forEachIndex4 = 0;

gdjs.GameCode.forEachObjects4 = [];

gdjs.GameCode.forEachTemporary4 = null;

gdjs.GameCode.forEachTotalCount4 = 0;

gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDPlayerObjects5= [];
gdjs.GameCode.GDPlayerDashEffectObjects1= [];
gdjs.GameCode.GDPlayerDashEffectObjects2= [];
gdjs.GameCode.GDPlayerDashEffectObjects3= [];
gdjs.GameCode.GDPlayerDashEffectObjects4= [];
gdjs.GameCode.GDPlayerDashEffectObjects5= [];
gdjs.GameCode.GDBlockObjects1= [];
gdjs.GameCode.GDBlockObjects2= [];
gdjs.GameCode.GDBlockObjects3= [];
gdjs.GameCode.GDBlockObjects4= [];
gdjs.GameCode.GDBlockObjects5= [];
gdjs.GameCode.GDJumpParticlesObjects1= [];
gdjs.GameCode.GDJumpParticlesObjects2= [];
gdjs.GameCode.GDJumpParticlesObjects3= [];
gdjs.GameCode.GDJumpParticlesObjects4= [];
gdjs.GameCode.GDJumpParticlesObjects5= [];
gdjs.GameCode.GDDashParticlesObjects1= [];
gdjs.GameCode.GDDashParticlesObjects2= [];
gdjs.GameCode.GDDashParticlesObjects3= [];
gdjs.GameCode.GDDashParticlesObjects4= [];
gdjs.GameCode.GDDashParticlesObjects5= [];
gdjs.GameCode.GDGridObjects1= [];
gdjs.GameCode.GDGridObjects2= [];
gdjs.GameCode.GDGridObjects3= [];
gdjs.GameCode.GDGridObjects4= [];
gdjs.GameCode.GDGridObjects5= [];
gdjs.GameCode.GDZoomInButtonObjects1= [];
gdjs.GameCode.GDZoomInButtonObjects2= [];
gdjs.GameCode.GDZoomInButtonObjects3= [];
gdjs.GameCode.GDZoomInButtonObjects4= [];
gdjs.GameCode.GDZoomInButtonObjects5= [];
gdjs.GameCode.GDSaveButtonObjects1= [];
gdjs.GameCode.GDSaveButtonObjects2= [];
gdjs.GameCode.GDSaveButtonObjects3= [];
gdjs.GameCode.GDSaveButtonObjects4= [];
gdjs.GameCode.GDSaveButtonObjects5= [];
gdjs.GameCode.GDLoadButtonObjects1= [];
gdjs.GameCode.GDLoadButtonObjects2= [];
gdjs.GameCode.GDLoadButtonObjects3= [];
gdjs.GameCode.GDLoadButtonObjects4= [];
gdjs.GameCode.GDLoadButtonObjects5= [];
gdjs.GameCode.GDZoomOutButtonObjects1= [];
gdjs.GameCode.GDZoomOutButtonObjects2= [];
gdjs.GameCode.GDZoomOutButtonObjects3= [];
gdjs.GameCode.GDZoomOutButtonObjects4= [];
gdjs.GameCode.GDZoomOutButtonObjects5= [];
gdjs.GameCode.GDSelectorObjects1= [];
gdjs.GameCode.GDSelectorObjects2= [];
gdjs.GameCode.GDSelectorObjects3= [];
gdjs.GameCode.GDSelectorObjects4= [];
gdjs.GameCode.GDSelectorObjects5= [];
gdjs.GameCode.GDOffGridButtonObjects1= [];
gdjs.GameCode.GDOffGridButtonObjects2= [];
gdjs.GameCode.GDOffGridButtonObjects3= [];
gdjs.GameCode.GDOffGridButtonObjects4= [];
gdjs.GameCode.GDOffGridButtonObjects5= [];
gdjs.GameCode.GDPlacingModeObjects1= [];
gdjs.GameCode.GDPlacingModeObjects2= [];
gdjs.GameCode.GDPlacingModeObjects3= [];
gdjs.GameCode.GDPlacingModeObjects4= [];
gdjs.GameCode.GDPlacingModeObjects5= [];
gdjs.GameCode.GDRemoveModeObjects1= [];
gdjs.GameCode.GDRemoveModeObjects2= [];
gdjs.GameCode.GDRemoveModeObjects3= [];
gdjs.GameCode.GDRemoveModeObjects4= [];
gdjs.GameCode.GDRemoveModeObjects5= [];
gdjs.GameCode.GDMoveModeObjects1= [];
gdjs.GameCode.GDMoveModeObjects2= [];
gdjs.GameCode.GDMoveModeObjects3= [];
gdjs.GameCode.GDMoveModeObjects4= [];
gdjs.GameCode.GDMoveModeObjects5= [];
gdjs.GameCode.GDModeTextObjects1= [];
gdjs.GameCode.GDModeTextObjects2= [];
gdjs.GameCode.GDModeTextObjects3= [];
gdjs.GameCode.GDModeTextObjects4= [];
gdjs.GameCode.GDModeTextObjects5= [];
gdjs.GameCode.GDLvlDataDebugObjects1= [];
gdjs.GameCode.GDLvlDataDebugObjects2= [];
gdjs.GameCode.GDLvlDataDebugObjects3= [];
gdjs.GameCode.GDLvlDataDebugObjects4= [];
gdjs.GameCode.GDLvlDataDebugObjects5= [];


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDJumpParticlesObjects1Objects = Hashtable.newFrom({"JumpParticles": gdjs.GameCode.GDJumpParticlesObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)).setString("left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)).setString("right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setNumber(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9273308);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Jump", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9217004);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
gdjs.GameCode.GDJumpParticlesObjects1.length = 0;

{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].returnVariable(gdjs.GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDJumpParticlesObjects1Objects, (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDJumpParticlesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDJumpParticlesObjects1[i].setAngle(90);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Jump", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Stand");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimationName("Crouch");
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDashParticlesObjects3Objects = Hashtable.newFrom({"DashParticles": gdjs.GameCode.GDDashParticlesObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDashParticlesObjects3Objects = Hashtable.newFrom({"DashParticles": gdjs.GameCode.GDDashParticlesObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDashParticlesObjects3Objects = Hashtable.newFrom({"DashParticles": gdjs.GameCode.GDDashParticlesObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDashParticlesObjects2Objects = Hashtable.newFrom({"DashParticles": gdjs.GameCode.GDDashParticlesObjects2});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(2)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9220996);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
gdjs.GameCode.GDDashParticlesObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDashParticlesObjects3Objects, (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointX("")) - 17, (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointY("")) - 17, "");
}{for(var i = 0, len = gdjs.GameCode.GDDashParticlesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDashParticlesObjects3[i].setAngle(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Dash", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).setNumber(1500);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").setMaxSpeed(1500);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").setCurrentSpeed(-(1500));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(2)).setNumber(30);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].setVariableBoolean(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(3), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(2)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableString(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(4)) == "left" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9223508);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
gdjs.GameCode.GDDashParticlesObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDashParticlesObjects3Objects, (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointX("")) - 17, (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointY("")) - 17, "");
}{for(var i = 0, len = gdjs.GameCode.GDDashParticlesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDashParticlesObjects3[i].setAngle(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Dash", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).setNumber(1500);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").setMaxSpeed(1500);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").setCurrentSpeed(-(1500));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(2)).setNumber(30);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].setVariableBoolean(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(3), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(2)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9225924);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
gdjs.GameCode.GDDashParticlesObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDashParticlesObjects3Objects, (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointX("")) - 17, (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointY("")) - 17, "");
}{for(var i = 0, len = gdjs.GameCode.GDDashParticlesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDashParticlesObjects3[i].setAngle(180);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Dash", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).setNumber(1500);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").setMaxSpeed(1500);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").setCurrentSpeed(1500);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(2)).setNumber(30);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].setVariableBoolean(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(3), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableString(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)) == "right" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9228676);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
gdjs.GameCode.GDDashParticlesObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDashParticlesObjects2Objects, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointX("")) - 17, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("")) - 17, "");
}{for(var i = 0, len = gdjs.GameCode.GDDashParticlesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDashParticlesObjects2[i].setAngle(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Dash", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(1500);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(1500);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setCurrentSpeed(1500);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)).setNumber(30);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setVariableBoolean(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(3), true);
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDPlayerObjects1, gdjs.GameCode.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)).sub(1);
}
}}

}


{

gdjs.copyArray(gdjs.GameCode.GDPlayerObjects1, gdjs.GameCode.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)) > 300 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)).sub(100);
}
}}

}


{

gdjs.copyArray(gdjs.GameCode.GDPlayerObjects1, gdjs.GameCode.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)) < 300 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(300);
}
}}

}


{

/* Reuse gdjs.GameCode.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)) == 300 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9233252);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setVariableBoolean(gdjs.GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(3), false);
}
}}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9220276);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(1))));
}
}
{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerDashEffectObjects2Objects = Hashtable.newFrom({"PlayerDashEffect": gdjs.GameCode.GDPlayerDashEffectObjects2});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableBoolean(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(3), true) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
gdjs.GameCode.GDPlayerDashEffectObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerDashEffectObjects2Objects, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDPlayerDashEffectObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerDashEffectObjects2[i].setAnimation((( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getAnimation()));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerDashEffectObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerDashEffectObjects2[i].setAnimationFrame((( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getAnimationFrame()));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerDashEffectObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerDashEffectObjects2[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerDashEffectObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerDashEffectObjects2[i].setZOrder(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerDashEffect"), gdjs.GameCode.GDPlayerDashEffectObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerDashEffectObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerDashEffectObjects2[i].setOpacity(gdjs.GameCode.GDPlayerDashEffectObjects2[i].getOpacity() - (10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerDashEffect"), gdjs.GameCode.GDPlayerDashEffectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerDashEffectObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerDashEffectObjects1[i].getOpacity() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerDashEffectObjects1[k] = gdjs.GameCode.GDPlayerDashEffectObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerDashEffectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerDashEffectObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerDashEffectObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerDashEffectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZoomInButtonObjects3Objects = Hashtable.newFrom({"ZoomInButton": gdjs.GameCode.GDZoomInButtonObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZoomOutButtonObjects3Objects = Hashtable.newFrom({"ZoomOutButton": gdjs.GameCode.GDZoomOutButtonObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZoomInButtonObjects3Objects = Hashtable.newFrom({"ZoomInButton": gdjs.GameCode.GDZoomInButtonObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZoomOutButtonObjects3Objects = Hashtable.newFrom({"ZoomOutButton": gdjs.GameCode.GDZoomOutButtonObjects3});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ZoomInButton"), gdjs.GameCode.GDZoomInButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("ZoomOutButton"), gdjs.GameCode.GDZoomOutButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZoomInButtonObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZoomOutButtonObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "move";
}
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "both", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "Grid", "both", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "Selector", "both", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ZoomInButton"), gdjs.GameCode.GDZoomInButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZoomInButtonObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "zoomIn", gdjs.evtTools.camera.getCameraZoom(runtimeScene, "Grid", 0) * 1.1, "Grid", 150, "easeOutQuad");
}{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "zoomIn", gdjs.evtTools.camera.getCameraZoom(runtimeScene, "", 0) * 1.1, "", 150, "easeOutQuad");
}{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "zoomIn", gdjs.evtTools.camera.getCameraZoom(runtimeScene, "", 0) * 1.1, "Selector", 150, "easeOutQuad");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "zoomIn", gdjs.evtTools.camera.getCameraZoom(runtimeScene, "Grid", 0) * 1.1, "Grid", 150, "easeOutQuad");
}{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "zoomIn", gdjs.evtTools.camera.getCameraZoom(runtimeScene, "", 0) * 1.1, "", 150, "easeOutQuad");
}{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "zoomIn", gdjs.evtTools.camera.getCameraZoom(runtimeScene, "", 0) * 1.1, "Selector", 150, "easeOutQuad");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ZoomOutButton"), gdjs.GameCode.GDZoomOutButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZoomOutButtonObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "zoomIn", gdjs.evtTools.camera.getCameraZoom(runtimeScene, "Grid", 0) * 0.9, "Grid", 150, "easeOutQuad");
}{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "zoomIn", gdjs.evtTools.camera.getCameraZoom(runtimeScene, "", 0) * 0.9, "", 150, "easeOutQuad");
}{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "zoomIn", gdjs.evtTools.camera.getCameraZoom(runtimeScene, "", 0) * 0.9, "Selector", 150, "easeOutQuad");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "zoomIn", gdjs.evtTools.camera.getCameraZoom(runtimeScene, "Grid", 0) * 0.9, "Grid", 150, "easeOutQuad");
}{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "zoomIn", gdjs.evtTools.camera.getCameraZoom(runtimeScene, "", 0) * 0.9, "", 150, "easeOutQuad");
}{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "zoomIn", gdjs.evtTools.camera.getCameraZoom(runtimeScene, "", 0) * 0.9, "Selector", 150, "easeOutQuad");
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSelectorObjects3Objects = Hashtable.newFrom({"Selector": gdjs.GameCode.GDSelectorObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSelectorObjects3Objects = Hashtable.newFrom({"Selector": gdjs.GameCode.GDSelectorObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDOffGridButtonObjects3Objects = Hashtable.newFrom({"OffGridButton": gdjs.GameCode.GDOffGridButtonObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBlockObjects3Objects = Hashtable.newFrom({"Block": gdjs.GameCode.GDBlockObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBlockObjects2Objects = Hashtable.newFrom({"Block": gdjs.GameCode.GDBlockObjects2});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OffGridButton"), gdjs.GameCode.GDOffGridButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDOffGridButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDOffGridButtonObjects3[i].getVariableBoolean(gdjs.GameCode.GDOffGridButtonObjects3[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDOffGridButtonObjects3[k] = gdjs.GameCode.GDOffGridButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDOffGridButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDOffGridButtonObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameCode.GDSelectorObjects3);
{for(var i = 0, len = gdjs.GameCode.GDSelectorObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDSelectorObjects3[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "Grid", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "Grid", 0));
}
}{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSelectorObjects3Objects, 48, 48, 24, 24, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.GameCode.GDOffGridButtonObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDOffGridButtonObjects3[i].setAnimationName("Off");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OffGridButton"), gdjs.GameCode.GDOffGridButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDOffGridButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDOffGridButtonObjects3[i].getVariableBoolean(gdjs.GameCode.GDOffGridButtonObjects3[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDOffGridButtonObjects3[k] = gdjs.GameCode.GDOffGridButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDOffGridButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDOffGridButtonObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameCode.GDSelectorObjects3);
{for(var i = 0, len = gdjs.GameCode.GDSelectorObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDSelectorObjects3[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "Grid", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "Grid", 0));
}
}{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSelectorObjects3Objects, 12, 12, 24, 24, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.GameCode.GDOffGridButtonObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDOffGridButtonObjects3[i].setAnimationName("On");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OffGridButton"), gdjs.GameCode.GDOffGridButtonObjects3);
{for(var i = 0, len = gdjs.GameCode.GDOffGridButtonObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDOffGridButtonObjects3[i].setVariableBoolean(gdjs.GameCode.GDOffGridButtonObjects3[i].getVariables().getFromIndex(0), true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OffGridButton"), gdjs.GameCode.GDOffGridButtonObjects3);
{for(var i = 0, len = gdjs.GameCode.GDOffGridButtonObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDOffGridButtonObjects3[i].setVariableBoolean(gdjs.GameCode.GDOffGridButtonObjects3[i].getVariables().getFromIndex(0), false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OffGridButton"), gdjs.GameCode.GDOffGridButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDOffGridButtonObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDOffGridButtonObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDOffGridButtonObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDOffGridButtonObjects3[i].toggleVariableBoolean(gdjs.GameCode.GDOffGridButtonObjects3[i].getVariables().getFromIndex(0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "place";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9630852);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameCode.GDSelectorObjects3);
gdjs.GameCode.GDBlockObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBlockObjects3Objects, (( gdjs.GameCode.GDSelectorObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSelectorObjects3[0].getPointX("")), (( gdjs.GameCode.GDSelectorObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSelectorObjects3[0].getPointY("")), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.GameCode.GDBlockObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "remove";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBlockObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBlockObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBlockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBlockObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMoveModeObjects3Objects = Hashtable.newFrom({"MoveMode": gdjs.GameCode.GDMoveModeObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRemoveModeObjects3Objects = Hashtable.newFrom({"RemoveMode": gdjs.GameCode.GDRemoveModeObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlacingModeObjects3Objects = Hashtable.newFrom({"PlacingMode": gdjs.GameCode.GDPlacingModeObjects3});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MoveMode"), gdjs.GameCode.GDMoveModeObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMoveModeObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("move");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RemoveMode"), gdjs.GameCode.GDRemoveModeObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRemoveModeObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("remove");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlacingMode"), gdjs.GameCode.GDPlacingModeObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlacingModeObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("place");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("move");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("place");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num3");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("remove");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "place";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ModeText"), gdjs.GameCode.GDModeTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameCode.GDSelectorObjects3);
{for(var i = 0, len = gdjs.GameCode.GDSelectorObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDSelectorObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDModeTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDModeTextObjects3[i].setString("Mode: Place");
}
}{for(var i = 0, len = gdjs.GameCode.GDModeTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDModeTextObjects3[i].setColor("129;255;0");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "remove";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ModeText"), gdjs.GameCode.GDModeTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameCode.GDSelectorObjects3);
{for(var i = 0, len = gdjs.GameCode.GDSelectorObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDSelectorObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDModeTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDModeTextObjects3[i].setString("Mode: Remove");
}
}{for(var i = 0, len = gdjs.GameCode.GDModeTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDModeTextObjects3[i].setColor("255;0;31");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "move";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ModeText"), gdjs.GameCode.GDModeTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameCode.GDSelectorObjects2);
{for(var i = 0, len = gdjs.GameCode.GDSelectorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSelectorObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDModeTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDModeTextObjects2[i].setString("Mode: Move");
}
}{for(var i = 0, len = gdjs.GameCode.GDModeTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDModeTextObjects2[i].setColor("255;255;255");
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSaveButtonObjects2Objects = Hashtable.newFrom({"SaveButton": gdjs.GameCode.GDSaveButtonObjects2});
gdjs.GameCode.eventsList9 = function(runtimeScene) {

};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.GameCode.GDBlockObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDBlockObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDBlockObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDBlockObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDBlockObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(2), (( gdjs.GameCode.GDBlockObjects4.length === 0 ) ? "" :gdjs.GameCode.GDBlockObjects4[0].getName()));
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(2), (( gdjs.GameCode.GDBlockObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDBlockObjects4[0].getPointX("")));
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(2), (( gdjs.GameCode.GDBlockObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDBlockObjects4[0].getPointY("")));
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(2), (( gdjs.GameCode.GDBlockObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDBlockObjects4[0].getAngle()));
}}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LvlDataDebug"), gdjs.GameCode.GDLvlDataDebugObjects2);
{for(var i = 0, len = gdjs.GameCode.GDLvlDataDebugObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLvlDataDebugObjects2[i].setString(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(2)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SaveButton"), gdjs.GameCode.GDSaveButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSaveButtonObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(2));
}
{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDLoadButtonObjects1Objects = Hashtable.newFrom({"LoadButton": gdjs.GameCode.GDLoadButtonObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBlockObjects2Objects = Hashtable.newFrom({"Block": gdjs.GameCode.GDBlockObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBlockObjects4Objects = Hashtable.newFrom({"Block": gdjs.GameCode.GDBlockObjects4});
gdjs.GameCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("queuedName").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("child")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 2;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("queuedX").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("child")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 3;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("queuedY").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("child")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 4;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDBlockObjects2, gdjs.GameCode.GDBlockObjects4);

{runtimeScene.getScene().getVariables().get("queuedAngle").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("child")));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBlockObjects4Objects, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("queuedName")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("queuedX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("queuedY")), "");
}{for(var i = 0, len = gdjs.GameCode.GDBlockObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBlockObjects4[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("queuedAngle")));
}
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene, asyncObjectsList) {

{


const valueIteratorReference3 = runtimeScene.getScene().getVariables().get("child");
const iterableReference3 = runtimeScene.getScene().getVariables().getFromIndex(2);
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{ //Subevents: 
gdjs.GameCode.eventsList12(runtimeScene, asyncObjectsList);} //Subevents end.
}
}
}

}


};gdjs.GameCode.asyncCallback9574004 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.GameCode.GDBlockObjects2);
gdjs.copyArray(runtimeScene.getObjects("LvlDataDebug"), gdjs.GameCode.GDLvlDataDebugObjects2);
{for(var i = 0, len = gdjs.GameCode.GDLvlDataDebugObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLvlDataDebugObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().getFromIndex(2));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBlockObjects2Objects);
}{for(var i = 0, len = gdjs.GameCode.GDBlockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBlockObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__Clipboard__AsynchronouslyReadTextCrossPlaform.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.GameCode.asyncCallback9574004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LoadButton"), gdjs.GameCode.GDLoadButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDLoadButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


{


gdjs.GameCode.eventsList15(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZoomInButtonObjects2ObjectsGDgdjs_46GameCode_46GDZoomOutButtonObjects2ObjectsGDgdjs_46GameCode_46GDOffGridButtonObjects2ObjectsGDgdjs_46GameCode_46GDPlacingModeObjects2ObjectsGDgdjs_46GameCode_46GDRemoveModeObjects2ObjectsGDgdjs_46GameCode_46GDMoveModeObjects2ObjectsGDgdjs_46GameCode_46GDSaveButtonObjects2ObjectsGDgdjs_46GameCode_46GDLoadButtonObjects2Objects = Hashtable.newFrom({"ZoomInButton": gdjs.GameCode.GDZoomInButtonObjects2, "ZoomOutButton": gdjs.GameCode.GDZoomOutButtonObjects2, "OffGridButton": gdjs.GameCode.GDOffGridButtonObjects2, "PlacingMode": gdjs.GameCode.GDPlacingModeObjects2, "RemoveMode": gdjs.GameCode.GDRemoveModeObjects2, "MoveMode": gdjs.GameCode.GDMoveModeObjects2, "SaveButton": gdjs.GameCode.GDSaveButtonObjects2, "LoadButton": gdjs.GameCode.GDLoadButtonObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZoomInButtonObjects1ObjectsGDgdjs_46GameCode_46GDZoomOutButtonObjects1ObjectsGDgdjs_46GameCode_46GDOffGridButtonObjects1ObjectsGDgdjs_46GameCode_46GDPlacingModeObjects1ObjectsGDgdjs_46GameCode_46GDRemoveModeObjects1ObjectsGDgdjs_46GameCode_46GDMoveModeObjects1ObjectsGDgdjs_46GameCode_46GDSaveButtonObjects1ObjectsGDgdjs_46GameCode_46GDLoadButtonObjects1Objects = Hashtable.newFrom({"ZoomInButton": gdjs.GameCode.GDZoomInButtonObjects1, "ZoomOutButton": gdjs.GameCode.GDZoomOutButtonObjects1, "OffGridButton": gdjs.GameCode.GDOffGridButtonObjects1, "PlacingMode": gdjs.GameCode.GDPlacingModeObjects1, "RemoveMode": gdjs.GameCode.GDRemoveModeObjects1, "MoveMode": gdjs.GameCode.GDMoveModeObjects1, "SaveButton": gdjs.GameCode.GDSaveButtonObjects1, "LoadButton": gdjs.GameCode.GDLoadButtonObjects1});
gdjs.GameCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LoadButton"), gdjs.GameCode.GDLoadButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("MoveMode"), gdjs.GameCode.GDMoveModeObjects2);
gdjs.copyArray(runtimeScene.getObjects("OffGridButton"), gdjs.GameCode.GDOffGridButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlacingMode"), gdjs.GameCode.GDPlacingModeObjects2);
gdjs.copyArray(runtimeScene.getObjects("RemoveMode"), gdjs.GameCode.GDRemoveModeObjects2);
gdjs.copyArray(runtimeScene.getObjects("SaveButton"), gdjs.GameCode.GDSaveButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("ZoomInButton"), gdjs.GameCode.GDZoomInButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("ZoomOutButton"), gdjs.GameCode.GDZoomOutButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZoomInButtonObjects2ObjectsGDgdjs_46GameCode_46GDZoomOutButtonObjects2ObjectsGDgdjs_46GameCode_46GDOffGridButtonObjects2ObjectsGDgdjs_46GameCode_46GDPlacingModeObjects2ObjectsGDgdjs_46GameCode_46GDRemoveModeObjects2ObjectsGDgdjs_46GameCode_46GDMoveModeObjects2ObjectsGDgdjs_46GameCode_46GDSaveButtonObjects2ObjectsGDgdjs_46GameCode_46GDLoadButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9567156);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDLoadButtonObjects2 */
/* Reuse gdjs.GameCode.GDMoveModeObjects2 */
/* Reuse gdjs.GameCode.GDOffGridButtonObjects2 */
/* Reuse gdjs.GameCode.GDPlacingModeObjects2 */
/* Reuse gdjs.GameCode.GDRemoveModeObjects2 */
/* Reuse gdjs.GameCode.GDSaveButtonObjects2 */
/* Reuse gdjs.GameCode.GDZoomInButtonObjects2 */
/* Reuse gdjs.GameCode.GDZoomOutButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDZoomInButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZoomInButtonObjects2[i].setOpacity(155);
}
for(var i = 0, len = gdjs.GameCode.GDZoomOutButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZoomOutButtonObjects2[i].setOpacity(155);
}
for(var i = 0, len = gdjs.GameCode.GDOffGridButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDOffGridButtonObjects2[i].setOpacity(155);
}
for(var i = 0, len = gdjs.GameCode.GDPlacingModeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlacingModeObjects2[i].setOpacity(155);
}
for(var i = 0, len = gdjs.GameCode.GDRemoveModeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRemoveModeObjects2[i].setOpacity(155);
}
for(var i = 0, len = gdjs.GameCode.GDMoveModeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMoveModeObjects2[i].setOpacity(155);
}
for(var i = 0, len = gdjs.GameCode.GDSaveButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSaveButtonObjects2[i].setOpacity(155);
}
for(var i = 0, len = gdjs.GameCode.GDLoadButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLoadButtonObjects2[i].setOpacity(155);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9567396);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoadButton"), gdjs.GameCode.GDLoadButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("MoveMode"), gdjs.GameCode.GDMoveModeObjects2);
gdjs.copyArray(runtimeScene.getObjects("OffGridButton"), gdjs.GameCode.GDOffGridButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlacingMode"), gdjs.GameCode.GDPlacingModeObjects2);
gdjs.copyArray(runtimeScene.getObjects("RemoveMode"), gdjs.GameCode.GDRemoveModeObjects2);
gdjs.copyArray(runtimeScene.getObjects("SaveButton"), gdjs.GameCode.GDSaveButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("ZoomInButton"), gdjs.GameCode.GDZoomInButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("ZoomOutButton"), gdjs.GameCode.GDZoomOutButtonObjects2);
{for(var i = 0, len = gdjs.GameCode.GDZoomInButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZoomInButtonObjects2[i].setOpacity(255);
}
for(var i = 0, len = gdjs.GameCode.GDZoomOutButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZoomOutButtonObjects2[i].setOpacity(255);
}
for(var i = 0, len = gdjs.GameCode.GDOffGridButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDOffGridButtonObjects2[i].setOpacity(255);
}
for(var i = 0, len = gdjs.GameCode.GDPlacingModeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlacingModeObjects2[i].setOpacity(255);
}
for(var i = 0, len = gdjs.GameCode.GDRemoveModeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRemoveModeObjects2[i].setOpacity(255);
}
for(var i = 0, len = gdjs.GameCode.GDMoveModeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMoveModeObjects2[i].setOpacity(255);
}
for(var i = 0, len = gdjs.GameCode.GDSaveButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSaveButtonObjects2[i].setOpacity(255);
}
for(var i = 0, len = gdjs.GameCode.GDLoadButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLoadButtonObjects2[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LoadButton"), gdjs.GameCode.GDLoadButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveMode"), gdjs.GameCode.GDMoveModeObjects1);
gdjs.copyArray(runtimeScene.getObjects("OffGridButton"), gdjs.GameCode.GDOffGridButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlacingMode"), gdjs.GameCode.GDPlacingModeObjects1);
gdjs.copyArray(runtimeScene.getObjects("RemoveMode"), gdjs.GameCode.GDRemoveModeObjects1);
gdjs.copyArray(runtimeScene.getObjects("SaveButton"), gdjs.GameCode.GDSaveButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ZoomInButton"), gdjs.GameCode.GDZoomInButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ZoomOutButton"), gdjs.GameCode.GDZoomOutButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZoomInButtonObjects1ObjectsGDgdjs_46GameCode_46GDZoomOutButtonObjects1ObjectsGDgdjs_46GameCode_46GDOffGridButtonObjects1ObjectsGDgdjs_46GameCode_46GDPlacingModeObjects1ObjectsGDgdjs_46GameCode_46GDRemoveModeObjects1ObjectsGDgdjs_46GameCode_46GDMoveModeObjects1ObjectsGDgdjs_46GameCode_46GDSaveButtonObjects1ObjectsGDgdjs_46GameCode_46GDLoadButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDLoadButtonObjects1 */
/* Reuse gdjs.GameCode.GDMoveModeObjects1 */
/* Reuse gdjs.GameCode.GDOffGridButtonObjects1 */
/* Reuse gdjs.GameCode.GDPlacingModeObjects1 */
/* Reuse gdjs.GameCode.GDRemoveModeObjects1 */
/* Reuse gdjs.GameCode.GDSaveButtonObjects1 */
/* Reuse gdjs.GameCode.GDZoomInButtonObjects1 */
/* Reuse gdjs.GameCode.GDZoomOutButtonObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDZoomInButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDZoomInButtonObjects1[i].setOpacity(255);
}
for(var i = 0, len = gdjs.GameCode.GDZoomOutButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDZoomOutButtonObjects1[i].setOpacity(255);
}
for(var i = 0, len = gdjs.GameCode.GDOffGridButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDOffGridButtonObjects1[i].setOpacity(255);
}
for(var i = 0, len = gdjs.GameCode.GDPlacingModeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlacingModeObjects1[i].setOpacity(255);
}
for(var i = 0, len = gdjs.GameCode.GDRemoveModeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRemoveModeObjects1[i].setOpacity(255);
}
for(var i = 0, len = gdjs.GameCode.GDMoveModeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMoveModeObjects1[i].setOpacity(255);
}
for(var i = 0, len = gdjs.GameCode.GDSaveButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSaveButtonObjects1[i].setOpacity(255);
}
for(var i = 0, len = gdjs.GameCode.GDLoadButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLoadButtonObjects1[i].setOpacity(255);
}
}}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameCode.GDSelectorObjects1);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 25);
}{for(var i = 0, len = gdjs.GameCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSelectorObjects1[i].setOpacity(100);
}
}}

}


{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList16(runtimeScene);
}


{


gdjs.GameCode.eventsList17(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects5.length = 0;
gdjs.GameCode.GDPlayerDashEffectObjects1.length = 0;
gdjs.GameCode.GDPlayerDashEffectObjects2.length = 0;
gdjs.GameCode.GDPlayerDashEffectObjects3.length = 0;
gdjs.GameCode.GDPlayerDashEffectObjects4.length = 0;
gdjs.GameCode.GDPlayerDashEffectObjects5.length = 0;
gdjs.GameCode.GDBlockObjects1.length = 0;
gdjs.GameCode.GDBlockObjects2.length = 0;
gdjs.GameCode.GDBlockObjects3.length = 0;
gdjs.GameCode.GDBlockObjects4.length = 0;
gdjs.GameCode.GDBlockObjects5.length = 0;
gdjs.GameCode.GDJumpParticlesObjects1.length = 0;
gdjs.GameCode.GDJumpParticlesObjects2.length = 0;
gdjs.GameCode.GDJumpParticlesObjects3.length = 0;
gdjs.GameCode.GDJumpParticlesObjects4.length = 0;
gdjs.GameCode.GDJumpParticlesObjects5.length = 0;
gdjs.GameCode.GDDashParticlesObjects1.length = 0;
gdjs.GameCode.GDDashParticlesObjects2.length = 0;
gdjs.GameCode.GDDashParticlesObjects3.length = 0;
gdjs.GameCode.GDDashParticlesObjects4.length = 0;
gdjs.GameCode.GDDashParticlesObjects5.length = 0;
gdjs.GameCode.GDGridObjects1.length = 0;
gdjs.GameCode.GDGridObjects2.length = 0;
gdjs.GameCode.GDGridObjects3.length = 0;
gdjs.GameCode.GDGridObjects4.length = 0;
gdjs.GameCode.GDGridObjects5.length = 0;
gdjs.GameCode.GDZoomInButtonObjects1.length = 0;
gdjs.GameCode.GDZoomInButtonObjects2.length = 0;
gdjs.GameCode.GDZoomInButtonObjects3.length = 0;
gdjs.GameCode.GDZoomInButtonObjects4.length = 0;
gdjs.GameCode.GDZoomInButtonObjects5.length = 0;
gdjs.GameCode.GDSaveButtonObjects1.length = 0;
gdjs.GameCode.GDSaveButtonObjects2.length = 0;
gdjs.GameCode.GDSaveButtonObjects3.length = 0;
gdjs.GameCode.GDSaveButtonObjects4.length = 0;
gdjs.GameCode.GDSaveButtonObjects5.length = 0;
gdjs.GameCode.GDLoadButtonObjects1.length = 0;
gdjs.GameCode.GDLoadButtonObjects2.length = 0;
gdjs.GameCode.GDLoadButtonObjects3.length = 0;
gdjs.GameCode.GDLoadButtonObjects4.length = 0;
gdjs.GameCode.GDLoadButtonObjects5.length = 0;
gdjs.GameCode.GDZoomOutButtonObjects1.length = 0;
gdjs.GameCode.GDZoomOutButtonObjects2.length = 0;
gdjs.GameCode.GDZoomOutButtonObjects3.length = 0;
gdjs.GameCode.GDZoomOutButtonObjects4.length = 0;
gdjs.GameCode.GDZoomOutButtonObjects5.length = 0;
gdjs.GameCode.GDSelectorObjects1.length = 0;
gdjs.GameCode.GDSelectorObjects2.length = 0;
gdjs.GameCode.GDSelectorObjects3.length = 0;
gdjs.GameCode.GDSelectorObjects4.length = 0;
gdjs.GameCode.GDSelectorObjects5.length = 0;
gdjs.GameCode.GDOffGridButtonObjects1.length = 0;
gdjs.GameCode.GDOffGridButtonObjects2.length = 0;
gdjs.GameCode.GDOffGridButtonObjects3.length = 0;
gdjs.GameCode.GDOffGridButtonObjects4.length = 0;
gdjs.GameCode.GDOffGridButtonObjects5.length = 0;
gdjs.GameCode.GDPlacingModeObjects1.length = 0;
gdjs.GameCode.GDPlacingModeObjects2.length = 0;
gdjs.GameCode.GDPlacingModeObjects3.length = 0;
gdjs.GameCode.GDPlacingModeObjects4.length = 0;
gdjs.GameCode.GDPlacingModeObjects5.length = 0;
gdjs.GameCode.GDRemoveModeObjects1.length = 0;
gdjs.GameCode.GDRemoveModeObjects2.length = 0;
gdjs.GameCode.GDRemoveModeObjects3.length = 0;
gdjs.GameCode.GDRemoveModeObjects4.length = 0;
gdjs.GameCode.GDRemoveModeObjects5.length = 0;
gdjs.GameCode.GDMoveModeObjects1.length = 0;
gdjs.GameCode.GDMoveModeObjects2.length = 0;
gdjs.GameCode.GDMoveModeObjects3.length = 0;
gdjs.GameCode.GDMoveModeObjects4.length = 0;
gdjs.GameCode.GDMoveModeObjects5.length = 0;
gdjs.GameCode.GDModeTextObjects1.length = 0;
gdjs.GameCode.GDModeTextObjects2.length = 0;
gdjs.GameCode.GDModeTextObjects3.length = 0;
gdjs.GameCode.GDModeTextObjects4.length = 0;
gdjs.GameCode.GDModeTextObjects5.length = 0;
gdjs.GameCode.GDLvlDataDebugObjects1.length = 0;
gdjs.GameCode.GDLvlDataDebugObjects2.length = 0;
gdjs.GameCode.GDLvlDataDebugObjects3.length = 0;
gdjs.GameCode.GDLvlDataDebugObjects4.length = 0;
gdjs.GameCode.GDLvlDataDebugObjects5.length = 0;

gdjs.GameCode.eventsList18(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
