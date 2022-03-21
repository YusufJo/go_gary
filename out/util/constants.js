"use strict";
var Sprite;
(function (Sprite) {
    Sprite[Sprite["StandingFrontFacing"] = 0] = "StandingFrontFacing";
    Sprite[Sprite["JumpingFacingForward"] = 1] = "JumpingFacingForward";
    Sprite[Sprite["WalkingLeft"] = 2] = "WalkingLeft";
    Sprite[Sprite["WalkingRight"] = 3] = "WalkingRight";
    Sprite[Sprite["JumpingToTheRight"] = 4] = "JumpingToTheRight";
    Sprite[Sprite["JumpingToTheLeft"] = 5] = "JumpingToTheLeft";
})(Sprite || (Sprite = {}));
var OrganPlace;
(function (OrganPlace) {
    OrganPlace[OrganPlace["Center"] = 0] = "Center";
    OrganPlace[OrganPlace["Up"] = 1] = "Up";
    OrganPlace[OrganPlace["Left"] = 2] = "Left";
    OrganPlace[OrganPlace["Right"] = 3] = "Right";
})(OrganPlace || (OrganPlace = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
