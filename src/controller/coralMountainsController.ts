class CoralMountainsController extends MovableSceneryModelsController<CoralMountainModel> {

    private constructor() {
        super();
    }

    private static _instance: CoralMountainsController;

    public static get instance(): CoralMountainsController {
        if (!this._instance) this._instance = new CoralMountainsController();
        return this._instance;
    }

    public get models(): CoralMountainModel[] {
        return this._models;
    }

    public generateModels(drawingArea: DrawingArea, totalNumber: number): void {
        let center_x: number;
        let bottom_y: number;
        let variant: Variant;
        let scale: number;
        for (let i = 0; i < totalNumber; i++) {
            // center_x = i * ((drawingArea.end_x - drawingArea.start_x) / totalNumber) + random(0, CoralMountainModel.maxSpacing);
            center_x = drawingArea.start_x + i * ((drawingArea.end_x - drawingArea.start_x) / totalNumber);
            bottom_y = random(drawingArea.start_y, drawingArea.end_y);
            variant = random([1, 2]);
            scale = random(CoralMountainModel.minScale, CoralMountainModel.maxScale);
            this.originalModels.push(new CoralMountainModel(center_x, bottom_y, variant, scale));
        }
        super.resetModels();
    }
}