"use strict";
class RocksController extends MovableSceneryModelsController {
    constructor() {
        super();
    }
    static get instance() {
        if (!this._instance)
            this._instance = new RocksController();
        return this._instance;
    }
    get models() {
        return this._models;
    }
    generateModels(drawingArea, totalNumber, minScale, maxScale) {
        let center_x;
        let bottom_y;
        let scale;
        for (let i = 0; i < totalNumber; i++) {
            center_x = random(drawingArea.start_x, drawingArea.end_x) + random(0, RockModel.maxSpacing);
            bottom_y = random(drawingArea.start_y, drawingArea.end_y);
            scale = map(random() * (bottom_y / drawingArea.end_y), 0, 1, minScale, maxScale, true);
            this.originalModels.push(new RockModel(center_x, bottom_y, scale));
        }
        super.resetModels();
    }
}
