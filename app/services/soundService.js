"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var sounder_1 = require('./../sounder');
var SoundService = (function () {
    function SoundService() {
        this.sounds = [];
        this.soundUrls = [
            "app/sounds/Gg Web Atmos Loop 1.mp3",
            "app/sounds/Gg Web Atmos Loop 2.mp3",
            "app/sounds/Gg Web Sting 1.mp3",
            "app/sounds/Gg Web Sting 2.mp3",
            "app/sounds/Gg Web Sting 3.mp3",
            "app/sounds/Gg Web Sting 4.mp3"
        ];
        for (var index = 0; index < this.soundUrls.length; index++) {
            var sounder = new sounder_1.Sounder(this.soundUrls[index]);
            this.sounds.push(sounder);
        }
    }
    Object.defineProperty(SoundService.prototype, "sounders", {
        /**
         * get the sounders
         */
        get: function () {
            return this.sounds;
        },
        enumerable: true,
        configurable: true
    });
    SoundService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SoundService);
    return SoundService;
}());
exports.SoundService = SoundService;
//# sourceMappingURL=soundService.js.map