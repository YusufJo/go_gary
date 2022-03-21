class CoralTreesController extends MovableSceneryModelsController<CoralTreeModel> {

    private constructor() {
        super();
    }

    private static _instance: CoralTreesController;

    public static get instance(): CoralTreesController {
        if (!this._instance) this._instance = new CoralTreesController();
        return this._instance;
    }

    public get models(): CoralTreeModel[] {
        return this._models;
    }

    public generateModels(drawingArea: DrawingArea, totalNumber: number): void {
        let center_x: number;
        let bottom_y: number;
        let isReflected: boolean;
        let colorsVariant: CoralTreeColors;
        let scale: number;
        for (let i = 0; i < totalNumber; i++) {
            center_x = drawingArea.start_x
                + i * ((drawingArea.end_x - drawingArea.start_x) / totalNumber);
            bottom_y = random(drawingArea.start_y, drawingArea.end_y);
            isReflected = random([true, false]);
            colorsVariant = random([CoralTreeModel.colorsVariant1, CoralTreeModel.colorsVariant2]);
            scale = random(CoralTreeModel.minScale, CoralTreeModel.maxScale);
            this.originalModels.push(new CoralTreeModel(center_x, bottom_y, isReflected, colorsVariant, scale));
        }
        super.resetModels();
    }
}