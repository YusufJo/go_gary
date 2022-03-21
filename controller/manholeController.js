"use strict";
class ManholeController extends MovableSceneryModelsController {
    constructor() {
        super();
        this.originalScaryEyesModels = [];
        this._scaryEyesModels = [];
    }
    static get instance() {
        if (!this._instance)
            this._instance = new ManholeController();
        return this._instance;
    }
    get scaryEyesModels() {
        return this._scaryEyesModels;
    }
    get models() {
        return this._models;
    }
    generateManholeModels(drawingArea, totalNumber) {
        let center_x;
        let partitionStart = drawingArea.start_x;
        let spacing = 0;
        let partitionEnd = 0;
        for (let i = 0; i < totalNumber; i++) {
            if (i > 0)
                partitionStart = partitionEnd + ManholeModel.width / 2 + ManholeModel.minSpacing;
            spacing = random(ManholeModel.minSpacing, ManholeModel.maxSpacing);
            partitionEnd = partitionStart + spacing + ManholeModel.width / 2 - ManholeModel.minSpacing;
            center_x = random(partitionStart, partitionEnd);
            this.originalModels.push(new ManholeModel(center_x, drawingArea.start_y));
        }
        super.resetModels();
    }
    generateScaryEyesModels(manholeModels, bottom_y) {
        let leftEyeCenter_x;
        let rightEyeCenter_x;
        for (const manholeModel of manholeModels) {
            leftEyeCenter_x = manholeModel.center_x + ((ManholeModel.width / 2) * 0.5 - ScaryEyesModel.spacing);
            rightEyeCenter_x = manholeModel.center_x + ((ManholeModel.width / 2) * 0.5 + ScaryEyesModel.spacing);
            this.originalScaryEyesModels.push(new ScaryEyesModel(leftEyeCenter_x, bottom_y));
            this.originalScaryEyesModels.push(new ScaryEyesModel(rightEyeCenter_x, bottom_y));
        }
        this._scaryEyesModels = super.deepCopy(this.originalScaryEyesModels);
    }
    move(direction, speed) {
        // moving manhole models
        super.move(direction, speed);
        // moving scary eyes models
        let speedFactor = 0;
        if (direction === Direction.Right)
            this._scaryEyesModels.forEach(function (model) {
                speedFactor = model.bottom_y / Configuration.instance.sceneHeight;
                model.center_x += speed * speedFactor;
            });
        else
            this._scaryEyesModels.forEach(function (model) {
                speedFactor = model.bottom_y / Configuration.instance.sceneHeight;
                model.center_x -= speed * speedFactor;
            });
    }
    resetModels() {
        // reset manhole models
        super.resetModels();
        // reset scary eyes models
        this._scaryEyesModels = super.deepCopy(this.originalScaryEyesModels);
    }
    clearModels() {
        super.clearModels();
        this._scaryEyesModels = [];
        this.originalScaryEyesModels = [];
    }
    animateScaryEyes(character_x, character_y) {
        this._scaryEyesModels.forEach(model => {
            model.iris_x = map(character_x, model.center_x - ScaryEyesModel.sightDistance, model.center_x + ScaryEyesModel.sightDistance, -1.5, 1.5, true);
            model.iris_y = map(character_y, model.bottom_y - ScaryEyesModel.sightDistance, model.bottom_y, -1.5, 1.5, true);
        });
    }
}
