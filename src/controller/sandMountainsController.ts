class SandMountainsController extends MovableSceneryModelsController<SandMountainModel> {
    private constructor() {
        super();
    }

    private static _instance: SandMountainsController;

    public static get instance(): SandMountainsController {
        if (!this._instance) this._instance = new SandMountainsController();
        return this._instance;
    }

    public get models(): SandMountainModel[] {
        return this._models;
    }

    private static getTriangleBaseLength(adjacentLength: number, hypotenuseLength: number): number {
        return Math.sqrt(Math.pow(hypotenuseLength, 2) - Math.pow(adjacentLength, 2));
    }

    private static getSimilarSideLength(a: number, similarA: number, b: number): number {
        return similarA * b / a;
    }

    private static getParticleHorizontalBufferWidth(triangleHypotenuseLength: number, triangleHeight: number, particleHeight: number): number {
        const rightTriangleBaseLength = SandMountainsController.getTriangleBaseLength(triangleHeight, triangleHypotenuseLength);
        return SandMountainsController.getSimilarSideLength(triangleHeight, particleHeight, rightTriangleBaseLength);
    }

    private static getHypotenuseLength(base: number, height: number): number {
        return Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
    }

    public generateModels(drawingArea: DrawingArea, totalNumber: number): void {
        let center_x: number;
        let bottom_y: number;
        let scale: number;
        let colorfulParticles: ColorfulParticleModel[];
        for (let i = 0; i < totalNumber; i++) {
            center_x = drawingArea.start_x + random(drawingArea.start_x, drawingArea.end_x);
            bottom_y = random(drawingArea.start_y, drawingArea.end_y);
            scale = random(SandMountainModel.minScale, SandMountainModel.maxScale);
            colorfulParticles = this.getColorfulParticlesModels(center_x, bottom_y, scale);
            this.originalModels.push(new SandMountainModel(center_x, bottom_y, scale, colorfulParticles));
        }
        super.resetModels();
    }

    public getColorfulParticlesModels(mountain_center_x: number, mountain_bottom_y: number, mountainScale: number): ColorfulParticleModel[] {
        let colorfulParticles: ColorfulParticleModel[] = [];
        let particlesTriangle: ParticlesTriangle;
        let bottom_y: number;
        let particleHeight: number;
        let leftBuffer: number;
        let triangleHeight: number;
        let leftHypotenuse: number;
        let rightBuffer: number;
        let rightHypotenuse: number;
        let center_x: number;
        let width: number;
        let height: number;
        let color: string;
        for (let i = 0; i < SandMountainModel.colorfulParticlesNumber; i++) {
            particlesTriangle = this.getParticlesTriangle(mountain_center_x, mountain_bottom_y, mountainScale);
            bottom_y = random(particlesTriangle.topCenter_y, particlesTriangle.bottomLeft_y);
            particleHeight = bottom_y - particlesTriangle.topCenter_y
            triangleHeight = particlesTriangle.bottomLeft_y - particlesTriangle.topCenter_y;

            leftHypotenuse = SandMountainsController.getHypotenuseLength(particlesTriangle.topCenter_x - particlesTriangle.bottomLeft_x, particlesTriangle.bottomLeft_y - particlesTriangle.topCenter_y);
            leftBuffer = SandMountainsController.getParticleHorizontalBufferWidth(leftHypotenuse, triangleHeight, particleHeight);

            rightHypotenuse = SandMountainsController.getHypotenuseLength(particlesTriangle.bottomRight_x - particlesTriangle.topCenter_x, particlesTriangle.bottomRight_y - particlesTriangle.topCenter_y);
            rightBuffer = SandMountainsController.getParticleHorizontalBufferWidth(rightHypotenuse, triangleHeight, particleHeight);

            center_x = random(particlesTriangle.topCenter_x - leftBuffer, particlesTriangle.topCenter_x + rightBuffer);
            width = random(ColorfulParticleModel.minWidth, ColorfulParticleModel.maxWidth);
            height = random(ColorfulParticleModel.minHeight, ColorfulParticleModel.maxHeight);
            color = random(ColorfulParticleModel.colors);
            colorfulParticles.push(new ColorfulParticleModel(center_x, bottom_y, width, height, color));
        }
        return colorfulParticles;
    }

    public getParticlesTriangle(center_x: number, bottom_y: number, scale: number): ParticlesTriangle {
        return <ParticlesTriangle>{
            topCenter_x: center_x + SandMountainModel.defaultParticlesTriangle.topCenter_x * scale,
            topCenter_y: bottom_y + SandMountainModel.defaultParticlesTriangle.topCenter_y * scale,
            bottomLeft_x: center_x + SandMountainModel.defaultParticlesTriangle.bottomLeft_x * scale,
            bottomLeft_y: bottom_y + SandMountainModel.defaultParticlesTriangle.bottomLeft_y * scale,
            bottomRight_x: center_x + SandMountainModel.defaultParticlesTriangle.bottomRight_x * scale,
            bottomRight_y: bottom_y + SandMountainModel.defaultParticlesTriangle.bottomRight_y * scale
        };
    }

    move(direction: Direction, speed: number) {
        let speedFactor = 0;
        if (direction === Direction.Right) this._models.forEach(model => {
            speedFactor = model.bottom_y / Configuration.instance.sceneHeight;
            model.center_x += speed * speedFactor;
            model.sandParticles.forEach(particle => particle.center_x += speed * speedFactor);
        });
        else this._models.forEach(model => {
            speedFactor = model.bottom_y / Configuration.instance.sceneHeight;
            model.center_x -= speed * speedFactor;
            model.sandParticles.forEach(particle => particle.center_x -= speed * speedFactor);
        });

    }
}