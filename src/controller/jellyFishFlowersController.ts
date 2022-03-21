class JellyFishFlowersController extends MovableSceneryModelsController<JellyFishFlowerModel> {
    private constructor() {
        super();
    }

    private static _instance: JellyFishFlowersController;

    public static get instance(): JellyFishFlowersController {
        if (!this._instance) this._instance = new JellyFishFlowersController();
        return this._instance;
    }


    public get models(): RockModel[] {
        return this._models ;
    }

    public generateModels(drawingArea: DrawingArea, totalNumber: number) {
        let center_x: number;
        let bottom_y: number;
        let scale: number;
        for (let i = 0; i < totalNumber; i++) {
            center_x = random(drawingArea.start_x, drawingArea.end_x);
            bottom_y = random(drawingArea.start_y, drawingArea.end_y);
            scale = map(random() * (bottom_y / drawingArea.end_y), 0, 1, JellyFishFlowerModel.minScale, JellyFishFlowerModel.maxScale, true);
            this.originalModels.push(new JellyFishFlowerModel(center_x, bottom_y, scale));
        }

        super.resetModels();
    }

}