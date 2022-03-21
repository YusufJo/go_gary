"use strict";
class Manholes {
    constructor() {
        this.drawingArea = {
            start_x: Configuration.instance.visibleSceneWidth * 0.5,
            end_x: Configuration.instance.totalSceneWidth * 0.9,
            start_y: Configuration.instance.characterPathLevel,
        };
        this.totalNumber = (this.drawingArea.end_x - this.drawingArea.start_x) / (ManholeModel.width + ManholeModel.maxSpacing);
        ManholeController.instance.generateManholeModels(this.drawingArea, this.totalNumber);
        ManholeController.instance.generateScaryEyesModels(ManholeController.instance.models, this.drawingArea.start_y);
    }
    static get instance() {
        if (!this._instance)
            this._instance = new Manholes();
        return this._instance;
    }
    static hole() {
        push();
        fill(ManholeModel.colors.holeFill);
        beginShape();
        vertex(0, 0);
        bezierVertex(3, 21, 133, 21, 137, 0);
        bezierVertex(133, -20, 3, -20, 0, 0);
        endShape();
        pop();
    }
    static holeEdge() {
        push();
        fill(ManholeModel.colors.holeEdge);
        beginShape();
        vertex(0, 0);
        bezierVertex(0, 0, 0, 1, 0, 1);
        bezierVertex(0, 10, 30, 18, 68, 18);
        bezierVertex(106, 18, 137, 10, 137, 1);
        bezierVertex(137, 1, 137, 0, 137, 0);
        bezierVertex(134, 8, 104, 15, 68, 15);
        bezierVertex(32, 15, 3, 8, 0, 0);
        endShape();
        pop();
    }
    static coverTopEdge() {
        push();
        fill(ManholeModel.colors.coverLightEdge);
        beginShape();
        vertex(2, 18);
        bezierVertex(-49, 29, 23, 41, 48, 39);
        bezierVertex(65, 39, 80, 38, 92, 36);
        bezierVertex(121, 32, 110, 22, 90, 19);
        bezierVertex(67, 14, 25, 14, 2, 18);
        endShape();
        pop();
    }
    static coverTop() {
        push();
        fill(ManholeModel.colors.coverFill);
        beginShape();
        vertex(-10, 29);
        bezierVertex(5, 36, 26, 37, 48, 38);
        bezierVertex(66, 40, 141, 32, 90, 20);
        bezierVertex(67, 15, 25, 15, 2, 19);
        bezierVertex(-10, 22, -17, 25, -10, 29);
        endShape();
        pop();
    }
    static coverHole() {
        push();
        fill(ManholeModel.colors.holeFill);
        ellipseMode(CORNER);
        ellipse(41, 27, 11, 2);
        pop();
    }
    static coverSideEdge() {
        push();
        fill(ManholeModel.colors.coverDarkEdge);
        beginShape();
        vertex(-15, 26);
        bezierVertex(-9, 10, 107, 12, 110, 29);
        bezierVertex(110, 28, 110, 27, 110, 27);
        bezierVertex(109, 10, -17, 7, -15, 26);
        endShape();
        pop();
    }
    static drawScaryEyes(model) {
        push();
        translate(model.center_x, model.bottom_y);
        strokeWeight(0.5);
        // eye sciera
        fill(ScaryEyesModel.colors.scieraColor);
        ellipse(0, 0, ScaryEyesModel.width, ScaryEyesModel.height);
        // eye iris
        fill(ScaryEyesModel.colors.irisColor);
        ellipse(model.iris_x, model.iris_y, ScaryEyesModel.irisWidth, ScaryEyesModel.irisHeight);
        // eye pupil
        fill(ScaryEyesModel.colors.pupilColor);
        ellipse(model.iris_x, model.iris_y, ScaryEyesModel.pupilWidth, ScaryEyesModel.pupilHeight);
        pop();
    }
    draw() {
        const visibleManholeModels = BufferedRenderer.instance.getVisibleMovableModels(ManholeController.instance.models);
        let start_x;
        for (const model of visibleManholeModels) {
            start_x = model.center_x - ManholeModel.width / 2;
            push();
            translate(start_x, model.bottom_y);
            scale(1, -1);
            Manholes.hole();
            Manholes.holeEdge();
            Manholes.coverTopEdge();
            Manholes.coverTop();
            Manholes.coverHole();
            Manholes.coverSideEdge();
            pop();
        }
        const visibleScaryEyesModels = BufferedRenderer.instance.getVisibleMovableModels(ManholeController.instance.scaryEyesModels);
        for (const model of visibleScaryEyesModels) {
            Manholes.drawScaryEyes(model);
        }
    }
    regenerateModels() {
        ManholeController.instance.clearModels();
        ManholeController.instance.generateManholeModels(this.drawingArea, this.totalNumber);
        ManholeController.instance.generateScaryEyesModels(ManholeController.instance.models, this.drawingArea.start_y);
    }
}
