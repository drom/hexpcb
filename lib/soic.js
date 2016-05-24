'use strict';

function soic (n) {
    var params = {
        pins = n | 8,
        pitch = 1.27,
        width = 4.0,
        pad = {
            width: 0.58,
            length: 1.18
        },
        rot: 0
    };
    var res = ['g'];
    var obj = {
        pad: {
            width: function (n) {
                params.pad.width = n;
                return obj;
            }
        },
        rot: function (n) {
            params.rot = n;
            return obj;
        },
        pins: function (n) {
            params.pins = n;
            return obj;
        },
        pitch: function (n) {
            params.pitch = n;
            return obj;
        },
        wide: function () {
            params.width = 7.6;
            return obj;
        },
        gen: function gen () {
            return res;
        }
    };
    return obj;
}

module.exports = soic;
