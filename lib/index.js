"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidMyanmarNRC = void 0;
// src/index.ts
function isValidMyanmarNRC(nrc) {
    const regex = /^([1-9][0-9]{0,2})\/([A-Za-z]{1,6})\([A-Za-z]\)([0-9]{6})$/;
    return regex.test(nrc);
}
exports.isValidMyanmarNRC = isValidMyanmarNRC;
