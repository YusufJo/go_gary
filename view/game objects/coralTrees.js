"use strict";
class CoralTrees {
    constructor() {
        this.totalNumber = Configuration.instance.totalSceneWidth * 0.8 / 100;
        this.drawingArea = {
            start_x: 0,
            start_y: Configuration.instance.sceneHeight * .55,
            end_x: Configuration.instance.totalSceneWidth,
            end_y: Configuration.instance.sceneHeight * .65
        };
        CoralTreesController.instance.generateModels(this.drawingArea, this.totalNumber);
    }
    static get instance() {
        if (!this._instance)
            this._instance = new CoralTrees();
        return this._instance;
    }
    static get flowersCoordinates() {
        return [
            { x: -32, y: 12 },
            { x: -40, y: 20 },
            { x: -33, y: 40 },
            { x: -22, y: 28 },
            { x: -17, y: 42 },
            { x: -10, y: 24 },
            { x: -1, y: 45 },
            { x: 5, y: 69 },
            { x: 18, y: 49 },
            { x: 16, y: 88 },
            { x: 32, y: 100 },
            { x: 29, y: 80 },
            { x: 37, y: 47 },
            { x: 12, y: 22 }
        ];
    }
    static drawTreeBody(colors) {
        push();
        fill(color(colors.fill));
        noStroke();
        beginShape();
        vertex(-17, 3);
        bezierVertex(-16, 16, -41, 3, -47, 17);
        bezierVertex(-47, 17, -47, 18, -47, 18);
        bezierVertex(-44, 38, -17, 0, -19, 23);
        bezierVertex(-20, 24, -20, 25, -21, 25);
        bezierVertex(-47, 29, -36, 56, -26, 44);
        bezierVertex(-26, 44, -26, 43, -26, 43);
        bezierVertex(-25, 40, -26, 37, -26, 35);
        bezierVertex(-26, 32, -22, 32, -22, 35);
        bezierVertex(-21, 41, -25, 52, -16, 46);
        bezierVertex(-15, 46, -15, 45, -15, 44);
        bezierVertex(-13, 37, -25, 21, -7, 31);
        bezierVertex(-7, 31, -7, 31, -7, 31);
        bezierVertex(-1, 36, -7, 43, -5, 49);
        bezierVertex(-6, 49, -5, 49, -5, 49);
        bezierVertex(1, 61, 7, 49, 6, 39);
        bezierVertex(6, 39, 8, 36, 9, 37);
        bezierVertex(13, 41, 14, 48, 10, 52);
        bezierVertex(-8, 68, 7, 82, 12, 65);
        bezierVertex(14, 48, 23, 65, 20, 73);
        bezierVertex(18, 79, 4, 93, 17, 93);
        bezierVertex(21, 93, 21, 91, 21, 88);
        bezierVertex(21, 85, 25, 85, 25, 88);
        bezierVertex(25, 92, 24, 96, 25, 100);
        bezierVertex(26, 100, 26, 101, 26, 101);
        bezierVertex(44, 110, 37, 80, 30, 72);
        bezierVertex(30, 72, 29, 72, 29, 72);
        bezierVertex(26, 64, 24, 54, 22, 46);
        bezierVertex(19, 36, 32, 51, 36, 50);
        bezierVertex(47, 51, 52, 30, 39, 33);
        bezierVertex(39, 34, 38, 33, 38, 34);
        bezierVertex(22, 46, -22, 10, 14, 27);
        bezierVertex(22, 28, 24, 20, 18, 16);
        bezierVertex(11, 13, -3, 21, -5, 13);
        bezierVertex(1, 0, -2, 4, -15, 1);
        bezierVertex(-16, 1, -17, 2, -17, 3);
        endShape();
        pop();
    }
    static drawShinyReflections(colors) {
        push();
        fill(color(colors.shine));
        noStroke();
        beginShape();
        vertex(-14, 4);
        bezierVertex(-12, 10, -18, 19, -16, 24);
        bezierVertex(-7, 28, -14, 4, -9, 4);
        bezierVertex(-6, 2, -14, 3, -14, 4);
        endShape();
        beginShape();
        vertex(-30, 13);
        bezierVertex(-33, 12, -40, 15, -43, 17);
        bezierVertex(-45, 20, -42, 23, -40, 21);
        endShape(CLOSE);
        beginShape();
        vertex(-30, 32);
        bezierVertex(-41, 39, -29, 50, -30, 40);
        bezierVertex(-30, 38, -30, 34, -30, 32);
        endShape();
        beginShape();
        vertex(-20, 35);
        bezierVertex(-22, 52, -13, 45, -19, 36);
        endShape(CLOSE);
        beginShape();
        vertex(-2, 26);
        bezierVertex(2, 33, -8, 45, -1, 51);
        bezierVertex(5, 53, 0, 30, -2, 26);
        endShape();
        beginShape();
        vertex(12, 37);
        bezierVertex(17, 44, 12, 59, 3, 65);
        bezierVertex(7, 87, 14, 36, 17, 55);
        bezierVertex(23, 59, 16, 36, 12, 37);
        endShape();
        beginShape();
        vertex(22, 68);
        bezierVertex(25, 81, 17, 78, 14, 87);
        bezierVertex(15, 94, 17, 92, 18, 88);
        bezierVertex(19, 82, 26, 71, 22, 68);
        endShape();
        beginShape();
        vertex(25, 78);
        bezierVertex(26, 90, 25, 80, 28, 97);
        bezierVertex(29, 106, 43, 99, 24, 78);
        endShape();
        beginShape();
        vertex(25, 41);
        bezierVertex(42, 55, 51, 34, 38, 39);
        bezierVertex(35, 42, 17, 38, 26, 41);
        endShape();
        beginShape();
        vertex(9, 18);
        bezierVertex(9, 18, 14, 19, 15, 21);
        bezierVertex(22, 27, 21, 13, 9, 18);
        endShape();
        pop();
    }
    static drawTreeFlowers(colors) {
        for (const flower of CoralTrees.flowersCoordinates) {
            push();
            translate(flower.x, flower.y);
            noFill();
            stroke(color(colors.flower));
            strokeWeight(1.3);
            beginShape();
            vertex(-3.5, 2.5);
            bezierVertex(-2, 2, 1.5, 3.5, 3, 3.5);
            endShape();
            beginShape();
            vertex(-2.5, 4.5);
            bezierVertex(-2.5, 2.5, 2.5, 2, 1.5, 1.5);
            endShape();
            beginShape();
            vertex(-2, 0);
            bezierVertex(-1.5, 2, 1, 3.5, 1.5, 5);
            endShape();
            beginShape();
            vertex(-0.5, 5);
            bezierVertex(-1.4, 4.5, 0.5, 1.5, 0, 0);
            endShape();
            pop();
        }
    }
    draw() {
        const visibleModels = BufferedRenderer.instance.getVisibleMovableModels(CoralTreesController.instance.models);
        for (const model of visibleModels) {
            push();
            translate(model.center_x, model.bottom_y);
            // apply tree scale
            scale(model.scale);
            // revert the axes
            scale(model.isReflected ? -1 : 1, -1);
            CoralTrees.drawTreeBody(model.colors);
            CoralTrees.drawShinyReflections(model.colors);
            CoralTrees.drawTreeFlowers(model.colors);
            pop();
        }
    }
    regenerateModels() {
        CoralTreesController.instance.clearModels();
        CoralTreesController.instance.generateModels(this.drawingArea, this.totalNumber);
    }
}
