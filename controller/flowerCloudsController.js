"use strict";
class FlowerCloudsController extends MovableSceneryModelsController {
    constructor() {
        super();
    }
    static get instance() {
        if (!this._instance)
            this._instance = new FlowerCloudsController();
        return this._instance;
    }
    get models() {
        return this._models;
    }
    generateModels(drawingArea, totalNumber) {
        let center_x;
        let bottom_y;
        let color;
        let scale;
        let opacity;
        for (let i = 0; i < totalNumber; i++) {
            center_x = drawingArea.start_x + i * (drawingArea.end_x / totalNumber) + random(0, FlowerCloudModel.maxSpacing);
            bottom_y = drawingArea.start_y + random(drawingArea.start_y, drawingArea.end_y);
            opacity = random(FlowerCloudModel.minOpacity, FlowerCloudModel.maxOpacity);
            color = random(FlowerCloudModel.colors);
            scale = random(FlowerCloudModel.minScale, FlowerCloudModel.maxScale);
            this.originalModels.push(new FlowerCloudModel(center_x, bottom_y, scale, color, opacity));
        }
        super.resetModels();
    }
}
