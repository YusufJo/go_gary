class FlowerCloudsController extends MovableSceneryModelsController<FlowerCloudModel> {

    private constructor() {
        super();
    }

    private static _instance: FlowerCloudsController;

    public static get instance(): FlowerCloudsController {
        if (!this._instance) this._instance = new FlowerCloudsController();
        return this._instance;
    }

    public get models(): FlowerCloudModel[] {
        return this._models;
    }

    public generateModels(drawingArea: DrawingArea, totalNumber: number): void {
        let center_x: number;
        let bottom_y: number;
        let color: string;
        let scale: number;
        let opacity: number;
        for (let i = 0; i < totalNumber; i++) {
            center_x = drawingArea.start_x + i * (drawingArea.end_x / totalNumber) + random(0, FlowerCloudModel.maxSpacing);
            bottom_y = drawingArea.start_y + random(drawingArea.start_y, drawingArea.end_y);
            opacity = random(FlowerCloudModel.minOpacity, FlowerCloudModel.maxOpacity);
            color = random(FlowerCloudModel.colors);
            scale = random(FlowerCloudModel.minScale, FlowerCloudModel.maxScale);
            this.originalModels.push(new FlowerCloudModel(center_x, bottom_y, scale, color, opacity));
        }
        super.resetModels();
    }


}