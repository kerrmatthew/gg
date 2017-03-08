import {Component, Input, NgZone} from '@angular/core';
import {Sounder} from './../sounder';

declare var core: any;


@Component({
    selector: 'track', 
    templateUrl: 'app/templates/track.html'
})


export class TrackComponent {
    

    @Input() sounder: Sounder;
    @Input() dataindex: Number;
    
    private elementHeight = 0;
    private mouseIsDown: boolean; 
    
    constructor(private _ngZone: NgZone) {}

    ngOnInit () {
        this.sounder.stop();
    }

    public get volume () {
        return this.sounder.volume;
    }
    
    public adjustMagnitde (e:MouseEvent | null) {
        // if(!!! this.sounder.isPlaying()) { return false } ;
        if (e && e.type === "mousedown") {
            this.mouseIsDown = true
        }
        if ( e && e.type != "mousedown" ){
            this.mouseIsDown = false;
            return false
        }
        this.sounder.setVolume( this.sounder.volume - 0.01 );

        if (this.sounder.volume < 1 && this.mouseIsDown === true) {
            core.delay(30).then(() => 
                this._ngZone.run(() => 
                    { this.adjustMagnitde( null ) }
                )
            )
        };
     

        return false;

    }

    public resetVolume () {
        this.sounder.setVolume(1.0);
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