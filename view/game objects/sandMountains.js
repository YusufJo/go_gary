"use strict";
class SandMountains {
    constructor() {
        this.drawingArea = {
            start_x: 0,
            end_x: Configuration.instance.totalSceneWidth,
            start_y: Configuration.instance.sceneHeight * .51,
            end_y: Configuration.instance.sceneHeight * .55
        };
        this.landCoverage = 0.6;
        this.totalNumber = (this.drawingArea.end_x - this.drawingArea.start_x) * this.landCoverage / SandMountainModel.defaultWidth;
        SandMountainsController.instance.generateModels(this.drawingArea, this.totalNumber);
    }
    static get instance() {
        if (!this._instance)
            this._instance = new SandMountains();
        return this._instance;
    }
    static drawBaseBody() {
        push();
        fill(SandMountainModel.colors.primary);
        stroke(SandMountainModel.colors.outline);
        strokeWeight(1);
        this.mountainBodyLayer();
        pop();
    }
    static mountainBodyLayer() {
        push();
        beginShape();
        vertex(-132.4, -1);
        bezierVertex(-125.9, -16.7, -113, -37.2, -100.7, -58.3);
        bezierVertex(-88.5, -79.3, -77, -100.9, -73.4, -118.3);
        bezierVertex(-72.4, -125.7, -71.6, -138, -69.9, -150);
        bezierVertex(-68.2, -162, -55.4, -198.2, -50.6, -207.7);
        bezierVertex(-45.9, -217.2, -39.7, -225.5, -32.4, -227.3);
        bezierVertex(-16.2, -231.1, -3.1, -207.6, 7.4, -179.5);
        bezierVertex(17.1, -153.7, 33.1, -102, 34.2, -98.8);
        bezierVertex(42.2, -75.1, 55.3, -56.4, 71.6, -41.1);
        bezierVertex(89.1, -24.6, 110.2, -12.0, 132.4, -1.3);
        bezierVertex(66.2, -1.3, 0, -1.3, 0, -1.3);
        bezierVertex(-66.2, -1.3, -132.4, -1, -132.4, -1);
        endShape();
        pop();
    }
    static drawBodyShader() {
        push();
        fill(SandMountainModel.colors.shader);
        noStroke();
        SandMountains.mountainBodyLayer();
        pop();
    }
    draw() {
        const visibleModels = BufferedRenderer.instance.getVisibleMovableModels(SandMountainsController.instance.models);
        for (const model of visibleModels) {
            push();
            translate(model.center_x, model.bottom_y);
            scale(model.scale);
            SandMountains.drawBaseBody();
            SandMountains.drawBodyShader();
            pop();
            for (const particle of model.sandParticles) {
                push();
                translate(particle.center_x, particle.bottom_y);
                fill(particle.color);
                strokeWeight(0.2);
                ellipse(0, -1 * particle.height, particle.width, particle.height);
                pop();
            }
        }
    }
    regenerateModels() {
        SandMountainsController.instance.clearModels();
        SandMountainsController.instance.generateModels(this.drawingArea, this.totalNumber);
    }
}
