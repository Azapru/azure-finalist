
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel || {};

/**
 * Behavior generated from Character game feel
 */
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel = class CharacterGameFeel extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.AIdleCheck = behaviorData.AIdleCheck !== undefined ? behaviorData.AIdleCheck : true;
    this._behaviorData.BIdleScale = behaviorData.BIdleScale !== undefined ? behaviorData.BIdleScale : Number("0.1") || 0;
    this._behaviorData.CIdleScalingSpeed = behaviorData.CIdleScalingSpeed !== undefined ? behaviorData.CIdleScalingSpeed : Number("500") || 0;
    this._behaviorData.DPlatformerCharacterBehavior = behaviorData.DPlatformerCharacterBehavior !== undefined ? behaviorData.DPlatformerCharacterBehavior : "";
    this._behaviorData.ETweenBehavior = behaviorData.ETweenBehavior !== undefined ? behaviorData.ETweenBehavior : "";
    this._behaviorData.FJumpCheck = behaviorData.FJumpCheck !== undefined ? behaviorData.FJumpCheck : true;
    this._behaviorData.GJumpScale = behaviorData.GJumpScale !== undefined ? behaviorData.GJumpScale : Number("0.2") || 0;
    this._behaviorData.HJumpScalingSpeed = behaviorData.HJumpScalingSpeed !== undefined ? behaviorData.HJumpScalingSpeed : Number("200") || 0;
    this._behaviorData.IallCheck = behaviorData.IallCheck !== undefined ? behaviorData.IallCheck : true;
    this._behaviorData.JFallScale = behaviorData.JFallScale !== undefined ? behaviorData.JFallScale : Number("0.3") || 0;
    this._behaviorData.KFallScalingSpeed = behaviorData.KFallScalingSpeed !== undefined ? behaviorData.KFallScalingSpeed : Number("200") || 0;
    this._behaviorData.LandCheck = behaviorData.LandCheck !== undefined ? behaviorData.LandCheck : true;
    this._behaviorData.MLandScale = behaviorData.MLandScale !== undefined ? behaviorData.MLandScale : Number("0.6") || 0;
    this._behaviorData.NLandScalingSpeed = behaviorData.NLandScalingSpeed !== undefined ? behaviorData.NLandScalingSpeed : Number("100") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.AIdleCheck !== newBehaviorData.AIdleCheck)
      this._behaviorData.AIdleCheck = newBehaviorData.AIdleCheck;
    if (oldBehaviorData.BIdleScale !== newBehaviorData.BIdleScale)
      this._behaviorData.BIdleScale = newBehaviorData.BIdleScale;
    if (oldBehaviorData.CIdleScalingSpeed !== newBehaviorData.CIdleScalingSpeed)
      this._behaviorData.CIdleScalingSpeed = newBehaviorData.CIdleScalingSpeed;
    if (oldBehaviorData.DPlatformerCharacterBehavior !== newBehaviorData.DPlatformerCharacterBehavior)
      this._behaviorData.DPlatformerCharacterBehavior = newBehaviorData.DPlatformerCharacterBehavior;
    if (oldBehaviorData.ETweenBehavior !== newBehaviorData.ETweenBehavior)
      this._behaviorData.ETweenBehavior = newBehaviorData.ETweenBehavior;
    if (oldBehaviorData.FJumpCheck !== newBehaviorData.FJumpCheck)
      this._behaviorData.FJumpCheck = newBehaviorData.FJumpCheck;
    if (oldBehaviorData.GJumpScale !== newBehaviorData.GJumpScale)
      this._behaviorData.GJumpScale = newBehaviorData.GJumpScale;
    if (oldBehaviorData.HJumpScalingSpeed !== newBehaviorData.HJumpScalingSpeed)
      this._behaviorData.HJumpScalingSpeed = newBehaviorData.HJumpScalingSpeed;
    if (oldBehaviorData.IallCheck !== newBehaviorData.IallCheck)
      this._behaviorData.IallCheck = newBehaviorData.IallCheck;
    if (oldBehaviorData.JFallScale !== newBehaviorData.JFallScale)
      this._behaviorData.JFallScale = newBehaviorData.JFallScale;
    if (oldBehaviorData.KFallScalingSpeed !== newBehaviorData.KFallScalingSpeed)
      this._behaviorData.KFallScalingSpeed = newBehaviorData.KFallScalingSpeed;
    if (oldBehaviorData.LandCheck !== newBehaviorData.LandCheck)
      this._behaviorData.LandCheck = newBehaviorData.LandCheck;
    if (oldBehaviorData.MLandScale !== newBehaviorData.MLandScale)
      this._behaviorData.MLandScale = newBehaviorData.MLandScale;
    if (oldBehaviorData.NLandScalingSpeed !== newBehaviorData.NLandScalingSpeed)
      this._behaviorData.NLandScalingSpeed = newBehaviorData.NLandScalingSpeed;

    return true;
  }

  // Properties:
  
  _getAIdleCheck() {
    return this._behaviorData.AIdleCheck !== undefined ? this._behaviorData.AIdleCheck : true;
  }
  _setAIdleCheck(newValue) {
    this._behaviorData.AIdleCheck = newValue;
  }
  _toggleAIdleCheck() {
    this._setAIdleCheck(!this._getAIdleCheck());
  }
  _getBIdleScale() {
    return this._behaviorData.BIdleScale !== undefined ? this._behaviorData.BIdleScale : Number("0.1") || 0;
  }
  _setBIdleScale(newValue) {
    this._behaviorData.BIdleScale = newValue;
  }
  _getCIdleScalingSpeed() {
    return this._behaviorData.CIdleScalingSpeed !== undefined ? this._behaviorData.CIdleScalingSpeed : Number("500") || 0;
  }
  _setCIdleScalingSpeed(newValue) {
    this._behaviorData.CIdleScalingSpeed = newValue;
  }
  _getDPlatformerCharacterBehavior() {
    return this._behaviorData.DPlatformerCharacterBehavior !== undefined ? this._behaviorData.DPlatformerCharacterBehavior : "";
  }
  _setDPlatformerCharacterBehavior(newValue) {
    this._behaviorData.DPlatformerCharacterBehavior = newValue;
  }
  _getETweenBehavior() {
    return this._behaviorData.ETweenBehavior !== undefined ? this._behaviorData.ETweenBehavior : "";
  }
  _setETweenBehavior(newValue) {
    this._behaviorData.ETweenBehavior = newValue;
  }
  _getFJumpCheck() {
    return this._behaviorData.FJumpCheck !== undefined ? this._behaviorData.FJumpCheck : true;
  }
  _setFJumpCheck(newValue) {
    this._behaviorData.FJumpCheck = newValue;
  }
  _toggleFJumpCheck() {
    this._setFJumpCheck(!this._getFJumpCheck());
  }
  _getGJumpScale() {
    return this._behaviorData.GJumpScale !== undefined ? this._behaviorData.GJumpScale : Number("0.2") || 0;
  }
  _setGJumpScale(newValue) {
    this._behaviorData.GJumpScale = newValue;
  }
  _getHJumpScalingSpeed() {
    return this._behaviorData.HJumpScalingSpeed !== undefined ? this._behaviorData.HJumpScalingSpeed : Number("200") || 0;
  }
  _setHJumpScalingSpeed(newValue) {
    this._behaviorData.HJumpScalingSpeed = newValue;
  }
  _getIallCheck() {
    return this._behaviorData.IallCheck !== undefined ? this._behaviorData.IallCheck : true;
  }
  _setIallCheck(newValue) {
    this._behaviorData.IallCheck = newValue;
  }
  _toggleIallCheck() {
    this._setIallCheck(!this._getIallCheck());
  }
  _getJFallScale() {
    return this._behaviorData.JFallScale !== undefined ? this._behaviorData.JFallScale : Number("0.3") || 0;
  }
  _setJFallScale(newValue) {
    this._behaviorData.JFallScale = newValue;
  }
  _getKFallScalingSpeed() {
    return this._behaviorData.KFallScalingSpeed !== undefined ? this._behaviorData.KFallScalingSpeed : Number("200") || 0;
  }
  _setKFallScalingSpeed(newValue) {
    this._behaviorData.KFallScalingSpeed = newValue;
  }
  _getLandCheck() {
    return this._behaviorData.LandCheck !== undefined ? this._behaviorData.LandCheck : true;
  }
  _setLandCheck(newValue) {
    this._behaviorData.LandCheck = newValue;
  }
  _toggleLandCheck() {
    this._setLandCheck(!this._getLandCheck());
  }
  _getMLandScale() {
    return this._behaviorData.MLandScale !== undefined ? this._behaviorData.MLandScale : Number("0.6") || 0;
  }
  _setMLandScale(newValue) {
    this._behaviorData.MLandScale = newValue;
  }
  _getNLandScalingSpeed() {
    return this._behaviorData.NLandScalingSpeed !== undefined ? this._behaviorData.NLandScalingSpeed : Number("100") || 0;
  }
  _setNLandScalingSpeed(newValue) {
    this._behaviorData.NLandScalingSpeed = newValue;
  }
}

