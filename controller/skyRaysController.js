"use strict";
class SkyRaysController {
    constructor() {
        this._models = [];
    }
    static get instance() {
        if (!this._instance)
            this._instance = new SkyRaysController();
        return this._instance;
    }
    get models() {
        return this._models;
    }
    static generateGradient(drawingArea, topColor, bottomColor) {
        let bottomColorAmount;
        let gradient;
        let lines = [];
        for (let i = drawingArea.start_y; i < drawingArea.end_y; i++) {
            bottomColorAmount = map(i, drawingArea.start_y, drawingArea.end_y, 0, 1);
            gradient = lerpColor(color(topColor), color(bottomColor), bottomColorAmount);
            // @ts-ignore
            lines.push(new SkyRayModel(drawingArea.start_x, drawingArea.end_x, i, i, gradient.toString('#rrggbb')));
        }
        return lines;
    }
    generateModels(drawingArea) {
        const topDrawingArea = {
            start_x: drawingArea.start_x,
            end_x: drawingArea.end_x,
            start_y: drawingArea.start_y,
            end_y: drawingArea.end_y / 2
        };
        const topRays = SkyRaysController.generateGradient(topDrawingArea, SkyRayModel.colors.top, SkyRayModel.colors.middle);
        const bottomDrawingArea = {
            start_x: drawingArea.start_x,
            end_x: drawingArea.end_x,
            start_y: drawingArea.end_y / 2,
            end_y: drawingArea.end_y
        };
        const bottomRays = SkyRaysController.generateGradient(bottomDrawingArea, SkyRayModel.colors.middle, SkyRayModel.colors.bottom);
        this._models = this._models.concat(topRays, bottomRays);
    }
}
