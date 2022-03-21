class JellyFishFlowers {
    private readonly drawingArea = <DrawingArea>{
        start_x: 0,
        start_y: Configuration.instance.sceneHeight * .55,
        end_x: Configuration.instance.totalSceneWidth,
        end_y: Configuration.instance.sceneHeight * .65
    };
    private readonly landCoverage = 0.20;
    private readonly totalNumber = (this.drawingArea.end_x - this.drawingArea.start_x) * this.landCoverage / JellyFishFlowerModel.defaultWidth;

    private constructor() {
        JellyFishFlowersController.instance.generateModels(this.drawingArea, this.totalNumber)
    }

    private static _instance: JellyFishFlowers;

    public static get instance(): JellyFishFlowers {
        if (!this._instance) this._instance = new JellyFishFlowers();
        return this._instance;
    }

    private static drawStem(): void {
        push();
        fill(JellyFishFlowerModel.colors.primary);
        stroke(JellyFishFlowerModel.colors.shadows);
        strokeWeight(2);
        beginShape();
        vertex(-6, -20);
        bezierVertex(-2, -21, 8.5, -20, 8.5, -20);
        bezierVertex(8.5, -20, 18, -11, 10, -2);
        bezierVertex(-9, -1, -3.3, -3.5, -8.2, -8.3);
        bezierVertex(-10, -1.7, -13, -18, -6, -20);
        endShape();
        pop();
    }

    private static drawStemPatches(): void {
        push();
        fill(JellyFishFlowerModel.colors.patches);
        noStroke();
        ellipseMode(CENTER);
        ellipse(5, -7, 6.3, 6.3);
        ellipse(-5, -7, 4, 6.3);
        ellipse(8, -13, 2.8, 6.3);
        pop();
    }

    private static drawCap(): void {
        push();
        fill(JellyFishFlowerModel.colors.primary);
        stroke(JellyFishFlowerModel.colors.shadows);
        strokeWeight(2);
        // flower body
        beginShape();
        vertex(-5.3, -18.8);
        bezierVertex(-17.9, -6.1, -21.1, -15.8, -16.5, -22.5);
        bezierVertex(-14.7, -24.9, -4.6, -22.6, -7.4, -25.8);
        bezierVertex(-12.2, -31.2, -5.9, -34.2, -2.8, -31.8);
        bezierVertex(-1, -28.7, 1, -26.5, 3, -29.3);
        bezierVertex(9.1, -36.3, 17.9, -27.5, 9.4, -23.7);
        bezierVertex(18.8, -25.9, 21.6, -14.7, 10.8, -13.8);
        bezierVertex(8, -13.1, 3, -17.3, 3, -17.3);
        bezierVertex(8.3, -3.5, -17.9, -6.1, -5.3, -18.8);
        endShape();
        // flower center ellipse
        ellipseMode(CENTER);
        fill(JellyFishFlowerModel.colors.shadows);
        noStroke();
        ellipse(0.9, -22, 9, 3.3);
        pop();
    }

    public draw(): void {
        const visibleModels = BufferedRenderer.instance.getVisibleMovableModels<JellyFishFlowerModel>(JellyFishFlowersController.instance.models);
        for (const model of visibleModels) {
            push();
            translate(model.center_x, model.bottom_y);
            scale(model.scale);
            JellyFishFlowers.drawStem();
            JellyFishFlowers.drawStemPatches();
            JellyFishFlowers.drawCap();
            pop();
        }
    }

    public regenerateModels() {
        JellyFishFlowersController.instance.clearModels();
        JellyFishFlowersController.instance.generateModels(this.drawingArea, this.totalNumber);
    }
}