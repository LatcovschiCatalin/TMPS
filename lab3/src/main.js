"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = require("./factory");
const models_1 = require("./models");
const utils_1 = require("./utils");
const domain_1 = require("./domain");
class Transaction extends domain_1.TransactionProcessor {
    process() {
        console.log("Starting transaction processing...");
        this.implementation.execute();
    }
}
function main() {
    const bitcoin = factory_1.CryptoFactory.createCryptoAsset('Bitcoin', 50000);
    const ethereum = factory_1.CryptoFactory.createCryptoAsset('Ethereum', 2500);
    const walletFactory = new factory_1.WalletFactory();
    const wallet1 = walletFactory.createWallet('wallet1', 'BTC', 1000);
    const wallet2 = walletFactory.createWallet('wallet2', 'ETH', 500);
    const wallet3 = models_1.Wallet.builder().setId('wallet3').setCurrencyType('BTC').setBalance(200).build();
    displayWalletTable([wallet1, wallet2, wallet3]);
    const exchange = utils_1.ExchangePlatform.getInstance();
    console.log('\nExchange platform instance created.\n');
    const transaction1 = factory_1.TransactionPool.acquireTransaction(wallet1, wallet2, bitcoin, 150);
    transaction1.displayTransactionDetails();
    factory_1.TransactionPool.releaseTransaction(transaction1);
    const transaction2 = factory_1.TransactionPool.acquireTransaction(wallet3, wallet1, ethereum, 100);
    transaction2.displayTransactionDetails();
    factory_1.TransactionPool.releaseTransaction(transaction2);
    const cryptoTransaction = new Transaction(new domain_1.CryptoTransaction());
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
function displayWalletTable(wallets) {
    console.table(wallets.map(wallet => ({
        ID: wallet.id,
        Currency: wallet.currencyType,
        Balance: wallet.balance
    })));
}
function updateWalletBalances(wallets, transactions) {
    transactions.forEach(transaction => {
        const wallet = wallets.find(w => w.id === transaction.wallet.id);
        if (wallet)
            wallet.balance += transaction.amount;
    });
}
main();
