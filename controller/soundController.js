"use strict";
class SoundController {
    constructor() {
        soundFormats('mp3');
        this.stopBackgroundMusic = false;
        this.stopVictorySound = false;
        this.stopGameOverSound = false;
    }
    static get instance() {
        if (!this._instance)
            this._instance = new SoundController();
        return this._instance;
    }
    static setupBackgroundMusic(path) {
        // @ts-ignore
        this.backgroundMusic = loadSound(path);
    }
    static setupEatingSound(path) {
        // @ts-ignore
        this.eatingSound = loadSound(path);
    }
    static setupRetrySound(path) {
        // @ts-ignore
        this.retrySound = loadSound(path);
    }
    static setupVictorySound(path) {
        // @ts-ignore
        SoundController.victorySound = loadSound(path);
    }
    static setupJumpSound(path) {
        // @ts-ignore
        SoundController.jumpSound = loadSound(path);
    }
    static setupGameOverSound(path) {
        // @ts-ignore
        SoundController.gameOverSound = loadSound(path);
    }
    playRetrySound() {
        if (!SoundController.retrySound)
            return;
        // @ts-ignore
        if (SoundController.retrySound.isPlaying())
            SoundController.retrySound.stop();
        // @ts-ignore
        SoundController.retrySound.setVolume(0.4);
        // @ts-ignore
        SoundController.retrySound.play();
    }
    playBackgroundMusic() {
        if (!SoundController.backgroundMusic || this.stopBackgroundMusic) {
            // @ts-ignore
            SoundController.backgroundMusic.stop();
            return;
        }
        // @ts-ignore
        if (SoundController.backgroundMusic.isPlaying())
            return;
        // @ts-ignore
        SoundController.backgroundMusic.setVolume(0.3);
        // @ts-ignore
        SoundController.backgroundMusic.play();
    }
    playEatingSound() {
        if (!SoundController.eatingSound)
            return;
        // @ts-ignore
        if (SoundController.eatingSound.isPlaying())
            SoundController.eatingSound.stop();
        // @ts-ignore
        SoundController.eatingSound.setVolume(0.4);
        // @ts-ignore
        SoundController.eatingSound.play();
    }
    playVictorySound() {
        this.stopBackgroundMusic = true;
        if (!SoundController.victorySound || this.stopVictorySound)
            return;
        // @ts-ignore
        if (SoundController.victorySound.isPlaying())
            return;
        // @ts-ignore
        SoundController.victorySound.setVolume(0.4);
        // @ts-ignore
        SoundController.victorySound.play();
        this.stopVictorySound = true;
    }
    resetSoundFlags() {
        this.stopBackgroundMusic = false;
        this.stopVictorySound = false;
        this.stopGameOverSound = false;
    }
    playJumpSound() {
        if (!SoundController.jumpSound)
            return;
        // @ts-ignore
        if (SoundController.jumpSound.isPlaying())
            return;
        // @ts-ignore
        SoundController.jumpSound.setVolume(0.4);
        // @ts-ignore
        SoundController.jumpSound.play();
    }
    playGameOverSound() {
        this.stopBackgroundMusic = true;
        // @ts-ignore
        SoundController.backgroundMusic.stop();
        if (!SoundController.gameOverSound)
            return;
        if (this.stopGameOverSound)
            return;
        // @ts-ignore
        if (SoundController.gameOverSound.isPlaying()) {
            return;
        }
        // @ts-ignore
        SoundController.gameOverSound.setVolume(0.4);
        // @ts-ignore
        SoundController.gameOverSound.play();
        this.stopGameOverSound = true;
    }
}
