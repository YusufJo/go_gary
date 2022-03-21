"use strict";
class FootPrintsController extends MovableSceneryModelsController {
    constructor() {
        super();
    }
    static get instance() {
        if (!this._instance)
            this._instance = new FootPrintsController();
        return this._instance;
    }
    get models() {
        return this._models;
    }
    generateModels(drawingArea, totalNumber) {
        let center_x;
        let bottom_y;
        for (let i = 0; i < totalNumber; i++) {
            center_x = drawingArea.start_x + i * ((drawingArea.end_x - drawingArea.start_x) / totalNumber);
            bottom_y = drawingArea.start_y;
            this.originalModels.push(new FootPrintModel(center_x - 20, bottom_y - 18, true));
            this.originalModels.push(new FootPrintModel(center_x + 20, bottom_y + 18, false));
        }
        super.resetModels();
    }
}
