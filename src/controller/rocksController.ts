class RocksController extends MovableSceneryModelsController<RockModel>{

    private constructor() {
        super();
    }

    private static _instance: RocksController;

    public static get instance(): RocksController {
        if (!this._instance) this._instance = new RocksController();
        return this._instance;
    }

    public get models(): RockModel[] {
        return this._models ;
    }

    public generateModels(drawingArea: DrawingArea, totalNumber: number, minScale: number, maxScale: number) {
        let center_x: number;
        let bottom_y: number;
        let scale: number;

        for (let i = 0; i < totalNumber; i++) {
            center_x = random(drawingArea.start_x, drawingArea.end_x) + random(0, RockModel.maxSpacing);
            bottom_y = random(drawingArea.start_y, drawingArea.end_y);
            scale = map(random() * (bottom_y / drawingArea.end_y), 0, 1, minScale, maxScale, true);
            this.originalModels.push(new RockModel(center_x, bottom_y, scale));
        }
        super.resetModels();
    }
}