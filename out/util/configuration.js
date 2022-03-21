"use strict";
/**
 * Singleton data class that store global game configuration.
 */
class Configuration {
    constructor() {
        this.visibleSceneWidth = windowWidth;
        this.totalSceneWidth = this.visibleSceneWidth * 2;
        this.sceneHeight = windowHeight;
        this.visibleDrawingArea = {
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
    static get instance() {
        if (!Configuration._instance) {
            Configuration._instance = new Configuration();
        }
        return Configuration._instance;
    }
    static loadFont(path) {
        Configuration.krappyPattyFont = loadFont(path);
    }
    createPixelDensitySlider() {
        // @ts-ignore
        Configuration.densitySlider.position(Configuration.instance.visibleSceneWidth - 120, 30);
        // @ts-ignore
        Configuration.densitySlider.style('width', '100px');
    }
    listenForDensitySlider() {
        // @ts-ignore
        pixelDensity(Configuration.densitySlider.value() / 100);
    }
    updateVisibleDrawingArea(horizontalDistance) {
        this.visibleDrawingArea.start_x += horizontalDistance;
        this.visibleDrawingArea.end_x += horizontalDistance;
    }
    resetVisibleDrawingArea() {
        this.visibleDrawingArea = {
            start_x: 0,
            end_x: this.visibleSceneWidth,
            start_y: 0,
            end_y: this.sceneHeight
        };
    }
}
Configuration.numberOfLives = 3;
