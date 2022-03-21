/**
 * Singleton data class that store global game configuration.
 */
class Configuration {
    public static readonly numberOfLives = 3;
    public static krappyPattyFont: Object;
    private static densitySlider: Object;
    public totalSceneWidth: number;
    public visibleSceneWidth: number;
    public sceneHeight: number;
    public visibleDrawingArea: DrawingArea;
    public characterStartingPoint: number;
    public characterEndingPoint: number;
    public characterPathLevel: number;

    private constructor() {
        this.visibleSceneWidth = windowWidth;
        this.totalSceneWidth = this.visibleSceneWidth * 2;
        this.sceneHeight = windowHeight;
        this.visibleDrawingArea = <DrawingArea>{
            start_x: 0,
            end_x: this.visibleSceneWidth,
            start_y: 0,
            end_y: this.sceneHeight
        };
        this.characterStartingPoint = 80;
        this.characterEndingPoint = this.visibleSceneWidth - 80;
        this.characterPathLevel = this.sceneHeight * 0.80;
        Configuration.densitySlider = createSlider(50, 200, pixelDensity() * 100);
    }

    private static _instance: Configuration;

    public static get instance(): Configuration {
        if (!Configuration._instance) {
            Configuration._instance = new Configuration();
        }
        return Configuration._instance;
    }

    public static loadFont(path: string) {
        Configuration.krappyPattyFont = loadFont(path)
    }

    public createPixelDensitySlider(): void {
        // @ts-ignore
        Configuration.densitySlider.position(Configuration.instance.visibleSceneWidth - 120, 30);
        // @ts-ignore
        Configuration.densitySlider.style('width', '100px');
    }

    public listenForDensitySlider(): void {
        // @ts-ignore
        pixelDensity(Configuration.densitySlider.value() / 100);
    }

    public updateVisibleDrawingArea(horizontalDistance: number) {
        this.visibleDrawingArea.start_x += horizontalDistance;
        this.visibleDrawingArea.end_x += horizontalDistance;
    }

    public resetVisibleDrawingArea(): void {
        this.visibleDrawingArea = <DrawingArea>{
            start_x: 0,
            end_x: this.visibleSceneWidth,
            start_y: 0,
            end_y: this.sceneHeight
        };
    }

}