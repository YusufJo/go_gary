class BufferedRenderer {
    private readonly bufferLength: number;

    private constructor() {
        this.bufferLength = Configuration.instance.visibleSceneWidth * 1.1;
    }

    private static _instance: BufferedRenderer;

    public static get instance(): BufferedRenderer {
        if (!this._instance) this._instance = new BufferedRenderer();
        return this._instance;
    }

    public getVisibleMovableModels<T extends MovableSceneryModel>(models: T[]): T[] {
        const bufferStart = GameCharacterController.instance.model.center_x - this.bufferLength;
        const bufferEnd = GameCharacterController.instance.model.center_x + this.bufferLength;
        return models.filter(function (model) {
            return model.center_x >= bufferStart && model.center_x <= bufferEnd;
        }) as T[];
    }
}