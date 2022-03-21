class ScaryEyesModel extends MovableSceneryModel {
    public static readonly sightDistance = 200;
    public static readonly width = 12;
    public static readonly height = 14;
    public static irisWidth = ScaryEyesModel.width * 0.5;
    public static irisHeight = ScaryEyesModel.height * 0.5;
    public static pupilWidth = ScaryEyesModel.width * 0.3;
    public static pupilHeight = ScaryEyesModel.height * 0.3;
    public static readonly spacing = 8;
    public static readonly colors = <ScaryEyesColors>{
        pupilColor: '#010302',
        irisColor: '#7ebefc',
        scieraColor: '#ffffff'
    };

    public iris_x: number;
    public iris_y: number;
    public constructor(public center_x: number, public bottom_y: number) {
        super(center_x, bottom_y);
        this.iris_x = 0;
        this.iris_y = 0;
    }

}