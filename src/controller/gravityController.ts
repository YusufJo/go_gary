class GravityController {
    private static readonly gravityForce = 0.2;
    private characterVerticalSpeed: number;
    private gravityIncrement: number;

    private constructor() {
        this.characterVerticalSpeed = 0;
        this.gravityIncrement = 0;
        this._isCharacterFalling = false;
    }

    private static _instance: GravityController;

    public static get instance(): GravityController {
        if (!this._instance) this._instance = new GravityController();
        return this._instance;
    }

    private _isCharacterFalling: boolean;

    public get isCharacterFalling(): boolean {
        return this._isCharacterFalling;
    }

    public set isCharacterFalling(value: boolean) {
        this._isCharacterFalling = value;
    }

    private static canCharacterJump(): boolean {
        return GameCharacterController.instance.model.bottom_y >= Configuration.instance.characterPathLevel;
    }

    private static checkCharacterShouldFall(): void {
        const characterCenter_x = GameCharacterController.instance.model.center_x;
        // check if character is above ground level
        if (GameCharacterController.instance.model.bottom_y < Configuration.instance.characterPathLevel) return;

        let modelStart_x: number;
        let modelEnd_x: number;
        for (const model of ManholeController.instance.models) {
            modelStart_x = model.center_x - ManholeModel.width / 2;
            modelEnd_x = modelStart_x + ManholeModel.width;
            if (characterCenter_x >= modelStart_x && characterCenter_x <= modelEnd_x) {
                this._instance._isCharacterFalling = true;
                return;
            }
        }
        this._instance._isCharacterFalling = false;
    }

    public forceGravity(verticalSpeed: number, jumpPower: number) {
        this.characterVerticalSpeed -= this.gravityIncrement;
        GravityController.checkCharacterShouldFall();
        if (!this._isCharacterFalling) {
            // neutral state
            GameCharacterController.instance.model.bottom_y -= this.characterVerticalSpeed;
            GameCharacterController.instance.model.bottom_y =
                constrain(GameCharacterController.instance.model.bottom_y, Configuration.instance.characterPathLevel - jumpPower, Configuration.instance.characterPathLevel);
        }
    }

    public throwGameCharacter(verticalSpeed: number): void {
        if (!GravityController.canCharacterJump()) return;
        this.characterVerticalSpeed = verticalSpeed;
        this.gravityIncrement = GravityController.gravityForce;
        SoundController.instance.playJumpSound();
    }

}