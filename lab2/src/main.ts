import {CryptoFactory, TransactionPool, WalletFactory} from './factory';
import {Wallet} from './models';
import {ExchangePlatform} from './utils';
import {CryptoTransaction, TransactionProcessor} from './domain';

class Transaction extends TransactionProcessor {
    process(): void {
        console.log("Starting transaction processing...");
        this.implementation.execute();
    }
}

function main() {
    const bitcoin = CryptoFactory.createCryptoAsset('Bitcoin', 50000);
    const ethereum = CryptoFactory.createCryptoAsset('Ethereum', 2500);

    const walletFactory = new WalletFactory();
    const wallet1 = walletFactory.createWallet('wallet1', 'BTC', 1000);
    const wallet2 = walletFactory.createWallet('wallet2', 'ETH', 500);
    const wallet3 = Wallet.builder().setId('wallet3').setCurrencyType('BTC').setBalance(200).build();

    displayWalletTable([wallet1, wallet2, wallet3]);

    const exchange = ExchangePlatform.getInstance();
    console.log('\nExchange platform instance created.\n');

    const transaction1 = TransactionPool.acquireTransaction(wallet1, wallet2, bitcoin, 150);
    transaction1.displayTransactionDetails();
    TransactionPool.releaseTransaction(transaction1);

    const transaction2 = TransactionPool.acquireTransaction(wallet3, wallet1, ethereum, 100);
    transaction2.displayTransactionDetails();
    TransactionPool.releaseTransaction(transaction2);

    const cryptoTransaction = new Transaction(new CryptoTransaction());
    cryptoTransaction.process();

    console.log('\nUpdated Wallet Balances:');
    updateWalletBalances([wallet1, wallet2, wallet3], [
        { wallet: wallet1, amount: -150 },
        { wallet: wallet2, amount: 150 },
        { wallet: wallet3, amount: -100 },
        { wallet: wallet1, amount: 100 },
    ]);

    displayWalletTable([wallet1, wallet2, wallet3]);
}

// Helper function to display wallets as a table
function displayWalletTable(wallets: Wallet[]): void {
    console.table(wallets.map(wallet => ({
        ID: wallet.id,
        Currency: wallet.currencyType,
        Balance: wallet.balance
    })));
}

function updateWalletBalances(wallets: Wallet[], transactions: { wallet: Wallet; amount: number }[]): void {
    transactions.forEach(transaction => {
        const wallet = wallets.find(w => w.id === transaction.wallet.id);
        if (wallet) wallet.balance += transaction.amount;
    });
}

main();