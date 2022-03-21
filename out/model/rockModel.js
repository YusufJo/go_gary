"use strict";
class RockModel extends MovableSceneryModel {
    constructor(center_x, bottom_y, scale) {
        super(center_x, bottom_y);
        this.center_x = center_x;
        this.bottom_y = bottom_y;
        this.scale = scale;
    }
}
RockModel.maxSpacing = 200;
RockModel.colors = {
    fill: '#344552',
    outline: '#000000'
};
