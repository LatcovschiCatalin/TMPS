"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoFactory = void 0;
const models_1 = require("../models");
class CryptoFactory {
    static createCryptoAsset(type, value) {
        switch (type) {
            case 'Bitcoin':
                return new models_1.Bitcoin(value);
            case 'Ethereum':
                return new models_1.Ethereum(value);
            default:
                throw new Error('Unsupported crypto asset type');
        }
    }
}
exports.CryptoFactory = CryptoFactory;
