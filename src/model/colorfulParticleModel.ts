class ColorfulParticleModel extends MovableSceneryModel{
    public static readonly colors = ['#6DBBA980', '#F5C7457F', '#B52C2080', '#D2E2E480', '#0F162180'];
    public static readonly minWidth = 0.5;
    public static readonly maxWidth = 5;
    public static readonly minHeight = 0.5;
    public static readonly maxHeight = 5;

    constructor(public center_x: number, public bottom_y: number, public width: number, public height: number, public color: string) {
        super(center_x, bottom_y);
    }
}