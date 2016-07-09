import {Sounder} from './sounder';

export interface ISoundService {
    sounders(): Sounder[];
}
