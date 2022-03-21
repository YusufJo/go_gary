class Animator {
    private static readonly jumpPower = 800;
    private static readonly verticalSpeed = 8;
    private static readonly horizontalSpeed = 5;
    private _isGameOver: boolean;

    private constructor() {
        this._currentNumberOfLives = Configuration.numberOfLives;
        this._currentCollectedItems = 0;
        this._isGameOver = false;
    }

    private static _instance: Animator;

    public static get instance(): Animator {
        if (!this._instance) this._instance = new Animator();
        return this._instance;
    }

    private static get characterReachedEnd(): boolean {
        return GameCharacterController.instance.model.center_x >= Configuration.instance.characterEndingPoint;
    }

    private _currentNumberOfLives: number;

    get currentNumberOfLives(): number {
        return this._currentNumberOfLives;
    }

    private _currentCollectedItems: number;

    get currentCollectedItems(): number {
        return this._currentCollectedItems;
    }

    private static rightArrowAnimations() {
        const characterCenter_x = GameCharacterController.instance.model.center_x;

        GameCharacterController.instance.changeSprite(Sprite.WalkingRight);
        if (Configuration.instance.visibleDrawingArea.end_x < Configuration.instance.totalSceneWidth) {
            if (characterCenter_x < Configuration.instance.visibleSceneWidth * 0.5) {
                GameCharacterController.instance.move(Direction.Right, this.horizontalSpeed);
            } else {
                FootPrintsController.instance.move(Direction.Left, this.horizontalSpeed);
                SandMountainsController.instance.move(Direction.Left, this.horizontalSpeed);
                FoodBowlController.instance.move(Direction.Left, this.horizontalSpeed);
                CoralTreesController.instance.move(Direction.Left, this.horizontalSpeed);
                FlowerCloudsController.instance.move(Direction.Left, this.horizontalSpeed);
                JellyFishFlowersController.instance.move(Direction.Left, this.horizontalSpeed);
                ColorfulParticlesController.instance.move(Direction.Left, this.horizontalSpeed);
                RocksController.instance.move(Direction.Left, this.horizontalSpeed);
                CoralMountainsController.instance.move(Direction.Left, this.horizontalSpeed);
                ManholeController.instance.move(Direction.Left, this.horizontalSpeed);
                Configuration.instance.updateVisibleDrawingArea(this.horizontalSpeed);
            }
        } else {
            if (characterCenter_x < Configuration.instance.characterEndingPoint) {
                GameCharacterController.instance.move(Direction.Right, this.horizontalSpeed);
            }
        }
    }

    private static leftArrowAnimations() {
        const characterCenter_x = GameCharacterController.instance.model.center_x;

        GameCharacterController.instance.changeSprite(Sprite.WalkingLeft);
        if (Configuration.instance.visibleDrawingArea.start_x > 0) {
            if (characterCenter_x >= Configuration.instance.visibleSceneWidth * 0.5) {
                GameCharacterController.instance.move(Direction.Left, this.horizontalSpeed);
            } else {
                FootPrintsController.instance.move(Direction.Right, this.horizontalSpeed);
                SandMountainsController.instance.move(Direction.Right, this.horizontalSpeed);
                FoodBowlController.instance.move(Direction.Right, this.horizontalSpeed);
                CoralTreesController.instance.move(Direction.Right, this.horizontalSpeed);
                JellyFishFlowersController.instance.move(Direction.Right, this.horizontalSpeed);
                FlowerCloudsController.instance.move(Direction.Right, this.horizontalSpeed);
                ColorfulParticlesController.instance.move(Direction.Right, this.horizontalSpeed);
                RocksController.instance.move(Direction.Right, this.horizontalSpeed);
                CoralMountainsController.instance.move(Direction.Right, this.horizontalSpeed);
                ManholeController.instance.move(Direction.Right, this.horizontalSpeed);
                Configuration.instance.updateVisibleDrawingArea(-1 * this.horizontalSpeed);
            }
        } else {
            if (characterCenter_x > Configuration.instance.characterStartingPoint)
                GameCharacterController.instance.move(Direction.Left, this.horizontalSpeed);
        }

    }

    public listenForKeys(): void {
        if (this._isGameOver) {
            if (keyIsDown(32)) this.resetGame();
        } else {

            if (keyIsDown(RIGHT_ARROW)) Animator.rightArrowAnimations();
            if (keyIsDown(LEFT_ARROW)) Animator.leftArrowAnimations();
            if (keyIsDown(32)) GravityController.instance.throwGameCharacter(Animator.verticalSpeed);
            if (!keyIsPressed) GameCharacterController.instance.changeSprite(Sprite.StandingFrontFacing);
        }
    }

    public listenForGameOver(onGameOver: (won: boolean) => void) {
        this.checkCharacterFalling();
        this.checkFoodCollection();

        if (this.checkCharacterReachedEnd()) {
            this._isGameOver = true;
            SoundController.instance.playVictorySound();
            onGameOver(true);
            return;
        }

        if (this._currentNumberOfLives <= 0) {
            this._isGameOver = true;
            SoundController.instance.playGameOverSound();
            onGameOver(false);
            return;
        }
    }

    public checkCharacterReachedEnd(): boolean {
        return Animator.characterReachedEnd;
    }

    public checkCharacterFalling(): void {
        if (GravityController.instance.isCharacterFalling) {
            this._currentNumberOfLives--;
            if (this._currentNumberOfLives > 0) this.retryAnotherLife();
            else this._isGameOver = true;
        }
    }

    public resetGame() {
        this._isGameOver = false;
        this._currentCollectedItems = 0;
        this._currentNumberOfLives = Configuration.numberOfLives;
        FootPrintsController.instance.resetModels();
        GameCharacterController.instance.resetModel();
        SandMountains.instance.regenerateModels();
        FoodBowls.instance.regenerateModels();
        ColorfulParticles.instance.regenerateModels();
        CoralTrees.instance.regenerateModels();
        JellyFishFlowers.instance.regenerateModels();
        FlowerClouds.instance.regenerateModels();
        Rocks.instance.regenerateModels();
        CoralMountains.instance.regenerateModels();
        Manholes.instance.regenerateModels();
        SoundController.instance.resetSoundFlags();
        Configuration.instance.resetVisibleDrawingArea();
    }

    public forceGravity(): void {
        GravityController.instance.forceGravity(Animator.verticalSpeed, Animator.jumpPower);
    }

    public retryAnotherLife(): void {
        SoundController.instance.playRetrySound();
        Configuration.instance.resetVisibleDrawingArea();
        FootPrintsController.instance.resetModels();
        SandMountainsController.instance.resetModels();
        GameCharacterController.instance.resetModel();
        FoodBowlController.instance.resetModels()
        ColorfulParticlesController.instance.resetModels();
        CoralTreesController.instance.resetModels();
        JellyFishFlowersController.instance.resetModels();
        FlowerCloudsController.instance.resetModels();
        RocksController.instance.resetModels();
        CoralMountainsController.instance.resetModels();
        ManholeController.instance.resetModels();
    }

    public checkFoodCollection(): void {
        const characterCenter_x = GameCharacterController.instance.model.center_x;
        const characterBottom_y = GameCharacterController.instance.model.bottom_y;
        let model: FoodBowlModel;
        let distance: number;
        for (let i = 0; i < FoodBowlController.instance.models.length; i++) {
            model = FoodBowlController.instance.models[i];
            if (model.isCollected) continue;
            distance = dist(characterCenter_x, characterBottom_y, model.center_x, model.bottom_y);
            if (distance <= 20) {
                FoodBowlController.instance.models[i].isCollected = true;
                if (model.isRotten) {
                    this._currentNumberOfLives--;
                    if (this._currentNumberOfLives > 0) {
                        this.retryAnotherLife();
                    } else {
                        this._isGameOver = true;
                        break;
                    }
                } else {
                    this._currentCollectedItems++;
                    SoundController.instance.playEatingSound();
                }
            }
        }
    }

    public animateFood(): void {
        const speed = 1;
        let model: FoodBowlModel;
        for (let i = 0; i < FoodBowlController.instance.models.length; i++) {
            model = FoodBowlController.instance.models[i];
            if (model.floatingDirection === Direction.Up && model.bottom_y >= FoodBowls.instance.drawingArea.start_y) {
                FoodBowlController.instance.models[i].bottom_y -= speed;
            } else if (model.floatingDirection === Direction.Down && model.bottom_y <= FoodBowls.instance.drawingArea.end_y) {
                FoodBowlController.instance.models[i].bottom_y += speed;
            } else {
                FoodBowlController.instance.models[i].floatingDirection = random([Direction.Up, Direction.Down]);
            }
        }
    }

    public animateScaryEyes(): void {
        ManholeController.instance.animateScaryEyes(GameCharacterController.instance.model.center_x, GameCharacterController.instance.model.bottom_y);
    }

}