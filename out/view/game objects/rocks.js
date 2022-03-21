"use strict";
class Rocks {
    constructor() {
        this.upperBand = {
            drawingArea: {
                start_x: 0,
                start_y: Configuration.instance.sceneHeight * .65,
                end_x: Configuration.instance.totalSceneWidth,
                end_y: Configuration.instance.sceneHeight * .70
            },
            totalNumber: (Configuration.instance.totalSceneWidth * Configuration.instance.sceneHeight) / 200000,
            minScale: 0.3,
            maxScale: 0.8
        };
        this.lowerBand = {
            drawingArea: {
                start_x: 0,
                end_x: Configuration.instance.totalSceneWidth,
                start_y: Configuration.instance.sceneHeight * .90,
                end_y: Configuration.instance.sceneHeight
            },
            totalNumber: (Configuration.instance.totalSceneWidth * Configuration.instance.sceneHeight) / 200000,
            minScale: 0.5,
            maxScale: 1
        };
        RocksController.instance.generateModels(this.upperBand.drawingArea, this.upperBand.totalNumber, this.upperBand.minScale, this.upperBand.maxScale);
        RocksController.instance.generateModels(this.lowerBand.drawingArea, this.lowerBand.totalNumber, this.lowerBand.minScale, this.lowerBand.maxScale);
    }
    static get instance() {
        if (!this._instance)
            this._instance = new Rocks();
        return this._instance;
    }
    static rockFill() {
        push();
        fill(RockModel.colors.fill);
        beginShape();
        vertex(-23, 8);
        bezierVertex(-11, 22, 14, 29, 25, 11);
        bezierVertex(21, 6, 13, 6, 8, 2);
        bezierVertex(0, 9, -14, 2, -23, 8);
        endShape();
        pop();
    }
    static rockOutlines() {
        push();
        stroke(RockModel.colors.outline);
        noFill();
        strokeWeight(4);
        beginShape();
        vertex(-23, 8);
        bezierVertex(-14, 19, -11, 15, -3, 21);
        bezierVertex(2, 25, 12, 22, 18, 19);
        bezierVertex(22, 16, 24, 11, 28, 9);
        endShape();
        beginShape();
        vertex(-39, 7);
        bezierVertex(-31, 10, -19, 9, -13, 5);
        bezierVertex(-5, 7, 2, 6, 9, 1);
        endShape();
        beginShape();
        vertex(8, 3);
        bezierVertex(13, 7, 20, 7, 26, 3);
        endShape();
        beginShape();
        vertex(18, 6);
        bezierVertex(21, 11, 30, 12, 34, 9);
        endShape();
        pop();
    }
    draw() {
        const visibleModels = BufferedRenderer.instance.getVisibleMovableModels(RocksController.instance.models);
        for (const model of visibleModels) {
            push();
            translate(model.center_x, model.bottom_y);
            scale(model.scale, -1 * model.scale);
            Rocks.rockFill();
            Rocks.rockOutlines();
            pop();
        }
    }
    regenerateModels() {
        RocksController.instance.clearModels();
        RocksController.instance.generateModels(this.upperBand.drawingArea, this.upperBand.totalNumber, this.upperBand.minScale, this.upperBand.maxScale);
        RocksController.instance.generateModels(this.lowerBand.drawingArea, this.lowerBand.totalNumber, this.lowerBand.minScale, this.lowerBand.maxScale);
    }
}
