"use strict";
class JellyFishFlowersController extends MovableSceneryModelsController {
    constructor() {
        super();
    }
    static get instance() {
        if (!this._instance)
            this._instance = new JellyFishFlowersController();
        return this._instance;
    }
    get models() {
        return this._models;
    }
    generateModels(drawingArea, totalNumber) {
        let center_x;
        let bottom_y;
        let scale;
        for (let i = 0; i < totalNumber; i++) {
            center_x = random(drawingArea.start_x, drawingArea.end_x);
            bottom_y = random(drawingArea.start_y, drawingArea.end_y);
            scale = map(random() * (bottom_y / drawingArea.end_y), 0, 1, JellyFishFlowerModel.minScale, JellyFishFlowerModel.maxScale, true);
            this.originalModels.push(new JellyFishFlowerModel(center_x, bottom_y, scale));
        }
        super.resetModels();
    }
}
