class FootPrintModel extends MovableSceneryModel {
    public static color = '#E0CF55'

    public constructor(public center_x: number, public bottom_y: number, public isLeftFoot: boolean) {
        super(center_x, bottom_y);
    }
}