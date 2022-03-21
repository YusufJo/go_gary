"use strict";
class CoralTreesController extends MovableSceneryModelsController {
    constructor() {
        super();
    }
    static get instance() {
        if (!this._instance)
            this._instance = new CoralTreesController();
        return this._instance;
    }
    get models() {
        return this._models;
    }
    generateModels(drawingArea, totalNumber) {
        let center_x;
        let bottom_y;
        let isReflected;
        let colorsVariant;
        let scale;
        for (let i = 0; i < totalNumber; i++) {
            center_x = drawingArea.start_x
                + i * ((drawingArea.end_x - drawingArea.start_x) / totalNumber);
            bottom_y = random(drawingArea.start_y, drawingArea.end_y);
            isReflected = random([true, false]);
            colorsVariant = random([CoralTreeModel.colorsVariant1, CoralTreeModel.colorsVariant2]);
            scale = random(CoralTreeModel.minScale, CoralTreeModel.maxScale);
            this.originalModels.push(new CoralTreeModel(center_x, bottom_y, isReflected, colorsVariant, scale));
        }
        super.resetModels();
    }
}
