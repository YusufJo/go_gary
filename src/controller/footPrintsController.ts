class FootPrintsController extends MovableSceneryModelsController<FootPrintModel> {
    private constructor() {
        super();
    }

    private static _instance: FootPrintsController;

    public static get instance(): FootPrintsController {
        if (!this._instance) this._instance = new FootPrintsController();
        return this._instance;
    }

    public get models(): FootPrintModel[] {
        return this._models;
    }

    public generateModels(drawingArea: DrawingArea, totalNumber: number) {
        let center_x: number;
        let bottom_y: number;
        for (let i = 0; i < totalNumber; i++) {
            center_x = drawingArea.start_x + i * ((drawingArea.end_x - drawingArea.start_x) / totalNumber);
            bottom_y = drawingArea.start_y;
            this.originalModels.push(new FootPrintModel(center_x - 20, bottom_y - 18, true));
            this.originalModels.push(new FootPrintModel(center_x + 20, bottom_y + 18, false));
        }
        super.resetModels();
    }
}