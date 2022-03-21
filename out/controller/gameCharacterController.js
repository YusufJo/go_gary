"use strict";
class GameCharacterController {
    constructor() {
        this._model = {};
    }
    static get instance() {
        if (!this._instance)
            this._instance = new GameCharacterController();
        return this._instance;
    }
    get model() {
        return this._model;
    }
    generateModel(center_x, bottom_y, sprite) {
        this._model = new GameCharacterModel(center_x, bottom_y, sprite, 0);
    }
    move(direction, speed) {
        if (direction === Direction.Left)
            this._model.center_x -= speed;
        else
            this._model.center_x += speed;
    }
    changeSprite(sprite) {
        this._model.sprite = sprite;
    }
    resetModel() {
        this._model.center_x = Configuration.instance.characterStartingPoint;
        this._model.bottom_y = Configuration.instance.characterPathLevel;
    }
}
