interface CoralTreeColors {
    /**
     * Color of light reflection on the tree.
     */
    readonly shine: string;

    /**
     * Main color of the tree body.
     */
    readonly fill: string;

    /**
     * Color of the flowers on the tree.
     */
    readonly flower: string;
}

interface FoodBowlColors {
    /**
     * Main color of the food bowl's body.
     */
    readonly bowlDarkFill: string;
    /**
     * Color of the shiny reflection of the food bowl.
     */
    readonly bowlLightFill: string;
    /**
     * Color of the food bowl's body outline.
     */
    readonly bowlStroke: string;
    /**
     * Color of the food.
     */
    readonly foodFill: string;
    /**
     * Color of the food outline.
     */
    readonly foodStroke: string;
    /**
     * Color of the text of the character's name on the food bowl.
     */
    readonly textFill: string;
}

interface RoadColor {
    readonly fill: string;
    readonly outline: string;
}

interface RockColor {
    readonly fill: string;
    readonly outline: string;
}

interface SkyColor {
    top: string,
    middle: string,
    bottom: string
}

interface CoralMountainColors {
    background: string,
    foreground: string
}

interface GaryColors {
    moscularFootColor: string,
    softBodyColor: string,
    lipsColor: string,
    teethColor: string,
    tongueColor: string,
    eyeScieraColor: string,
    eyeIrisColor: string,
    eyePupilColor: string,
    shellMainColor: string,
    shellDotsColor: string,
    shellSpiralColor: string,
    strokeColor: string
}

interface ManholeColors {
    coverFill: string,
    coverLightEdge: string,
    coverDarkEdge: string,
    holeEdge: string,
    holeFill: string
}

interface ScaryEyesColors {
    pupilColor: string,
    irisColor: string,
    scieraColor: string
}

interface JellyFishFlowerColors {
    primary: string,
    shadows: string,
    patches: string
}

interface SandMountainColors {
    primary: string,
    outline: string,
    shader: string
}