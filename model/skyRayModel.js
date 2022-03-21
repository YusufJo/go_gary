"use strict";
class SkyRayModel {
    constructor(start_x, end_x, start_y, end_y, color) {
        this.start_x = start_x;
        this.end_x = end_x;
        this.start_y = start_y;
        this.end_y = end_y;
        this.color = color;
    }
}
SkyRayModel.colors = {
    top: '#ffe9d7',
    middle: '#8ee7c3',
    bottom: '#298dff'
};
