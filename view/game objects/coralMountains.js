"use strict";
class CoralMountains {
    constructor() {
        this.landCoverage = 0.5;
        this.totalNumber = (Configuration.instance.totalSceneWidth - Configuration.instance.visibleDrawingArea.start_x) * this.landCoverage / CoralMountainModel.defaultWidth;
        this.drawingArea = {
            start_x: 0,
            start_y: Configuration.instance.sceneHeight * .53,
            end_x: Configuration.instance.totalSceneWidth,
            end_y: Configuration.instance.sceneHeight * .56
        };
        CoralMountainsController.instance.generateModels(this.drawingArea, this.totalNumber);
    }
    static get instance() {
        if (!this._instance)
            this._instance = new CoralMountains();
        return this._instance;
    }
    static drawVariant1Layer(color, translate_x = 0) {
        push();
        translate(translate_x, 0);
        fill(color);
        beginShape();
        vertex(-149, 20);
        bezierVertex(-111, 21, -144, 39, -134, 60);
        bezierVertex(-122, 95, -92, 74, -103, 40);
        bezierVertex(-103, 33, -99, 29, -93, 29);
        bezierVertex(-79, 28, -80, 4, -65, 19);
        bezierVertex(-56, 29, -43, 39, -28, 32);
        bezierVertex(-18, 22, -12, 31, -3, 35);
        bezierVertex(21, 41, 0, 73, 3, 92);
        bezierVertex(7, 114, 38, 127, 51, 106);
        bezierVertex(65, 85, 39, 55, 53, 37);
        bezierVertex(56, 32, 63, 31, 68, 34);
        bezierVertex(122, 71, 95, 27, 135, 30);
        bezierVertex(310, -14, -278, -2, -149, 20);
        beginContour();
        vertex(-114, 67);
        bezierVertex(-120, 69, -126, 64, -124, 57);
        bezierVertex(-119, 41, -100, 62, -114, 67);
        endContour();
        beginContour();
        vertex(36, 101);
        bezierVertex(25, 105, 14, 94, 17, 82);
        bezierVertex(27, 53, 61, 91, 36, 101);
        endContour();
        endShape();
        pop();
    }
    static drawVariant2Layer(color, translate_x = 0) {
        push();
        translate(translate_x, 0);
        fill(color);
        beginShape();
        vertex(-263, 21);
        bezierVertex(-223, 2, -241, 73, -210, 57);
        bezierVertex(-201, 45, -207, 10, -186, 28);
        bezierVertex(-175, 34, -170, 13, -159, 16);
        bezierVertex(-151, 18, -150, 25, -142, 17);
        bezierVertex(-138, 12, -134, 18, -129, 19);
        bezierVertex(-123, 19, -115, 15, -113, 23);
        bezierVertex(-112, 52, -108, 100, -66, 61);
        bezierVertex(-59, 50, -56, 30, -40, 32);
        bezierVertex(7, 40, -53, 101, -19, 123);
        bezierVertex(7, 153, 63, 147, 50, 99);
        bezierVertex(51, 89, 18, 25, 44, 30);
        bezierVertex(227, -12, 155, 66, 210, 74);
        bezierVertex(257, 54, 169, 19, 261, 17);
        bezierVertex(367, -6, -360, 7, -263, 21);
        beginContour();
        vertex(-217, 37);
        bezierVertex(-207, 36, -207, 52, -217, 52);
        bezierVertex(-228, 52, -228, 36, -217, 37);
        endContour();
        beginContour();
        vertex(-83, 38);
        bezierVertex(-70, 42, -78, 66, -91, 60);
        bezierVertex(-106, 55, -97, 32, -83, 38);
        endContour();
        beginContour();
        vertex(10, 82);
        bezierVertex(41, 79, 48, 124, 15, 126);
        bezierVertex(-15, 130, -19, 86, 10, 82);
        endContour();
        beginContour();
        vertex(210, 41);
        bezierVertex(224, 45, 216, 70, 202, 64);
        bezierVertex(186, 59, 196, 35, 210, 41);
        endContour();
        endShape();
        pop();
    }
    draw() {
        const visibleModels = BufferedRenderer.instance.getVisibleMovableModels(CoralMountainsController.instance.models);
        for (const model of visibleModels) {
            push();
            translate(model.center_x, model.bottom_y);
            scale(model.scale, -1 * model.scale);
            noStroke();
            if (model.variant === 1) {
                CoralMountains.drawVariant1Layer(CoralMountainModel.colors.background, -3);
                CoralMountains.drawVariant1Layer(CoralMountainModel.colors.foreground);
            }
            else {
                CoralMountains.drawVariant2Layer(CoralMountainModel.colors.background, 3);
                CoralMountains.drawVariant2Layer(CoralMountainModel.colors.foreground);
            }
            pop();
        }
    }
    regenerateModels() {
        CoralMountainsController.instance.clearModels();
        CoralMountainsController.instance.generateModels(this.drawingArea, this.totalNumber);
    }
}
