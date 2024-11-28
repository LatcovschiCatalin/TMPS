"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ethereum = exports.Bitcoin = exports.CryptoAsset = void 0;
class CryptoAsset {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    displayAssetDetails() {
        console.log(`Asset: ${this.name}, Current Value: $${this.value}`);
    }
}
exports.CryptoAsset = CryptoAsset;
class Bitcoin extends CryptoAsset {
    constructor(value) {
        super("Bitcoin", value);
    }
}
exports.Bitcoin = Bitcoin;
class Ethereum extends CryptoAsset {
    constructor(value) {
        super("Ethereum", value);
    }
}
exports.Ethereum = Ethereum;