/**
 * Shared data generated from Character game feel
 */
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.SharedData = class CharacterGameFeelSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._CharacterGameFeel_CharacterGameFeelSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._CharacterGameFeel_CharacterGameFeelSharedData = new gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.SharedData(
      initialData
    );
  }
  return instanceContainer._CharacterGameFeel_CharacterGameFeelSharedData;
}

// Methods:
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Idle").getChild("BackToNormalScale"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).stopTween("__GameFeel.Idle.Breathing.Start", true);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).stopTween("__GameFeel.Idle.Breathing.End", true);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Idle").getChild("Start"), false);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).addObjectScaleTween("__GameFeel.Idle.Return", 1, 1, "linear", 100, false, false);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Idle").getChild("BackToNormalScale"), true);
}
}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__GameFeel").getChild("Idle").getChild("Start"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__GameFeel").getChild("Fall").getChild("IsFalling"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__GameFeel").getChild("Land").getChild("CanFall"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).stopTween("__GameFeel.Jump.Finished", false);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).stopTween("__GameFeel.Idle.Return", false);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__GameFeel").getChild("Idle").getChild("BackToNormalScale"), false);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).addObjectScaleTween("__GameFeel.Idle.Breathing.Start", 1 - (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBIdleScale()), 1 + (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBIdleScale()), "easeInOutSine", (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCIdleScalingSpeed()), false, false);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__GameFeel").getChild("Idle").getChild("Start"), true);
}
}}

}


