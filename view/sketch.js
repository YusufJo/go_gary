"use strict";
let statusFoodBowl;

// noinspection JSUnusedGlobalSymbols
function preload() {
    Configuration.loadFont('assets/font/KrabbyPatty.ttf');
    SoundController.setupBackgroundMusic('assets/sound/background.mp3');
    SoundController.setupEatingSound('assets/sound/eat.mp3');
    SoundController.setupRetrySound('assets/sound/retry.mp3');
    SoundController.setupVictorySound('assets/sound/victory.mp3');
    SoundController.setupJumpSound('assets/sound/jump.mp3');
    SoundController.setupGameOverSound('assets/sound/game_over.mp3');
}

// noinspection JSUnusedGlobalSymbols
function setup() {
    // @ts-ignore
    userStartAudio();
    createCanvas(windowWidth, windowHeight);
    Configuration.instance.createPixelDensitySlider();
    statusFoodBowl = new FoodBowlModel(50, 50, 1, false);
}

function draw() {
    background(255);
    Configuration.instance.listenForDensitySlider();
    SoundController.instance.playBackgroundMusic();
    Sky.instance.draw();
    FlowerClouds.instance.draw();
    SandMountains.instance.draw();
    Ground.instance.draw();
    ColorfulParticles.instance.draw();
    CoralMountains.instance.draw();
    JellyFishFlowers.instance.draw();
    CoralTrees.instance.draw();
    Rocks.instance.draw();
    Manholes.instance.draw();
    FoodBowls.instance.draw();
    GameCharacter.instance.draw();
    drawNumberOfLives();
    drawNumberOfCollectedItems();
    Animator.instance.animateFood();
    Animator.instance.animateScaryEyes();
    Animator.instance.listenForKeys();
    Animator.instance.forceGravity();
    Animator.instance.listenForGameOver(displayGameOverMessage);
}

function displayGameOverMessage(won) {
    push();
    noStroke();
    fill(0, 100);
    rect(0, 0, Configuration.instance.visibleSceneWidth, Configuration.instance.sceneHeight);
    fill('white');
    textFont(Configuration.krappyPattyFont);
    textAlign(CENTER, CENTER);
    textSize(100);
    let message;
    if (won)
        message = 'Woohoo, you made it!';
    else
        message = 'You sacrificed Gary!';
    text(message, Configuration.instance.visibleSceneWidth / 2, Configuration.instance.sceneHeight / 2 - 50);
    textSize(50);
    text('Press Space key to play again!', Configuration.instance.visibleSceneWidth / 2, Configuration.instance.sceneHeight / 2 + 50);
    pop();
}

function drawNumberOfLives() {
    let start_x = 200;
    let spacing = 50;
    push();
    textSize(30);
    textAlign(CENTER, BOTTOM);
    for (let i = 0; i < Animator.instance.currentNumberOfLives; i++) {
        text('❤️', start_x + spacing * i, 50);
    }
    pop();
}

function drawNumberOfCollectedItems() {
    FoodBowls.instance.drawOneModel(statusFoodBowl);
    push();
    fill('yellow');
    stroke('black');
    strokeWeight(1);
    textFont(Configuration.krappyPattyFont);
    textAlign(CENTER, BOTTOM);
    textSize(20);
    text("X " + Animator.instance.currentCollectedItems, 100, 50);
    pop();
}
