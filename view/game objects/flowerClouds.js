"use strict";
class FlowerClouds {
    constructor() {
        this.totalNumber = (Configuration.instance.totalSceneWidth * Configuration.instance.sceneHeight) / 200000;
        this.drawingArea = {
            start_x: 0,
            end_x: Configuration.instance.totalSceneWidth,
            start_y: 0,
            end_y: Configuration.instance.sceneHeight * .50
        };
        FlowerCloudsController.instance.generateModels(this.drawingArea, this.totalNumber);
    }
    static get instance() {
        if (!this._instance)
            this._instance = new FlowerClouds();
        return this._instance;
    }
    static applyOpacityToColor(mColor, opacity) {
        const strokeColor = color(mColor);
        strokeColor.setAlpha(opacity);
        return strokeColor.toString("#rrggbbaa");
    }
    draw() {
        const visibleModels = BufferedRenderer.instance.getVisibleMovableModels(FlowerCloudsController.instance.models);
        for (const model of visibleModels) {
            push();
            translate(model.center_x, model.bottom_y);
            scale(model.scale, model.scale);
            stroke(color(FlowerClouds.applyOpacityToColor(model.color, model.opacity)));
            strokeWeight(6);
            noFill();
            // flower outline
            beginShape();
            vertex(-78, -100);
            bezierVertex(-73, -118, -49, -120, -36, -111);
            bezierVertex(-31, -106, -28, -99, -22, -95);
            bezierVertex(-9, -87, -6, -109, -14, -116);
            bezierVertex(-45, -146, 21, -176, 19, -133);
            bezierVertex(16, -120, -18, -83, 18, -91);
            bezierVertex(31, -100, 44, -113, 61, -114);
            bezierVertex(93, -116, 95, -67, 29, -73);
            bezierVertex(4, -60, 31, -45, 36, -36);
            bezierVertex(79, 0, -2, 17, 3, -24);
            bezierVertex(7, -36, 11, -76, -10, -59);
            bezierVertex(-17, -42, -9, -18, -28, -7);
            bezierVertex(-45, 2, -69, -20, -58, -37);
            bezierVertex(-49, -53, -27, -52, -19, -68);
            bezierVertex(-9, -92, -47, -72, -58, -74);
            bezierVertex(-71, -75, -85, -87, -78, -100);
            endShape();
            // center circle
            beginShape();
            vertex(-10, -75);
            bezierVertex(-11, -80, -6, -85, -2, -83);
            bezierVertex(9, -79, -6, -62, -10, -75);
            endShape();
            pop();
        }
    }
    regenerateModels() {
        FlowerCloudsController.instance.clearModels();
        FlowerCloudsController.instance.generateModels(this.drawingArea, this.totalNumber);
    }
}
