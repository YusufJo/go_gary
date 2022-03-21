"use strict";
class FoodBowlController extends MovableSceneryModelsController {
    constructor() {
        super();
    }
    static get instance() {
        if (!this._instance)
            this._instance = new FoodBowlController();
        return this._instance;
    }
    get models() {
        return this._models;
    }
    generateModels(drawingArea, totalNumber) {
        // good food
        this.generateFoodBowls(drawingArea, totalNumber * (1 - FoodBowlModel.rottenPercentage), false);
        // bad food
        this.generateFoodBowls(drawingArea, totalNumber * FoodBowlModel.rottenPercentage, true);
        super.resetModels();
    }
    resetModels() {
        // get collected food bowls' ids before resetting
        const foundModelsIDs = this._models.filter(model => model.isCollected).map(model => model.id);
        super.resetModels();
        // recovering the found collected status of collected food bowls
        this._models.filter(model => {
            console.log(model.id + " " + model.id in foundModelsIDs);
            return foundModelsIDs.find(element => element === model.id) !== undefined;
        }).forEach(model => {
            model.isCollected = true;
        });
    }
    generateFoodBowls(drawingArea, totalNumber, isRotten) {
        let center_x;
        let bottom_y;
        let scale;
        // good food
        for (let i = 0; i < totalNumber * (1 - FoodBowlModel.rottenPercentage); i++) {
            center_x = drawingArea.start_x
                + i * ((drawingArea.end_x - drawingArea.start_x) / totalNumber)
                + random(0, FoodBowlModel.maxSpacing);
            bottom_y = drawingArea.start_y + random(0, drawingArea.end_y - drawingArea.start_y);
            scale = random(FoodBowlModel.minScale, FoodBowlModel.maxScale);
            this.originalModels.push(new FoodBowlModel(center_x, bottom_y, scale, isRotten));
        }
    }
}
