"use strict";
class MovableSceneryModelsController {
    constructor() {
        this.originalModels = [];
        this._models = [];
    }
    move(direction, speed) {
        let speedFactor = 0;
        if (direction === Direction.Right)
            this._models.forEach(model => {
                speedFactor = model.bottom_y / Configuration.instance.sceneHeight;
                model.center_x += speed * speedFactor;
            });
        else
            this._models.forEach(model => {
                speedFactor = model.bottom_y / Configuration.instance.sceneHeight;
                model.center_x -= speed * speedFactor;
            });
    }
    resetModels() {
        this._models = this.deepCopy(this.originalModels);
    }
    clearModels() {
        this._models = [];
        this.originalModels = [];
    }
    deepCopy(array) {
        return JSON.parse(JSON.stringify(array));
    }
}
