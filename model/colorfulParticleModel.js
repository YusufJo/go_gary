"use strict";
class ColorfulParticleModel extends MovableSceneryModel {
    constructor(center_x, bottom_y, width, height, color) {
        super(center_x, bottom_y);
        this.center_x = center_x;
        this.bottom_y = bottom_y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}
ColorfulParticleModel.colors = ['#6DBBA980', '#F5C7457F', '#B52C2080', '#D2E2E480', '#0F162180'];
ColorfulParticleModel.minWidth = 0.5;
ColorfulParticleModel.maxWidth = 5;
ColorfulParticleModel.minHeight = 0.5;
ColorfulParticleModel.maxHeight = 5;
