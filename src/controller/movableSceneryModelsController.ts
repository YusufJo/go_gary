abstract class MovableSceneryModelsController<T extends MovableSceneryModel> {
    protected originalModels: T[];
    protected _models: T[];

    protected constructor() {
        this.originalModels = [];
        this._models = [];
    }

    public move(direction: Direction, speed: number) {
        let speedFactor = 0;
        if (direction === Direction.Right) this._models.forEach(model => {
            speedFactor = model.bottom_y / Configuration.instance.sceneHeight;
            model.center_x += speed * speedFactor;
        });
        else this._models.forEach(model => {
            speedFactor = model.bottom_y / Configuration.instance.sceneHeight;
            model.center_x -= speed * speedFactor;
        });
    }

    public resetModels() {
        this._models = this.deepCopy(this.originalModels);
    }

    public clearModels() {
        this._models = [];
        this.originalModels = [];
    }
    public deepCopy(array: T[]): T[] {
        return JSON.parse(JSON.stringify(array)) as T[];
    }
}