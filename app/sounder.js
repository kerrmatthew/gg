"use strict";
var Sounder = (function () {
    function Sounder(soundUrl) {
        this.playing = false;
        this.volume = 1.0;
        this.url = soundUrl;
        this.howler = new Howl({
            urls: [this.url],
            autoplay: false,
            loop: true,
            volume: this.volume
        });
    }
    Sounder.prototype.play = function () {
        if (this.playbackOverridden) {
            this.playbackOverridden = false;
            this.playing = true;
        }
        else {
            this.playing = true;
            this.howler.fadeIn(this.volume, 500);
        }
    };
    Sounder.prototype.stop = function () {
        this.howler.fadeOut(0, 500);
        this.playing = false;
    };
    Sounder.prototype.setVolume = function (volume) {
        this.volume = volume;
        this.howler.volume(this.volume);
    };
    Sounder.prototype.togglePlay = function () {
        if (this.playing) {
            this.stop();
        }
        else {
            this.play();
        }
        return this.playing;
    };
    Sounder.prototype.overridePlayback = function (shouldOverridePlayback) {
        if (shouldOverridePlayback) {
            this.playbackOverridden = true;
            this.howler.fadeIn(this.volume, 500);
        }
        else {
            this.playbackOverridden = false;
            if (this.playing === false) {
                this.stop();
            }
        }
    };
    return Sounder;
}());
exports.Sounder = Sounder;
//# sourceMappingURL=sounder.js.map