import {WalletFactory} from '../factory';
import {CryptoTransaction, Transaction, TransactionProcessor} from '../domain';

export class TradingFacade {
    constructor(
        private walletManager: WalletFactory,
        private transactionManager: TransactionProcessor
    ) {}

    executeTrade(fromWalletId: string, toWalletId: string, asset: string, amount: number): void {
        const fromWallet = this.walletManager.getWallet(fromWalletId);
        const toWallet = this.walletManager.getWallet(toWalletId);
        const transaction = new Transaction(new CryptoTransaction());
        transaction.process();
        console.log(`Trade executed from ${fromWalletId} to ${toWalletId} for ${amount} ${asset}`);
    }
}
