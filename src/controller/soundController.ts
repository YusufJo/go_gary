class SoundController {
    private static backgroundMusic: Object;
    private static eatingSound: Object;
    private static retrySound: Object;
    private static victorySound: Object;
    private static jumpSound: Object;
    private static gameOverSound: Object;
    private stopBackgroundMusic: boolean;
    private stopVictorySound: boolean;
    private stopGameOverSound: boolean;

    private constructor() {
        soundFormats('mp3');
        this.stopBackgroundMusic = false;
        this.stopVictorySound = false;
        this.stopGameOverSound = false;
    }

    private static _instance: SoundController;

    public static get instance(): SoundController {
        if (!this._instance) this._instance = new SoundController();
        return this._instance;
    }

    public static setupBackgroundMusic(path: string) {
        // @ts-ignore
        this.backgroundMusic = loadSound(path);
    }

    public static setupEatingSound(path: string) {
        // @ts-ignore
        this.eatingSound = loadSound(path);
    }

    public static setupRetrySound(path: string): void {
        // @ts-ignore
        this.retrySound = loadSound(path);
    }

    public static setupVictorySound(path: string): void {
        // @ts-ignore
        SoundController.victorySound = loadSound(path);
    }

    public static setupJumpSound(path: string): void {
        // @ts-ignore
        SoundController.jumpSound = loadSound(path);
    }

    public static setupGameOverSound(path: string): void {
        // @ts-ignore
        SoundController.gameOverSound = loadSound(path);
    }

    public playRetrySound(): void {
        if (!SoundController.retrySound) return;
        // @ts-ignore
        if (SoundController.retrySound.isPlaying()) SoundController.retrySound.stop();

        // @ts-ignore
        SoundController.retrySound.setVolume(0.4);
        // @ts-ignore
        SoundController.retrySound.play();
    }

    public playBackgroundMusic(): void {
        if (!SoundController.backgroundMusic || this.stopBackgroundMusic) {
            // @ts-ignore
            SoundController.backgroundMusic.stop();
            return;
        }
        // @ts-ignore
        if (SoundController.backgroundMusic.isPlaying()) return;

        // @ts-ignore
        SoundController.backgroundMusic.setVolume(0.3);
        // @ts-ignore
        SoundController.backgroundMusic.play();
    }

    public playEatingSound(): void {
        if (!SoundController.eatingSound) return;
        // @ts-ignore
        if (SoundController.eatingSound.isPlaying()) SoundController.eatingSound.stop();

        // @ts-ignore
        SoundController.eatingSound.setVolume(0.4);
        // @ts-ignore
        SoundController.eatingSound.play();
    }

    public playVictorySound() {
        this.stopBackgroundMusic = true;
        if (!SoundController.victorySound || this.stopVictorySound) return;

        // @ts-ignore
        if (SoundController.victorySound.isPlaying()) return;

        // @ts-ignore
        SoundController.victorySound.setVolume(0.4);

        // @ts-ignore
        SoundController.victorySound.play();
        this.stopVictorySound = true;
    }

    public resetSoundFlags(): void {
        this.stopBackgroundMusic = false;
        this.stopVictorySound = false;
        this.stopGameOverSound = false;
    }

    public playJumpSound(): void {
        if (!SoundController.jumpSound) return;
        // @ts-ignore
        if (SoundController.jumpSound.isPlaying()) return;

        // @ts-ignore
        SoundController.jumpSound.setVolume(0.4);
        // @ts-ignore
        SoundController.jumpSound.play();
    }

    public playGameOverSound(): void {
        this.stopBackgroundMusic = true;
        // @ts-ignore
        SoundController.backgroundMusic.stop();
        if (!SoundController.gameOverSound) return;

        if (this.stopGameOverSound) return;

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