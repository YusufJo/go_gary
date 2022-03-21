class ColorfulParticles {
    private readonly totalNumber = (Configuration.instance.totalSceneWidth * Configuration.instance.sceneHeight) / 20000;
    private readonly drawingArea = <DrawingArea>{
        start_x: 0,
        end_x: Configuration.instance.visibleSceneWidth,
        start_y: Configuration.instance.sceneHeight * .50,
        end_y: Configuration.instance.sceneHeight
    };

    private constructor() {
        ColorfulParticlesController.instance.generateModels(this.drawingArea, this.totalNumber);
    }

    private static _instance: ColorfulParticles;

    public static get instance(): ColorfulParticles {
        if (!this._instance) this._instance = new ColorfulParticles();
        return this._instance;
    }

    public draw(): void {
        const visibleModels =
            BufferedRenderer.instance.getVisibleMovableModels<ColorfulParticleModel>(ColorfulParticlesController.instance.models);
        for (const model of visibleModels) {
            push();
            translate(model.center_x, model.bottom_y);
            fill(model.color);
            strokeWeight(0.2);
            ellipse(0, -1 * model.height, model.width, model.height);
            pop();
        }
    }

    public regenerateModels() {
        ColorfulParticlesController.instance.clearModels();
        ColorfulParticlesController.instance.generateModels(this.drawingArea, this.totalNumber);
    }
}