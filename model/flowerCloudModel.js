"use strict";
class FlowerCloudModel extends MovableSceneryModel {
    constructor(center_x, bottom_y, scale, color, opacity) {
        super(center_x, bottom_y);
        this.center_x = center_x;
        this.bottom_y = bottom_y;
        this.scale = scale;
        this.color = color;
        this.opacity = opacity;
    }
}
FlowerCloudModel.colors = ['#a4f6a5', '#b81d87', '#f8a978', '#f68787'];
FlowerCloudModel.minScale = 0.2;
FlowerCloudModel.maxScale = 0.8;
FlowerCloudModel.minOpacity = 100;
FlowerCloudModel.maxOpacity = 200;
FlowerCloudModel.maxSpacing = 200;
