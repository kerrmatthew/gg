declare var Howl: any;

export class Sounder {
    private url: string;
    private howler: any;
    public playbackOverridden: boolean;

    public playing: boolean = false;
    public volume = 1.0;


    constructor (
        soundUrl: string
    ) 
    { 
        this.url = soundUrl; 

        this.howler = new Howl({
            urls: [ this.url ],
            autoplay: false, 
            loop: true, 
            volume: this.volume
        })
    }

    public play () {
        if(this.playbackOverridden) {
            this.playbackOverridden = false; 
            this.playing = true; 
        } else {
            this.playing = true;
            this.howler.fadeIn(this.volume, 500);
        }
    }
    public stop () {
        this.howler.fadeOut(0, 500);
        this.playing = false;
    }

    public setVolume (volume) {
        this.volume = volume;
        this.howler.volume(this.volume);
    }

    public togglePlay () {
        if(this.playing){
            this.stop()
        } else {
            this.play();
        }
        return this.playing
    }
    
    public overridePlayback (shouldOverridePlayback) {
        if(shouldOverridePlayback) {
            this.playbackOverridden = true
            this.howler.fadeIn(this.volume, 500);
        } else {
            this.playbackOverridden = false
            if(this.playing === false) { this.stop() } 
        }
        
    }


}