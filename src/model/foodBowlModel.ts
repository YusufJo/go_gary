class FoodBowlModel extends MovableSceneryModel {
    public static readonly rottenPercentage = .30;
    public static readonly goodFoodColors = <FoodBowlColors>{
        bowlDarkFill: '#008c4b',
        bowlLightFill: '#c9de99',
        bowlStroke: '#04681c',
        foodFill: '#b26b65',
        foodStroke: '#893b36',
        textFill: '#000000'
    };

    public static readonly badFoodColors = <FoodBowlColors>{
        bowlDarkFill: '#1f1f1f',
        bowlLightFill: '#c9de99',
        bowlStroke: '#04681c',
        foodFill: '#7f9B53',
        foodStroke: '#36874D',
        textFill: '#000000'
    }

    public static readonly minScale = 0.8;
    public static readonly maxScale = 1.5;
    public static readonly maxSpacing = 300;

    public id: string;

    public constructor(public center_x: number, public bottom_y: number, public scale: number, public isRotten: boolean, public isCollected = false, public floatingDirection = Direction.Up) {
        super(center_x, bottom_y);
        this.id = random().toString(30).substr(2, 10);
    }
}