"use strict";
class FoodBowlModel extends MovableSceneryModel {
    constructor(center_x, bottom_y, scale, isRotten, isCollected = false, floatingDirection = Direction.Up) {
        super(center_x, bottom_y);
        this.center_x = center_x;
        this.bottom_y = bottom_y;
        this.scale = scale;
        this.isRotten = isRotten;
        this.isCollected = isCollected;
        this.floatingDirection = floatingDirection;
        this.id = random().toString(30).substr(2, 10);
    }
}
FoodBowlModel.rottenPercentage = .30;
FoodBowlModel.goodFoodColors = {
    bowlDarkFill: '#008c4b',
    bowlLightFill: '#c9de99',
    bowlStroke: '#04681c',
    foodFill: '#b26b65',
    foodStroke: '#893b36',
    textFill: '#000000'
};
FoodBowlModel.badFoodColors = {
    bowlDarkFill: '#1f1f1f',
    bowlLightFill: '#c9de99',
    bowlStroke: '#04681c',
    foodFill: '#7f9B53',
    foodStroke: '#36874D',
    textFill: '#000000'
};
FoodBowlModel.minScale = 0.8;
FoodBowlModel.maxScale = 1.5;
FoodBowlModel.maxSpacing = 300;
