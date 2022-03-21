"use strict";
class CoralMountainModel extends MovableSceneryModel {
    constructor(center_x, bottom_y, variant, scale) {
        super(center_x, bottom_y);
        this.center_x = center_x;
        this.bottom_y = bottom_y;
        this.variant = variant;
        this.scale = scale;
    }
}
CoralMountainModel.defaultWidth = 540;
CoralMountainModel.colors = {
    background: '#c2aaeb',
    foreground: '#b995e8'
};
CoralMountainModel.minScale = 1;
CoralMountainModel.maxScale = 1.5;
CoralMountainModel.maxSpacing = 300;
