"use strict";
class ManholeModel extends MovableSceneryModel {
    constructor(center_x, bottom_y) {
        super(center_x, bottom_y);
        this.center_x = center_x;
        this.bottom_y = bottom_y;
    }
}
ManholeModel.width = 137;
ManholeModel.minSpacing = 100;
ManholeModel.maxSpacing = 400;
ManholeModel.colors = {
    coverFill: '#435449',
    coverLightEdge: '#434949',
    coverDarkEdge: '#282c2c',
    holeEdge: '#2a332d',
    holeFill: '#000000',
};
