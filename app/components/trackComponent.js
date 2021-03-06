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
var TrackComponent = (function () {
    function TrackComponent(_ngZone) {
        this._ngZone = _ngZone;
        this.elementHeight = 0;
    }
    TrackComponent.prototype.ngOnInit = function () {
        this.sounder.stop();
    };
    Object.defineProperty(TrackComponent.prototype, "volume", {
        get: function () {
            return this.sounder.volume;
        },
        enumerable: true,
        configurable: true
    });
    TrackComponent.prototype.adjustMagnitde = function (e) {
        var _this = this;
        // if(!!! this.sounder.isPlaying()) { return false } ;
        if (e && e.type === "mousedown") {
            this.mouseIsDown = true;
        }
        if (e && e.type != "mousedown") {
            this.mouseIsDown = false;
            return false;
        }
        this.sounder.setVolume(this.sounder.volume - 0.01);
        if (this.sounder.volume < 1 && this.mouseIsDown === true) {
            core.delay(30).then(function () {
                return _this._ngZone.run(function () { _this.adjustMagnitde(null); });
            });
        }
        ;
        return false;
    };
    TrackComponent.prototype.resetVolume = function () {
        this.sounder.setVolume(1.0);
    };
    TrackComponent.prototype.togglePlay = function () {
        return this.sounder.togglePlay();
    };
    TrackComponent.prototype.isOverride = function () {
        return this.sounder.playbackOverridden;
    };
    TrackComponent.prototype.overridePlayback = function (shouldOverridePlayback) {
        if (!!!this.sounder.isPlaying()) {
            this.sounder.overridePlayback(shouldOverridePlayback);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', sounder_1.Sounder)
    ], TrackComponent.prototype, "sounder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TrackComponent.prototype, "dataindex", void 0);
    TrackComponent = __decorate([
        core_1.Component({
            selector: 'track',
            templateUrl: 'app/templates/track.html'
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], TrackComponent);
    return TrackComponent;
}());
exports.TrackComponent = TrackComponent;
//# sourceMappingURL=trackComponent.js.map