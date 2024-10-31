import {Transaction} from '../../client/utils';
import {CryptoAsset, Wallet} from '../models';

export class TransactionPool {
    private static availableTransactions: Transaction[] = [];

    static acquireTransaction(
        from: Wallet,
        to: Wallet,
        asset: CryptoAsset,
        amount: number
    ): Transaction {
        if (this.availableTransactions.length === 0) {
            return new Transaction(from, to, asset, amount);
        }
        const transaction = this.availableTransactions.pop()!;
        transaction.reset(from, to, asset, amount);
        return transaction;
    }

    static releaseTransaction(transaction: Transaction): void {
        this.availableTransactions.push(transaction);
    }
}