"use strict";
class CoralTreeModel extends MovableSceneryModel {
    constructor(center_x, bottom_y, isReflected, colors, scale) {
        super(center_x, bottom_y);
        this.center_x = center_x;
        this.bottom_y = bottom_y;
        this.isReflected = isReflected;
        this.colors = colors;
        this.scale = scale;
    }
}
CoralTreeModel.minScale = 0.5;
CoralTreeModel.maxScale = 1;
CoralTreeModel.colorsVariant1 = {
    fill: '#b9493b',
    shine: '#EB51357F',
    flower: '#f8ff77'
};
CoralTreeModel.colorsVariant2 = {
    fill: '#F285A2',
    shine: '#FFFFFF2E',
    flower: '#f8ff77'
};