{



}


{

/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Idle").getChild("Start"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).hasFinished("__GameFeel.Idle.Breathing.Start") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9458476);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).addObjectScaleTween("__GameFeel.Idle.Breathing.End", 1, 1, "easeInOutSine", (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCIdleScalingSpeed()), false, false);
}
}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9449532);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Idle").getChild("IsChecked"), true);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("DPlatformerCharacterBehavior")).isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("DPlatformerCharacterBehavior")).isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("DPlatformerCharacterBehavior")).isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).isPlaying("__GameFeel.Fall.Finish")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("DPlatformerCharacterBehavior")).isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("DPlatformerCharacterBehavior")).isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("DPlatformerCharacterBehavior")).isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).hasFinished("__GameFeel.Idle.Breathing.End") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9456548);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("__GameFeel").getChild("Idle").getChild("Start"), false);
}
}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAIdleCheck()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9447940);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Idle").getChild("IsChecked"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAIdleCheck() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).isPlaying("__GameFeel.Fall.Finish")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9462404);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Jump").getChild("IsChecked"), true);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("DPlatformerCharacterBehavior")).isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Jump").getChild("IsJumping"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).addObjectScaleTween("__GameFeel.Jump.GettingReady", 1 + (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGJumpScale()), 1 - (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGJumpScale()), "easeInOutSine", (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHJumpScalingSpeed()) / 2, false, false);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Jump").getChild("IsJumping"), true);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Jump").getChild("IsJumping"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).hasFinished("__GameFeel.Jump.GettingReady") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9465644);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).stopTween("__GameFeel.Idle.Breathing.Start", false);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).stopTween("__GameFeel.Idle.Breathing.End", false);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).addObjectScaleTween("__GameFeel.Jump.GettingReadyIsFinished", 1 - (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGJumpScale()), 1 + (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGJumpScale()), "easeInOutSine", (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHJumpScalingSpeed()), false, false);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).hasFinished("__GameFeel.Jump.GettingReadyIsFinished") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9467508);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).addObjectScaleTween("__GameFeel.Jump.Finished", 1, 1, "linear", (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHJumpScalingSpeed()), false, true);
}
}}

}


{



}


{

/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("DPlatformerCharacterBehavior")).isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).hasFinished("__GameFeel.Jump.Finished") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9468076);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("__GameFeel").getChild("Jump").getChild("IsJumping"), false);
}
}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFJumpCheck()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Jump").getChild("IsChecked"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFJumpCheck() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLandCheck()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9476372);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).stopTween("__GameFeel.Fall.Start", false);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).addObjectScaleTween("__GameFeel.Fall.Finish", 1, 1, "linear", 100, false, false);
}
}}

}


{



}


