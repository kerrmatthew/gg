import {Component, Input} from '@angular/core';
import {Sounder} from './../sounder';



@Component({
    selector: 'track', 
    templateUrl: 'app/templates/track.html'
})


export class TrackComponent {
    

    @Input() sounder: Sounder;
    
    private elementHeight = 0;

    constructor() {
    }

    ngOnInit() {
        // this.sounder.play();
    }

    public get volume() {
        return this.sounder.volume;
    }
    
    public adjustMagnitde (e:MouseEvent) {
        if(!!! this.isPlaying()) { return false } ;
            if(this.elementHeight == 0) {
                this.elementHeight = e.srcElement.scrollHeight
            }

        this.sounder.setVolume(
            e.offsetY / this.elementHeight         
        );
        
    }

    public togglePlay () {
        return this.sounder.togglePlay()
    }

    private isPlaying () {
        return this.sounder.playing
    }

    private isOverride () {
        return this.sounder.playbackOverridden
    }

    public overridePlayback(shouldOverridePlayback) {
        if(!!! this.isPlaying() ) {
            this.sounder.overridePlayback(shouldOverridePlayback);   
        }

    }


}