class JellyFishFlowerModel extends MovableSceneryModel {
    public static readonly defaultWidth = 34;
    public static readonly minScale = 0.3;
    public static readonly maxScale = 0.8;
    public static readonly colors = <JellyFishFlowerColors>{
        primary: '#FFF4FF',
        shadows: '#6259A0',
        patches: '#6A1A33'
    };

    constructor(public center_x: number, public bottom_y: number, public scale: number) {
        super(center_x, bottom_y);
    }
}