{

/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLandCheck() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9477388);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).stopTween("__GameFeel.Fall.Start", false);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Fall").getChild("IsFalling"), false);
}
}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9472196);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Idle").getChild("IsChecked"), true);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("DPlatformerCharacterBehavior")).isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Fall").getChild("IsFalling"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).isPlaying("__GameFeel.Jump.Finished")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).addObjectScaleTween("__GameFeel.Fall.Start", 1 - (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJFallScale()), 1 + (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJFallScale()), "easeInOutSine", (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getKFallScalingSpeed()), false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Fall").getChild("IsFalling"), true);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("DPlatformerCharacterBehavior")).isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Fall").getChild("IsFalling"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9475268);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).hasFinished("__GameFeel.Fall.Finish") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9479316);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("__GameFeel").getChild("Fall").getChild("IsFalling"), false);
}
}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIallCheck()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9470868);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Idle").getChild("IsChecked"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIallCheck() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9482100);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Idle").getChild("IsChecked"), true);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("DPlatformerCharacterBehavior")).isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Land").getChild("IsLanding"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Land").getChild("CanFall"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Land").getChild("IsLanding"), true);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Land").getChild("CanFall"), true);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("DPlatformerCharacterBehavior")).isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Land").getChild("IsLanding"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).addObjectScaleTween("__GameFeel.Land.Start", 1 + (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMLandScale()), 1 - (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMLandScale()), "easeInOutSine", (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNLandScalingSpeed()), false, false);
}
}{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Land").getChild("IsLanding"), false);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).hasFinished("__GameFeel.Land.Start") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9485540);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).addObjectScaleTween("__GameFeel.Land.Finish", 1, 1, "linear", (gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNLandScalingSpeed()), false, false);
}
}}

}


{



}


{

/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).hasFinished("__GameFeel.Land.Finish") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9487076);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("__GameFeel").getChild("Land").getChild("CanFall"), false);
}
}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLandCheck()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9480772);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__GameFeel").getChild("Idle").getChild("IsChecked"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLandCheck() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "DPlatformerCharacterBehavior": this._getDPlatformerCharacterBehavior()
, "ETweenBehavior": this._getETweenBehavior()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext = {};
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1= [];
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2= [];


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i].getVariables().get("__GameFeel").getChild("Idle").getChild("IsChecked"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ETweenBehavior")).isPlaying("__GameFeel.Idle.Return") ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1_1final.push(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).isPlaying("__GameFeel.Idle.Breathing.Start") ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1_1final.push(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1_1final, gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1);
}
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Animations") : "") == "Idle");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i].getVariables().get("__GameFeel").getChild("Jump").getChild("IsChecked"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).isPlaying("__GameFeel.Jump.GettingReady") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Animations") : "") == "Jump");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i].getVariables().get("__GameFeel").getChild("Jump").getChild("IsChecked"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).isPlaying("__GameFeel.Fall.Start") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Animations") : "") == "Fall");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i].getVariables().get("__GameFeel").getChild("Jump").getChild("IsChecked"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).isPlaying("__GameFeel.Land.Start") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[k] = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Animations") : "") == "Land");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList7(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlaying = function(TweenBehavior, Animations, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "DPlatformerCharacterBehavior": this._getDPlatformerCharacterBehavior()
, "ETweenBehavior": this._getETweenBehavior()
, "TweenBehavior": TweenBehavior
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
if (argName === "Animations") return Animations;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.AnimationIsPlayingContext.eventsList8(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext = {};
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Animations") : "") == "Idle");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAIdleCheck(false);
}
}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Animations") : "") == "Jump");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFJumpCheck(false);
}
}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Animations") : "") == "Fall");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIallCheck(false);
}
}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Animations") : "") == "Land");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLandCheck(false);
}
}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.eventsList3(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimation = function(Animations, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "DPlatformerCharacterBehavior": this._getDPlatformerCharacterBehavior()
, "ETweenBehavior": this._getETweenBehavior()
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
if (argName === "Animations") return Animations;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.DisableAnimationContext.eventsList4(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext = {};
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Animations") : "") == "Idle");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAIdleCheck(true);
}
}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Animations") : "") == "Jump");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFJumpCheck(true);
}
}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Animations") : "") == "Fall");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIallCheck(true);
}
}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Animations") : "") == "Land");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLandCheck(true);
}
}}

}


};gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.eventsList3(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimation = function(Animations, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "DPlatformerCharacterBehavior": this._getDPlatformerCharacterBehavior()
, "ETweenBehavior": this._getETweenBehavior()
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
if (argName === "Animations") return Animations;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel.prototype.EnableAnimationContext.eventsList4(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("CharacterGameFeel::CharacterGameFeel", gdjs.evtsExt__CharacterGameFeel__CharacterGameFeel.CharacterGameFeel);
