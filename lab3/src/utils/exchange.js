"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangePlatform = void 0;
class ExchangePlatform {
    constructor() { }
    static getInstance() {
        if (!ExchangePlatform.instance) {
            ExchangePlatform.instance = new ExchangePlatform();
        }
        return ExchangePlatform.instance;
    }
}
exports.ExchangePlatform = ExchangePlatform;
