"use strict";
class SandMountainModel extends MovableSceneryModel {
    constructor(center_x, bottom_y, scale, sandParticles) {
        super(center_x, bottom_y);
        this.center_x = center_x;
        this.bottom_y = bottom_y;
        this.scale = scale;
        this.sandParticles = sandParticles;
    }
}
SandMountainModel.defaultParticlesTriangle = {
    topCenter_x: -29.6,
    topCenter_y: -210,
    bottomLeft_x: -110,
    bottomLeft_y: -12,
    bottomRight_x: 71.9,
    bottomRight_y: -12
};
SandMountainModel.colorfulParticlesNumber = 50;
SandMountainModel.defaultWidth = 265;
SandMountainModel.minScale = 0.5;
SandMountainModel.maxScale = 1.2;
SandMountainModel.colors = {
    primary: '#E9E7C8',
    shader: '#BBB0B6BF',
    outline: '#686867'
};
