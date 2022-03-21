class SkyRayModel {
    public static readonly colors = <SkyColor>{
        top: '#ffe9d7',
        middle: '#8ee7c3',
        bottom: '#298dff'
    };

    constructor(public start_x: number,
                public end_x: number,
                public start_y: number,
                public end_y: number,
                public color: string) {
    }
}