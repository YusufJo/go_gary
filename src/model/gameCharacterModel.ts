class GameCharacterModel {
    public static readonly colors = <GaryColors>{
        moscularFootColor: '#c9de99',
        softBodyColor: '#92c4dd',
        lipsColor: '#7fadbf',
        teethColor: '#ffffff',
        tongueColor: '#ba4242',
        eyeScieraColor: '#c9de99',
        eyeIrisColor: '#d74423',
        eyePupilColor: '#010302',
        shellMainColor: '#de9a89',
        shellDotsColor: '#786dca',
        shellSpiralColor: '#943923',
        strokeColor: '#010302'
    };

    constructor(public center_x: number, public bottom_y: number, public sprite: Sprite, public rotation: number) {
    }
}