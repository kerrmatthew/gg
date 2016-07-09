import {TrackComponent} from './components/trackComponent';
import {ISoundService} from './ISoundService';
import { SoundService } from './services/soundService';
import {Sounder} from './sounder';

import { Component } from '@angular/core';



@Component({
  selector: 'soundmixer',
  templateUrl: 'app/templates/soundmixer.html', 
  providers: [SoundService],
  directives: [TrackComponent] 
  
})


export class AppComponent {

    sounds: Sounder[]; 

    constructor ( soundService: SoundService )
    {
      this.sounds = soundService.sounders;
    } 

    
 }