import {ISoundService} from './../ISoundService';
import { Injectable } from '@angular/core';
import { Sounder } from './../sounder';





@Injectable() 
export class SoundService {
    private sounds: Sounder[] = [];
    constructor() {
        for (var index = 0; index < 5; index++) {
            var sounder = new Sounder('test' + index);
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

