class CoralMountainModel extends MovableSceneryModel{
    public static readonly defaultWidth = 540;
    public static readonly colors = <CoralMountainColors>{
        background: '#c2aaeb',
        foreground: '#b995e8'
    };
    public static readonly minScale = 1;
    public static readonly maxScale = 1.5;
    public static readonly maxSpacing = 300;

    public constructor(public center_x: number, public bottom_y: number, public variant: Variant, public scale: number) {
        super(center_x, bottom_y);
    }
}