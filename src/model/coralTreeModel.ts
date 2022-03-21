class CoralTreeModel extends MovableSceneryModel {
    public static minScale = 0.5;
    public static maxScale = 1;
    public static colorsVariant1 = <CoralTreeColors>{
        fill: '#b9493b',
        shine: '#EB51357F',
        flower: '#f8ff77'
    };

    public static colorsVariant2 = <CoralTreeColors>{
        fill: '#F285A2',
        shine: '#FFFFFF2E',
        flower: '#f8ff77'
    };

    constructor(public center_x: number,
                public bottom_y: number,
                public isReflected: boolean,
                public colors: CoralTreeColors,
                public scale: number) {
        super(center_x, bottom_y);
    }
}