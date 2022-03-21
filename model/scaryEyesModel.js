"use strict";
class ScaryEyesModel extends MovableSceneryModel {
    constructor(center_x, bottom_y) {
        super(center_x, bottom_y);
        this.center_x = center_x;
        this.bottom_y = bottom_y;
        this.iris_x = 0;
        this.iris_y = 0;
    }
}
ScaryEyesModel.sightDistance = 200;
ScaryEyesModel.width = 12;
ScaryEyesModel.height = 14;
ScaryEyesModel.irisWidth = ScaryEyesModel.width * 0.5;
ScaryEyesModel.irisHeight = ScaryEyesModel.height * 0.5;
ScaryEyesModel.pupilWidth = ScaryEyesModel.width * 0.3;
ScaryEyesModel.pupilHeight = ScaryEyesModel.height * 0.3;
ScaryEyesModel.spacing = 8;
ScaryEyesModel.colors = {
    pupilColor: '#010302',
    irisColor: '#7ebefc',
    scieraColor: '#ffffff'
};
