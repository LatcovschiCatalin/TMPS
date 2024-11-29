import { Wallet } from '../models';

export class WalletFactory {
    private wallets: Map<string, Wallet> = new Map();

    getWallet(walletId: string): Wallet {
        if (!this.wallets.has(walletId)) {
            throw new Error("Wallet not found!");
        }
        return this.wallets.get(walletId)!;
    }

    createWallet(walletId: string, currencyType: string, balance: number): Wallet {
        const wallet = new Wallet(walletId, currencyType, balance);
        this.wallets.set(walletId, wallet);
        return wallet;
    }
}
