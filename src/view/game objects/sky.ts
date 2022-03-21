class Sky {
    private readonly image: Object;
    private readonly drawingArea = <DrawingArea>{
        start_x: 0,
        end_x: Configuration.instance.visibleSceneWidth,
        start_y: 0,
        end_y: Configuration.instance.sceneHeight * 0.52
    };

    private constructor() {
        SkyRaysController.instance.generateModels(this.drawingArea);
        const imageWidth = this.drawingArea.end_x - this.drawingArea.start_x;
        const imageHeight = this.drawingArea.end_y - this.drawingArea.start_y;
        this.image = createImage(imageWidth, imageHeight);
        // @ts-ignore
        this.image.loadPixels();
        // @ts-ignore
        this.generateImagePixels();
        // @ts-ignore
        this.image.updatePixels();
    }

    private static _instance: Sky;

    public static get instance(): Sky {
        if (!this._instance) {
            this._instance = new Sky();
        }
        return this._instance;
    }

    public draw(): void {
        // @ts-ignore
        image(this.image, this.drawingArea.start_x, this.drawingArea.start_y);
    }

    private generateImagePixels(): void {
        const numOfLines = this.drawingArea.end_y - this.drawingArea.start_y;
        let lineHexColor: string;
        let r: number[] = [];
        let g: number[] = [];
        let b: number[] = [];
        let a: number[] = [];

        // extract lines pixel colors
        for (let i = 0; i < SkyRaysController.instance.models.length; i++) {
            lineHexColor = color(SkyRaysController.instance.models[i].color).toString('#rrggbbaa');
            r[i] = parseInt(lineHexColor.slice(1, 3), 16);
            g[i] = parseInt(lineHexColor.slice(3, 5), 16);
            b[i] = parseInt(lineHexColor.slice(5, 7), 16);
            a[i] = parseInt(lineHexColor.slice(7, 9), 16);
        }


        const lineWidth = this.drawingArea.end_x - this.drawingArea.start_x;
        let pixelIndex: number = 0;
        for (let i = 0; i < numOfLines; i++) {
            for (let j = 0; j < lineWidth; j++) {
                pixelIndex = (j + i * lineWidth) * 4;
                // @ts-ignore
                this.image.pixels[pixelIndex] = r[i];
                // @ts-ignore
                this.image.pixels[pixelIndex + 1] = g[i];
                // @ts-ignore
                this.image.pixels[pixelIndex + 2] = b[i];
                // @ts-ignore
                this.image.pixels[pixelIndex + 3] = a[i];
            }
        }
    }

}