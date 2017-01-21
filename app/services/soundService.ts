import  ISoundService from './../ISoundService';
import { Injectable } from '@angular/core';
import { Sounder } from './../sounder';





@Injectable() 
export class SoundService implements ISoundService {

    private sounds: Sounder[] = [];
   
    private soundUrls = [
        "app/sounds/DRUM_LOOP.mp3",
        "app/sounds/GPAD_LOOP.mp3",
        "app/sounds/HBVX_LOOP.mp3",
        "app/sounds/GTXT_LOOP.mp3",
        "app/sounds/PERC_LOOP.mp3",
        "app/sounds/STRG_LOOP.mp3",
        "app/sounds/TEMP_LOOP_1.mp3",
        "app/sounds/TEMP_LOOP_2.mp3"

        // "app/sounds/Gg Web Atmos Loop 1.mp3",
        // "app/sounds/Gg Web Atmos Loop 2.mp3",
        // "app/sounds/Gg Web Sting 1.mp3",
        // "app/sounds/Gg Web Sting 2.mp3", 
        // "app/sounds/Gg Web Sting 3.mp3", 
        // "app/sounds/Gg Web Sting 4.mp3",
        // "app/sounds/Gg Ohw.mp3"
    ];

    constructor () {
        for (var index = 0; index < this.soundUrls.length; index++) {
            var sounder = new Sounder(this.soundUrls[index]);
            this.sounds.push(sounder);            
        }
    }

    /**
     * get the sounders
     */
    public get sounders(): Sounder[] {
        return this.sounds;
    }

}

