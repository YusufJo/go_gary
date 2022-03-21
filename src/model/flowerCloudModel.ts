class FlowerCloudModel extends MovableSceneryModel{
    public static readonly colors = ['#a4f6a5', '#b81d87', '#f8a978', '#f68787'];
    public static readonly minScale = 0.2;
    public static readonly maxScale = 0.8;
    public static readonly minOpacity = 100;
    public static readonly maxOpacity = 200;
    public static readonly maxSpacing = 200;

    constructor(public center_x: number, public bottom_y: number, public scale: number, public color: string, public opacity: number) {
        super(center_x, bottom_y);
    }
}