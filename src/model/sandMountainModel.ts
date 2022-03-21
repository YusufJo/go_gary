class SandMountainModel extends MovableSceneryModel {
    public static readonly defaultParticlesTriangle = <ParticlesTriangle>{
        topCenter_x: -29.6,
        topCenter_y: -210,
        bottomLeft_x: -110,
        bottomLeft_y: -12,
        bottomRight_x: 71.9,
        bottomRight_y: -12
    };
    public static colorfulParticlesNumber = 50;
    public static readonly defaultWidth = 265;
    public static readonly minScale = 0.5;
    public static readonly maxScale = 1.2;
    public static readonly colors = <SandMountainColors>{
        primary: '#E9E7C8',
        shader: '#BBB0B6BF',
        outline: '#686867'
    };

    public constructor(public center_x: number, public bottom_y: number, public scale: number, public sandParticles: ColorfulParticleModel[]) {
        super(center_x, bottom_y);
    }
}