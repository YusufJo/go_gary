"use strict";
class JellyFishFlowerModel extends MovableSceneryModel {
    constructor(center_x, bottom_y, scale) {
        super(center_x, bottom_y);
        this.center_x = center_x;
        this.bottom_y = bottom_y;
        this.scale = scale;
    }
}
JellyFishFlowerModel.defaultWidth = 34;
JellyFishFlowerModel.minScale = 0.3;
JellyFishFlowerModel.maxScale = 0.8;
JellyFishFlowerModel.colors = {
    primary: '#FFF4FF',
    shadows: '#6259A0',
    patches: '#6A1A33'
};
