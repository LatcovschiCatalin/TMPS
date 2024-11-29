"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletFactory = void 0;
const models_1 = require("../models");
class WalletFactory {
    constructor() {
        this.wallets = new Map();
    }
    getWallet(walletId) {
        if (!this.wallets.has(walletId)) {
            throw new Error("Wallet not found!");
        }
        return this.wallets.get(walletId);
    }
    createWallet(walletId, currencyType, balance) {
        const wallet = new models_1.Wallet(walletId, currencyType, balance);
        this.wallets.set(walletId, wallet);
        return wallet;
    }
}
exports.WalletFactory = WalletFactory;
