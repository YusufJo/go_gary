"use strict";
class BufferedRenderer {
    constructor() {
        this.bufferLength = Configuration.instance.visibleSceneWidth * 1.1;
    }
    static get instance() {
        if (!this._instance)
            this._instance = new BufferedRenderer();
        return this._instance;
    }
    getVisibleMovableModels(models) {
        const bufferStart = GameCharacterController.instance.model.center_x - this.bufferLength;
        const bufferEnd = GameCharacterController.instance.model.center_x + this.bufferLength;
        return models.filter(function (model) {
            return model.center_x >= bufferStart && model.center_x <= bufferEnd;
        });
    }
}
