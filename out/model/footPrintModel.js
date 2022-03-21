"use strict";
class FootPrintModel extends MovableSceneryModel {
    constructor(center_x, bottom_y, isLeftFoot) {
        super(center_x, bottom_y);
        this.center_x = center_x;
        this.bottom_y = bottom_y;
        this.isLeftFoot = isLeftFoot;
    }
}
FootPrintModel.color = '#E0CF55';
