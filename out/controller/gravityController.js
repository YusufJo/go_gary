"use strict";
class GravityController {
    constructor() {
        this.characterVerticalSpeed = 0;
        this.gravityIncrement = 0;
        this._isCharacterFalling = false;
    }
    static get instance() {
        if (!this._instance)
            this._instance = new GravityController();
        return this._instance;
    }
    get isCharacterFalling() {
        return this._isCharacterFalling;
    }
    set isCharacterFalling(value) {
        this._isCharacterFalling = value;
    }
    static canCharacterJump() {
        return GameCharacterController.instance.model.bottom_y >= Configuration.instance.characterPathLevel;
    }
    static checkCharacterShouldFall() {
        const characterCenter_x = GameCharacterController.instance.model.center_x;
        // check if character is above ground level
        if (GameCharacterController.instance.model.bottom_y < Configuration.instance.characterPathLevel)
            return;
        let modelStart_x;
        let modelEnd_x;
        for (const model of ManholeController.instance.models) {
            modelStart_x = model.center_x - ManholeModel.width / 2;
            modelEnd_x = modelStart_x + ManholeModel.width;
            if (characterCenter_x >= modelStart_x && characterCenter_x <= modelEnd_x) {
                this._instance._isCharacterFalling = true;
                return;
            }
        }
        this._instance._isCharacterFalling = false;
    }
    forceGravity(verticalSpeed, jumpPower) {
        this.characterVerticalSpeed -= this.gravityIncrement;
        GravityController.checkCharacterShouldFall();
        if (!this._isCharacterFalling) {
            // neutral state
            GameCharacterController.instance.model.bottom_y -= this.characterVerticalSpeed;
            GameCharacterController.instance.model.bottom_y =
                constrain(GameCharacterController.instance.model.bottom_y, Configuration.instance.characterPathLevel - jumpPower, Configuration.instance.characterPathLevel);
        }
    }
    throwGameCharacter(verticalSpeed) {
        if (!GravityController.canCharacterJump())
            return;
        this.characterVerticalSpeed = verticalSpeed;
        this.gravityIncrement = GravityController.gravityForce;
        SoundController.instance.playJumpSound();
    }
}
GravityController.gravityForce = 0.2;
