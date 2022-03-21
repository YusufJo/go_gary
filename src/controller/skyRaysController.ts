class SkyRaysController {
    private constructor() {
        this._models = [];
    }

    private static _instance: SkyRaysController;

    public static get instance(): SkyRaysController {
        if (!this._instance) this._instance = new SkyRaysController();
        return this._instance;
    }

    private _models: SkyRayModel[];

    public get models(): SkyRayModel[] {
        return this._models;
    }

    private static generateGradient(drawingArea: DrawingArea, topColor: string, bottomColor: string): SkyRayModel[] {
        let bottomColorAmount: number;
        let gradient: Object;
        let lines: SkyRayModel[] = [];
        for (let i = drawingArea.start_y; i < drawingArea.end_y; i++) {
            bottomColorAmount = map(i, drawingArea.start_y, drawingArea.end_y, 0, 1);
            gradient = lerpColor(color(topColor), color(bottomColor), bottomColorAmount);

            // @ts-ignore
            lines.push(new SkyRayModel(drawingArea.start_x, drawingArea.end_x, i, i, gradient.toString('#rrggbb')));
        }
        return lines;

    }

    public generateModels(drawingArea: DrawingArea): void {
        const topDrawingArea = <DrawingArea>{
            start_x: drawingArea.start_x,
            end_x: drawingArea.end_x,
            start_y: drawingArea.start_y,
            end_y: drawingArea.end_y / 2
        };
        const topRays: SkyRayModel[] = SkyRaysController.generateGradient(topDrawingArea, SkyRayModel.colors.top, SkyRayModel.colors.middle);
        const bottomDrawingArea = <DrawingArea>{
            start_x: drawingArea.start_x,
            end_x: drawingArea.end_x,
            start_y: drawingArea.end_y / 2,
            end_y: drawingArea.end_y
        }
        const bottomRays: SkyRayModel[] = SkyRaysController.generateGradient(bottomDrawingArea, SkyRayModel.colors.middle, SkyRayModel.colors.bottom);
        this._models = this._models.concat(topRays, bottomRays);
    }
}