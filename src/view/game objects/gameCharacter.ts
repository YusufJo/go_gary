class GameCharacter {
    private constructor() {
        GameCharacterController.instance.generateModel(Configuration.instance.characterStartingPoint,
            Configuration.instance.characterPathLevel,
            Sprite.StandingFrontFacing);
    }

    private static _instance: GameCharacter;

    public static get instance(): GameCharacter {
        if (!this._instance) this._instance = new GameCharacter();
        return this._instance;
    }

    private static drawMoscularFootStandingFront() {
        push();
        fill(GameCharacterModel.colors.moscularFootColor);
        rect(-12, 0, 24, 17);
        pop();
    }

    private static drawSoftBodyFront(translate_y = 0) {
        push();
        translate(0, translate_y);
        fill(GameCharacterModel.colors.softBodyColor);
        beginShape();
        vertex(-12, 0);
        vertex(-12, 20);
        vertex(12, 12);
        vertex(12, 0);
        bezierVertex(11, 0, 9, 3, 8, 3);
        bezierVertex(5, 3, 2, 1, 0, 1);
        bezierVertex(-2, 1, -3, 3, -5, 3);
        bezierVertex(-7, 3, -10, 0, -12, 0);
        endShape();
        pop();
    }

    private static drawMouthStandingFront() {
        push();
        fill(GameCharacterModel.colors.lipsColor);
        stroke(GameCharacterModel.colors.strokeColor);
        strokeWeight(0.25);
        // back layer "lips layer"
        GameCharacter.mouthLayerStandingFront();
        // front layer "teeth layer"
        fill(GameCharacterModel.colors.teethColor);
        let frontLayerScale = 0.9;
        GameCharacter.mouthLayerStandingFront(frontLayerScale);
        GameCharacter.teethStandingFront(frontLayerScale);
        pop();
    }

    private static mouthLayerStandingFront(layerScale = 1) {
        push();
        scale(layerScale);
        beginShape();
        vertex(-7, 10);
        bezierVertex(-9, 10, -11, 8, -11, 6);
        bezierVertex(-12, 0, 12, 0, 11, 6);
        bezierVertex(11, 8, 9, 10, 6, 10);
        bezierVertex(3, 11, 3, 8, 0, 8);
        bezierVertex(-3, 8, -4, 11, -7, 10);
        endShape();
        pop();
    }

    private static teethStandingFront(layerScale: number) {
        push();
        strokeWeight(0.5);
        scale(layerScale);
        line(-4, 10, -10, 4);
        line(-2, 8, -5, 2);
        line(0, 8, 0, 2);
        line(2, 8, 5, 2);
        line(4, 10, 10, 4);
        pop();
    }

    private static moscularFootJumpingFront() {
        push();
        fill(GameCharacterModel.colors.moscularFootColor);
        beginShape();
        vertex(0, 0);
        bezierVertex(-2, 1, 0, 9, -4, 15);
        bezierVertex(-7, 18, -10, 17, -12, 20);
        bezierVertex(-15, 26, -7, 40, 0, 40);
        bezierVertex(7, 40, 13, 28, 12, 20);
        bezierVertex(4, 5, 1, 0, 0, 0);
        endShape();
        pop();
    }

    private static drawTentacleFront(translate_y = 0, organPlace: OrganPlace) {
        push();
        translate(0, translate_y);
        let {tentacleAnchors_hz, tentacleHandlers_hz} = GameCharacter.getTentacleFrontHorizontalCoord(organPlace);
        fill(GameCharacterModel.colors.softBodyColor);
        stroke(GameCharacterModel.colors.strokeColor);
        strokeWeight(0.5);
        beginShape();
        vertex(tentacleAnchors_hz.x1, 11);
        bezierVertex(tentacleHandlers_hz.x1, 22, tentacleHandlers_hz.x2, 29, tentacleAnchors_hz.x2, 40);
        vertex(tentacleAnchors_hz.x3, 42);
        bezierVertex(tentacleHandlers_hz.x3, 30, tentacleHandlers_hz.x4, 24, tentacleAnchors_hz.x4, 13);
        endShape();
        pop();
    }

    private static irisPlacement(scieraPos_x: number, scieraPos_y: number, organPlace: OrganPlace) {
        // defaults to center
        let coordinates = {x: scieraPos_x, y: scieraPos_y};
        if (organPlace === OrganPlace.Up) {
            coordinates.y += 2;
        } else if (organPlace === OrganPlace.Left) {
            coordinates.x -= 2;
        }
        return coordinates;
    }

    private static getTentacleFrontHorizontalCoord(organPlace: OrganPlace) {
        // default values for front view of left tentacle.
        let tentacleAnchors_hz = {x1: -6, x2: -18, x3: -15, x4: -3};
        let tentacleHandlers_hz = {x1: -9, x2: -13, x3: -12, x4: -7};
        // reverse signs of horizontal coordinates in case of right tentacle.
        if (organPlace === OrganPlace.Right) {
            // anchor points
            tentacleAnchors_hz.x1 *= -1;
            tentacleAnchors_hz.x2 *= -1;
            tentacleAnchors_hz.x3 *= -1;
            tentacleAnchors_hz.x4 *= -1;
            // anchor handlers
            tentacleHandlers_hz.x1 *= -1;
            tentacleHandlers_hz.x2 *= -1;
            tentacleHandlers_hz.x3 *= -1;
            tentacleHandlers_hz.x4 *= -1;
        }
        return {tentacleAnchors_hz, tentacleHandlers_hz};
    }

    private static drawShellDecorationFront(translate_y = 0) {
        push();
        translate(0, translate_y);
        fill(GameCharacterModel.colors.shellDotsColor);
        beginShape();
        vertex(-11, 26);
        bezierVertex(-10, 29, -9, 31, -7, 33);
        bezierVertex(-7, 32, -6, 31, -6, 30);
        bezierVertex(-6, 27, -9, 26, -11, 26);
        endShape();

        beginShape();
        vertex(10, 29);
        bezierVertex(9, 29, 8, 27, 8, 26);
        bezierVertex(8, 24, 9, 22, 11, 22);
        bezierVertex(11, 22, 12, 22, 12, 23);

        endShape();
        pop();
    }

    private static transformSprite(sprite: Sprite) {
        switch (sprite) {
            case Sprite.WalkingRight:
            case Sprite.JumpingToTheRight:
                scale(-1, 1);
                break;
        }
    }

    private static mouthJumpingForward() {
        push();
        fill(GameCharacterModel.colors.lipsColor);
        stroke(GameCharacterModel.colors.strokeColor);
        // lips
        beginShape();
        vertex(0, 22);
        bezierVertex(-4, 22, -9, 25, -9, 28);
        bezierVertex(-9, 31, -4, 33, -1, 33);
        bezierVertex(2, 33, 7, 31, 7, 28);
        bezierVertex(7, 25, 4, 22, 0, 22);
        endShape();
        // tongue
        fill(GameCharacterModel.colors.tongueColor);
        beginShape();
        vertex(1, 23);
        bezierVertex(-4, 32, -8, 26, -7, 28);
        bezierVertex(-7, 30, 5, 30, 5, 28);
        endShape(CLOSE);
        pop();
    }

    private static drawShellStructure(sprite: Sprite, translate_y = 0) {
        push();
        translate(0, translate_y);
        fill(GameCharacterModel.colors.shellMainColor);
        strokeWeight(0);
        // shell base. for side profile facing sprites.
        GameCharacter.shellBase(sprite);
        // convex-top-concave-bottom shell. for front facing sprites.
        beginShape();
        vertex(-12, 0);
        bezierVertex(-19, 20, 0, 61, 12, 22);
        bezierVertex(14, 15, 14, 6, 12, 0);
        bezierVertex(8, 20, -7, 20, -12, 0);
        endShape(CLOSE);
        pop();
    }

    private static eye(scieraPos_x: number, scieraPos_y: number, irisPosition: number) {
        // eye sciera
        fill(GameCharacterModel.colors.eyeScieraColor);
        push();
        strokeWeight(0.5);
        stroke(GameCharacterModel.colors.strokeColor);
        circle(scieraPos_x, scieraPos_y, 12);
        pop(); // clear strokeWeight
        // eye iris
        let iris = GameCharacter.irisPlacement(scieraPos_x, scieraPos_y, irisPosition);
        fill(GameCharacterModel.colors.eyeIrisColor);
        circle(iris.x, iris.y, 7);
        // eye pupil
        fill(GameCharacterModel.colors.eyePupilColor);
        circle(iris.x, iris.y, 3);
    }

    private static shellBase(sprite: Sprite) {
        switch (sprite) {
            case Sprite.WalkingLeft:
            case Sprite.WalkingRight:
            case Sprite.JumpingToTheLeft:
            case Sprite.JumpingToTheRight:
                beginShape();
                vertex(-12, 5);
                vertex(-12, 20);
                vertex(12, 20);
                vertex(12, 5);
                bezierVertex(13, 4, 15, 4, 15, 3);
                bezierVertex(15, 1, 12, 0, 9, 0);
                bezierVertex(8, 0, 7, 0, 3, 1);
                bezierVertex(1, 2, 0, 2, 0, 2);
                bezierVertex(-4, 2, -5, 0, -9, 0);
                bezierVertex(-12, 0, -15, 1, -15, 3);
                bezierVertex(-15, 3, -14, 4, -12, 5);
                endShape();
                break;
        }
    }

    private static moscularFootProfile() {
        push();
        fill(GameCharacterModel.colors.moscularFootColor);
        beginShape();
        vertex(-24, 2);
        bezierVertex(-24, 3, -22, 3, -21, 3);
        bezierVertex(-10, 4, -11, 6, -2, 6);
        bezierVertex(4, 6, 3, 5, 10, 5);
        bezierVertex(15, 5, 18, 6, 18, 5);
        bezierVertex(18, 5, 16, 4, 15, 3);
        bezierVertex(12, 2, 13, 4, 11, 3);
        bezierVertex(8, 3, 8, 0, 5, 0);
        bezierVertex(2, 0, 2, 1, 0, 2);
        bezierVertex(-4, 2, -4, 0, -8, 0);
        bezierVertex(-11, 0, -12, 2, -14, 2);
        bezierVertex(-16, 1, -17, 0, -19, 0);
        bezierVertex(-22, 0, -24, 2, -24, 2);
        endShape();
        pop();
    }

    private static softBodyProfile() {
        push();
        fill(GameCharacterModel.colors.softBodyColor);
        beginShape();
        vertex(-20, 3);
        bezierVertex(-20, 4, -18, 6, -15, 7);
        bezierVertex(-14, 7, -14, 7, -13, 7);
        bezierVertex(-11, 6, -4, 7, -3, 8);
        bezierVertex(-3, 10, 2, 11, 5, 11);
        bezierVertex(7, 11, 11, 10, 14, 7);
        bezierVertex(14, 6, 15, 5, 15, 4);
        bezierVertex(15, 3, 13, 4, 10, 4);
        bezierVertex(8, 4, 7, 4, 5, 3);
        bezierVertex(2, 2, 2, 3, -1, 3);
        bezierVertex(6, 3, 6, 1, -9, 2);
        bezierVertex(-12, 2, -13, 3, -16, 3);
        bezierVertex(-19, 3, -20, 2, -20, 3);
        endShape();
        pop();
    }

    private static leftTentacleProfile() {
        push();
        fill(GameCharacterModel.colors.softBodyColor);
        stroke(GameCharacterModel.colors.strokeColor);
        strokeWeight(0.25);
        beginShape();
        vertex(-19, 4);
        bezierVertex(-20, 13, -14, 22, -16, 33);
        vertex(-20, 53);
        vertex(-15, 53);
        bezierVertex(-15, 47, -15, 40, -14, 32);
        bezierVertex(-13, 22, -19, 14, -17, 6);
        endShape();
        pop();
    }

    private static shellProfileDecoration() {
        push();
        GameCharacter.shellDecorationDotProfile(-8, 20, 0.60, 75);
        GameCharacter.shellDecorationDotProfile(-5, 26, 0.70, 230);
        GameCharacter.shellDecorationDotProfile(1, 30, 1, 0);
        GameCharacter.shellDecorationDotProfile(8, 27, 0.70, 130);
        GameCharacter.shellSpiral();
        pop();
    }

    private static shellDecorationDotProfile(x: number, y: number, dotScale: number, rotationDegree: number) {
        push();
        fill(GameCharacterModel.colors.shellDotsColor);
        translate(x, y);
        angleMode(DEGREES);
        rotate(rotationDegree);
        scale(dotScale);
        ellipse(0, 0, 7, 4);
        pop();
    }

    private static shellSpiral() {
        push();
        strokeWeight(1);
        stroke(GameCharacterModel.colors.shellSpiralColor);
        noFill();
        beginShape();
        vertex(0, 7);
        bezierVertex(1, 8, -4, 10, -5, 15);
        bezierVertex(-7, 24, 2, 28, 7, 22);
        bezierVertex(9, 20, 9, 17, 8, 14);
        bezierVertex(5, 10, -2, 11, 0, 20);
        endShape();
        pop();
    }

    private static rightTentacleProfile() {
        push();
        fill(GameCharacterModel.colors.softBodyColor);
        stroke(GameCharacterModel.colors.strokeColor);
        strokeWeight(0.25);
        beginShape();
        vertex(-15, 5);
        bezierVertex(-15, 13, -12, 22, -11, 33);
        bezierVertex(-10, 40, -8, 47, -7, 53);
        vertex(-11, 54);
        bezierVertex(-11, 54, -12, 40, -13, 33);
        bezierVertex(-14, 23, -16, 14, -17, 6);
        endShape();
        pop();
    }

    private static jumpingToTheLeft(center_x: number, bottom_y: number, rotation: number) {
        push();
        noStroke();
        GameCharacter.changeAnchorPoint(center_x, bottom_y);
        rotate(-1 * rotation);
        GameCharacter.walking(center_x, bottom_y, Sprite.JumpingToTheLeft, false);
        pop();
    }

    private static jumpingToTheRight(center_x: number, bottom_y: number, rotation: number) {
        push();
        noStroke();
        GameCharacter.changeAnchorPoint(center_x, bottom_y);
        rotate(rotation);
        GameCharacter.walking(center_x, bottom_y, Sprite.JumpingToTheRight, false);
        pop();
    }

    private static walking(center_x: number, bottom_y: number, sprite: Sprite, changeAnchor: boolean = true) {
        push();
        noStroke();
        if (changeAnchor) {
            GameCharacter.changeAnchorPoint(center_x, bottom_y);
        }
        GameCharacter.transformSprite(sprite);
        GameCharacter.moscularFootProfile();
        GameCharacter.softBodyProfile();
        GameCharacter.drawShellStructure(Sprite.WalkingLeft, 5);
        GameCharacter.shellProfileDecoration();
        GameCharacter.leftTentacleProfile();
        GameCharacter.eye(-17, 52, OrganPlace.Left);
        GameCharacter.rightTentacleProfile();
        GameCharacter.eye(-9, 52, OrganPlace.Left);
        pop();
    }

    private static changeAnchorPoint(center_x: number, bottom_y: number, reverseHorizontalAxis = true) {
        translate(center_x, bottom_y);
        // make y coordinate increase by going up
        if (reverseHorizontalAxis) {
            scale(1, -1);
        }
    }

    private static standingFrontFacing(center_x: number, bottom_y: number) {
        push();
        noStroke();
        GameCharacter.changeAnchorPoint(center_x, bottom_y);
        GameCharacter.drawMoscularFootStandingFront();
        GameCharacter.drawSoftBodyFront();
        GameCharacter.drawShellStructure(Sprite.StandingFrontFacing);
        GameCharacter.drawShellDecorationFront();
        GameCharacter.drawMouthStandingFront();
        GameCharacter.drawTentacleFront(0, OrganPlace.Left);
        GameCharacter.eye(-15, 36, OrganPlace.Center);
        GameCharacter.drawTentacleFront(0, OrganPlace.Right);
        GameCharacter.eye(15, 36, OrganPlace.Center);
        pop();
    }

    private static jumpingFacingForward(center_x: number, bottom_y: number) {
        noStroke();
        push();
        GameCharacter.changeAnchorPoint(center_x, bottom_y);
        GameCharacter.moscularFootJumpingFront();
        GameCharacter.drawSoftBodyFront(21);
        GameCharacter.drawShellStructure(Sprite.JumpingFacingForward, 21);
        GameCharacter.drawShellDecorationFront(21);
        GameCharacter.mouthJumpingForward();
        GameCharacter.drawTentacleFront(21, OrganPlace.Left);
        GameCharacter.eye(-16, 62, OrganPlace.Up);
        GameCharacter.drawTentacleFront(21, OrganPlace.Right);
        GameCharacter.eye(16, 62, OrganPlace.Up);
        pop();
    }

    //
    // public setCenter_x(center_x: number): Gary {
    //     GameCharacter.center_x = center_x;
    //     return GameCharacter.instance;
    // }
    //
    // public setBottom_y(bottom_y: number): Gary {
    //     GameCharacter.bottom_y = bottom_y;
    //     return GameCharacter.instance;
    // }
    //
    // public setSprite(sprite: Sprite): Gary {
    //     GameCharacter.sprite = sprite;
    //     return GameCharacter.instance;
    // }
    //
    // public setRotation(model: GameCharacterModel, rotation: number): GameCharacterModel {
    //     model.rotation = rotation;
    //     return model;
    // }

    public draw() {
        const model = GameCharacterController.instance.model;
        if (model.center_x === 0 && model.bottom_y === 0)
            console.warn("Character's position may not be set correctly");
        switch (model.sprite) {
            case Sprite.StandingFrontFacing:
                GameCharacter.standingFrontFacing(model.center_x, model.bottom_y);
                break;
            case Sprite.JumpingFacingForward:
                GameCharacter.jumpingFacingForward(model.center_x, model.bottom_y);
                break;
            case Sprite.WalkingLeft:
                GameCharacter.walking(model.center_x, model.bottom_y, Sprite.WalkingLeft);
                break;
            case Sprite.WalkingRight:
                GameCharacter.walking(model.center_x, model.bottom_y, Sprite.WalkingRight);
                break;
            case Sprite.JumpingToTheLeft:
                GameCharacter.jumpingToTheLeft(model.center_x, model.bottom_y, model.rotation);
                break;
            case Sprite.JumpingToTheRight:
                GameCharacter.jumpingToTheRight(model.center_x, model.bottom_y, model.rotation);
                break;
        }
    }
}