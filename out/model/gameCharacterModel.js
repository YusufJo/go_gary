"use strict";
class GameCharacterModel {
    constructor(center_x, bottom_y, sprite, rotation) {
        this.center_x = center_x;
        this.bottom_y = bottom_y;
        this.sprite = sprite;
        this.rotation = rotation;
    }
}
GameCharacterModel.colors = {
    moscularFootColor: '#c9de99',
    softBodyColor: '#92c4dd',
    lipsColor: '#7fadbf',
    teethColor: '#ffffff',
    tongueColor: '#ba4242',
    eyeScieraColor: '#c9de99',
    eyeIrisColor: '#d74423',
    eyePupilColor: '#010302',
    shellMainColor: '#de9a89',
    shellDotsColor: '#786dca',
    shellSpiralColor: '#943923',
    strokeColor: '#010302'
};
