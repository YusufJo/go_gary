class ColorfulParticlesController extends MovableSceneryModelsController<ColorfulParticleModel> {

    private constructor() {
        super();
    }

    private static _instance: ColorfulParticlesController;

    public static get instance(): ColorfulParticlesController {
        if (!this._instance) this._instance = new ColorfulParticlesController();
        return this._instance;
    }

    public get models(): ColorfulParticleModel[] {
        return this._models;
    }

    public generateModels(drawingArea: DrawingArea, totalNumber: number): void {
        let center_x: number;
        let bottom_y: number;
        let width: number;
        let height: number;
        let color: string;
        for (let i = 0; i < totalNumber; i++) {
            center_x = random(drawingArea.start_x, drawingArea.end_x);
            bottom_y = random(drawingArea.start_y, drawingArea.end_y);
            // create a visual effect by scaling the size of the particle
            // based on its relative location to the bottom of the screen
            // so that the bottom ones are the biggest, and the further the smaller.
            width = map(random() * (bottom_y / drawingArea.end_y), 0, 1, ColorfulParticleModel.minWidth, ColorfulParticleModel.maxWidth);
            height = map(random() * (bottom_y / drawingArea.end_y), 0, 1, ColorfulParticleModel.minHeight, ColorfulParticleModel.maxHeight);
            color = random(ColorfulParticleModel.colors);

            this.originalModels.push(new ColorfulParticleModel(center_x, bottom_y, width, height, color));
        }
        super.resetModels();
    }
}