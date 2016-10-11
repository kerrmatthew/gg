import {Component, Input} from '@angular/core';
import {Sounder} from './../sounder';



@Component({
    selector: 'track', 
    templateUrl: 'app/templates/track.html'
})


export class TrackComponent {
    

    @Input() sounder: Sounder;
    @Input() dataindex: Number;
    
    private elementHeight = 0;

    constructor() {
    }

    ngOnInit () {
        this.sounder.stop();
    }

    public get volume () {
        return this.sounder.volume;
    }
    
    public adjustMagnitde (e:MouseEvent) {
        if(!!! this.sounder.isPlaying()) { return false } ;
       
        if(this.elementHeight === 0) {
            this.elementHeight = e.srcElement.scrollHeight
            this.elementHeight = e.srcElement.scrollHeight
        }

        this.sounder.setVolume(
            e.offsetY / this.elementHeight         
        );
        
    }

    public togglePlay () {
        return this.sounder.togglePlay()
    }

    private isOverride () {
        return this.sounder.playbackOverridden
    }

    public overridePlayback (shouldOverridePlayback) {
        if(!!! this.sounder.isPlaying() ) {
            this.sounder.overridePlayback(shouldOverridePlayback);   
        }

    }


}