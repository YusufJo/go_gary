"use strict";
class Ground {
    constructor() {
        this.sandDrawingArea = {
            start_x: 0,
            end_x: Configuration.instance.visibleSceneWidth,
            start_y: Configuration.instance.sceneHeight * .50,
            end_y: Configuration.instance.sceneHeight
        };
        this.roadDrawingArea = {
            start_x: 0,
            end_x: Configuration.instance.visibleSceneWidth,
            start_y: Configuration.instance.sceneHeight * .70,
            end_y: Configuration.instance.sceneHeight * .90
        };
        this.footprintsDrawingArea = {
            start_x: Configuration.instance.totalSceneWidth * 0.85,
            end_x: Configuration.instance.totalSceneWidth * 0.9,
            start_y: Configuration.instance.characterPathLevel - 10,
            end_y: Configuration.instance.characterPathLevel + 10
        };
        FootPrintsController.instance.generateModels(this.footprintsDrawingArea, 3);
    }
    static get instance() {
        if (!this._instance)
            this._instance = new Ground();
        return this._instance;
    }
    static drawFootPrint(center_x, bottom_y, isLeftFoot) {
        push();
        translate(center_x, bottom_y);
        if (isLeftFoot)
            scale(1, -1);
        fill(FootPrintModel.color);
        beginShape();
        vertex(-5.8, -1.4);
        bezierVertex(-5.8, -1.4, -6.9, -1.4, -8.6, -1.6);
        bezierVertex(-11.3, -1.9, -13.1, -3.4, -12.7, -5.7);
        bezierVertex(-12.3, -8.4, -10.4, -9.0, -7.6, -8.7);
        bezierVertex(-6, -8.5, -4.9, -8.2, -4.9, -8.2);
        vertex(-5.8, -1.4);
        endShape();
        beginShape();
        vertex(-1.4, -0.6);
        bezierVertex(-1.8, -0.6, -2.1, -0.9, -2.0, -1.4);
        bezierVertex(-1.6, -3.1, -1.5, -5.7, -1.9, -7.3);
        bezierVertex(-2.0, -7.9, -1.7, -8.1, -1.1, -8.4);
        bezierVertex(0.6, -8.9, 2.6, -9.8, 5.3, -9.6);
        bezierVertex(11.2, -9.2, 12.9, -6.7, 12.8, -4.9);
        bezierVertex(12.7, -3.0, 9.7, 1.6, -1.4, -0.6);
        endShape();
        pop();
    }
    draw() {
        this.drawSand();
        this.drawRoadFill();
        this.drawRoadLines();
        const visibleFootprints = BufferedRenderer.instance.getVisibleMovableModels(FootPrintsController.instance.models);
        for (const model of visibleFootprints) {
            Ground.drawFootPrint(model.center_x, model.bottom_y, model.isLeftFoot);
        }
    }
    drawRoadFill() {
        push();
        fill(RoadModel.colors.fill);
        noStroke();
        rect(this.roadDrawingArea.start_x, this.roadDrawingArea.start_y, this.roadDrawingArea.end_x, this.roadDrawingArea.end_y - this.roadDrawingArea.start_y);
        pop();
    }
    drawRoadLines() {
        push();
        stroke(RoadModel.colors.outline);
        strokeWeight(10);
        line(this.roadDrawingArea.start_x, this.roadDrawingArea.start_y, this.roadDrawingArea.end_x, this.roadDrawingArea.start_y);
        line(this.roadDrawingArea.start_x, this.roadDrawingArea.end_y, this.roadDrawingArea.end_x, this.roadDrawingArea.end_y);
        pop();
    }
    drawSand() {
        push();
        noStroke();
        fill(SandModel.color);
        rect(this.sandDrawingArea.start_x, this.sandDrawingArea.start_y, this.sandDrawingArea.end_x, this.sandDrawingArea.end_y - this.sandDrawingArea.start_y);
        pop();
    }
}
