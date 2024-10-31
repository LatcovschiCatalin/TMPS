import { CryptoFactory, TransactionPool } from './domain/factory';
import { Wallet } from './domain/models';
import { ExchangePlatform } from './client/utils';

function main() {
    // Initialize assets
    const bitcoin = CryptoFactory.createCryptoAsset('Bitcoin', 50000);
    const ethereum = CryptoFactory.createCryptoAsset('Ethereum', 2500);

    // Create wallets
    const wallet1 = Wallet.builder().setId('wallet1').setCurrencyType('BTC').setBalance(1000).build();
    const wallet2 = Wallet.builder().setId('wallet2').setCurrencyType('ETH').setBalance(500).build();
    const wallet3 = Wallet.builder().setId('wallet3').setCurrencyType('BTC').setBalance(200).build();

    // Display wallet table
    displayWalletTable([wallet1, wallet2, wallet3]);

    // Use singleton ExchangePlatform
    const exchange = ExchangePlatform.getInstance();
    console.log('\nExchange platform instance created.\n');

    // Perform transactions
    const transaction1 = TransactionPool.acquireTransaction(wallet1, wallet2, bitcoin, 150);
    transaction1.displayTransactionDetails();
    TransactionPool.releaseTransaction(transaction1);

    const transaction2 = TransactionPool.acquireTransaction(wallet3, wallet1, ethereum, 100);
    transaction2.displayTransactionDetails();
    TransactionPool.releaseTransaction(transaction2);

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

// Helper function to update wallet balances based on transactions
function updateWalletBalances(wallets: Wallet[], transactions: { wallet: Wallet; amount: number }[]): void {
    transactions.forEach(transaction => {
        const wallet = wallets.find(w => w.id === transaction.wallet.id);
        if (wallet) wallet.balance += transaction.amount;
    });
}

main();