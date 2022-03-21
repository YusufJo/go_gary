class FoodBowls {
    public readonly drawingArea = <DrawingArea>{
        start_x: Configuration.instance.visibleSceneWidth * 0.5,
        end_x: Configuration.instance.totalSceneWidth * 0.6,
        start_y: Configuration.instance.sceneHeight * 0.6,
        end_y: Configuration.instance.characterPathLevel
    };
    private readonly totalNumber = (Configuration.instance.totalSceneWidth * Configuration.instance.sceneHeight) / 300000;

    private constructor() {
        FoodBowlController.instance.generateModels(this.drawingArea, this.totalNumber);
    }

    private static _instance: FoodBowls;

    public static get instance(): FoodBowls {
        if (!this._instance) this._instance = new FoodBowls();
        return this._instance;
    }

    private static drawBowlTop(lightFill: string) {
        push();
        fill(lightFill);
        beginShape();
        vertex(-16, 15);
        bezierVertex(-16, 15, -14, 17, 0, 17);
        bezierVertex(14, 17, 16, 15, 16, 15);
        bezierVertex(16, 15, 10, 12, -1, 12);
        bezierVertex(-12, 11, -16, 15, -16, 15);
        endShape()
        pop();
    }

    private static drawBowlFront(darkFill: string) {
        push();
        fill(darkFill);
        beginShape();
        vertex(-19, 3);
        bezierVertex(-19, 6, -18, 9, -18, 9);
        bezierVertex(-17, 11, -16, 14, -16, 14);
        bezierVertex(-12, 13, -12, 12, 1, 12);
        bezierVertex(10, 11, 16, 15, 16, 15);
        bezierVertex(16, 15, 16, 14, 17, 12);
        bezierVertex(18, 10, 19, 4, 19, 4);
        bezierVertex(19, 4, 13, 1, 2, 1);
        bezierVertex(-9, -1, -19, 3, -19, 3);
        endShape();
        pop();
    }

    private static drawCharactersName(textFill: string, drawSkull: boolean) {
        push();
        scale(1, -1);
        fill(textFill);
        textAlign(CENTER, CENTER);
        if (drawSkull) {
            textSize(6);
            text('\uD83D\uDC80', 0, -7)
        } else {
            textSize(8);
            textFont(Configuration.krappyPattyFont);
            text("GARY", 0, -7);
        }
        pop();
    }

    private static drawFood(foodFill: string, foodStroke: string) {

        push();
        translate(0, 2);
        scale(0.9);
        fill(foodFill);
        stroke(foodStroke);
        strokeWeight(1);
        beginShape();
        vertex(-12, 16);
        bezierVertex(-5, 20, -12, 18, -6, 25);
        bezierVertex(-9, 39, 4, 34, 1, 25);
        bezierVertex(0, 23, 6, 23, 5, 22);
        bezierVertex(5, 19, 9, 19, 12, 15);
        bezierVertex(11, 13, -13, 11, -12, 16);
        endShape();

        // shadows
        noFill();

        beginShape();
        vertex(-7, 16);
        bezierVertex(-5, 17, -3, 17, -2, 16);
        endShape();

        beginShape();
        vertex(-6, 21);
        bezierVertex(-2, 24, -3, 17, 2, 21);
        endShape();
        pop();
    }

    public draw(): void {
        const visibleModels = BufferedRenderer.instance.getVisibleMovableModels<FoodBowlModel>(FoodBowlController.instance.models);
        for (const model of visibleModels) {
            if (model.isCollected) continue;
            this.drawOneModel(model);
        }
    }

    public drawOneModel(model: FoodBowlModel) {
        const bowlColors = model.isRotten ? FoodBowlModel.badFoodColors : FoodBowlModel.goodFoodColors;
        push();
        translate(model.center_x, model.bottom_y);
        scale(model.scale, -1 * model.scale);
        stroke(FoodBowlModel.goodFoodColors.bowlStroke);
        FoodBowls.drawBowlTop(bowlColors.bowlLightFill);
        FoodBowls.drawFood(bowlColors.foodFill, bowlColors.foodStroke);
        FoodBowls.drawBowlFront(bowlColors.bowlDarkFill);
        FoodBowls.drawCharactersName(bowlColors.textFill, model.isRotten);
        pop();
    }

    public regenerateModels() {
        FoodBowlController.instance.clearModels();
        FoodBowlController.instance.generateModels(this.drawingArea, this.totalNumber);
    }
}