"use strict";
class CoralMountainsController extends MovableSceneryModelsController {
    constructor() {
        super();
    }
    static get instance() {
        if (!this._instance)
            this._instance = new CoralMountainsController();
        return this._instance;
    }
    get models() {
        return this._models;
    }
    generateModels(drawingArea, totalNumber) {
        let center_x;
        let bottom_y;
        let variant;
        let scale;
        for (let i = 0; i < totalNumber; i++) {
            // center_x = i * ((drawingArea.end_x - drawingArea.start_x) / totalNumber) + random(0, CoralMountainModel.maxSpacing);
            center_x = drawingArea.start_x + i * ((drawingArea.end_x - drawingArea.start_x) / totalNumber);
            bottom_y = random(drawingArea.start_y, drawingArea.end_y);
            variant = random([1, 2]);
            scale = random(CoralMountainModel.minScale, CoralMountainModel.maxScale);
            this.originalModels.push(new CoralMountainModel(center_x, bottom_y, variant, scale));
        }
        super.resetModels();
    }
}
