class ManholeModel extends MovableSceneryModel {
    public static readonly width = 137;
    public static readonly minSpacing = 100;
    public static readonly maxSpacing = 400;
    public static readonly colors = <ManholeColors>{
        coverFill: '#435449',
        coverLightEdge: '#434949',
        coverDarkEdge: '#282c2c',
        holeEdge: '#2a332d',
        holeFill: '#000000',
    };

    public constructor(public center_x: number, public bottom_y: number) {
        super(center_x, bottom_y);
    }
}