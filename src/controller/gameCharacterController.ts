class GameCharacterController {
    private constructor() {
        this._model = <GameCharacterModel>{};
    }

    private static _instance: GameCharacterController;

    public static get instance(): GameCharacterController {
        if (!this._instance) this._instance = new GameCharacterController();
        return this._instance;
    }

    private _model: GameCharacterModel;

    public get model(): GameCharacterModel {
        return this._model;
    }

    public generateModel(center_x: number, bottom_y: number, sprite: Sprite): void {
        this._model = new GameCharacterModel(center_x, bottom_y, sprite, 0);
    }

    public move(direction: Direction, speed: number) {
        if (direction === Direction.Left) this._model.center_x -= speed;
        else this._model.center_x += speed;
    }

    public changeSprite(sprite: Sprite) {
        this._model.sprite = sprite;
    }

    public resetModel() {
        this._model.center_x = Configuration.instance.characterStartingPoint;
        this._model.bottom_y = Configuration.instance.characterPathLevel;
    }
}