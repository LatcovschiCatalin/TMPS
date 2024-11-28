"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradingFacade = void 0;
const domain_1 = require("../domain");
class TradingFacade {
    constructor(walletManager, transactionManager) {
        this.walletManager = walletManager;
        this.transactionManager = transactionManager;
    }
    executeTrade(fromWalletId, toWalletId, asset, amount) {
        const fromWallet = this.walletManager.getWallet(fromWalletId);
        const toWallet = this.walletManager.getWallet(toWalletId);
        const transaction = new domain_1.Transaction(new domain_1.CryptoTransaction());
        transaction.process();
        console.log(`Trade executed from ${fromWalletId} to ${toWalletId} for ${amount} ${asset}`);
    }
}
exports.TradingFacade = TradingFacade;
