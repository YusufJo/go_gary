"use strict";
class ColorfulParticles {
    constructor() {
        this.totalNumber = (Configuration.instance.totalSceneWidth * Configuration.instance.sceneHeight) / 20000;
        this.drawingArea = {
            start_x: 0,
            end_x: Configuration.instance.visibleSceneWidth,
            start_y: Configuration.instance.sceneHeight * .50,
            end_y: Configuration.instance.sceneHeight
        };
        ColorfulParticlesController.instance.generateModels(this.drawingArea, this.totalNumber);
    }
    static get instance() {
        if (!this._instance)
            this._instance = new ColorfulParticles();
        return this._instance;
    }
    draw() {
        const visibleModels = BufferedRenderer.instance.getVisibleMovableModels(ColorfulParticlesController.instance.models);
        for (const model of visibleModels) {
            push();
            translate(model.center_x, model.bottom_y);
            fill(model.color);
            strokeWeight(0.2);
            ellipse(0, -1 * model.height, model.width, model.height);
            pop();
        }
    }
    regenerateModels() {
        ColorfulParticlesController.instance.clearModels();
        ColorfulParticlesController.instance.generateModels(this.drawingArea, this.totalNumber);
    }
}
