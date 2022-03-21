class RockModel extends MovableSceneryModel{
    public static readonly maxSpacing = 200;
    public static readonly colors = <RockColor>{
        fill: '#344552',
        outline: '#000000'
    };

    constructor(public center_x: number, public bottom_y: number, public scale: number) {
        super(center_x, bottom_y);
    }
}