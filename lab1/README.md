# Cryptocurrency Trading Platform - Advanced Design Patterns

## Author: Latcovschi Catalin FAF-221

### Overview

This project simulates a cryptocurrency trading platform designed with a focus on creational design patterns to enable
efficient object management and scalability. Additional patterns and multithreaded operations simulate a real-world
trading environment, enhancing both performance and resource utilization.

### Design Patterns Implemented

1. **Factory Method**: Used to create different cryptocurrency assets, allowing flexibility in asset management.
2. **Abstract Factory**: Creates centralized and decentralized exchanges, each with unique configurations to simulate
   varied trading environments.
3. **Builder**: Configures wallets with custom properties, enabling complex wallet setups for each user.
4. **Prototype**: Clones popular crypto assets like Bitcoin and Ethereum for efficiency in creating frequently used
   configurations.
5. **Singleton**: Manages single instances of critical services such as `ExchangePlatform` and `BalanceChecker`,
   ensuring centralized management.
6. **Object Pool**: Reuses transaction objects to handle high trading volumes efficiently by minimizing object creation.
7. **Lazy Initialization**: Delays exchange factory initialization until needed, optimizing memory and processing.

### Multithreaded Trading Bot

A simulated trading bot automates trade execution to demonstrate real-world trading dynamics. The bot uses
multithreading to perform concurrent transactions between wallets, effectively testing the robustness of the transaction
pool and object reuse mechanisms.

### Work Process

1. **Design and Planning**:
    - Analyzed requirements to select appropriate design patterns, ensuring each pattern would improve object creation,
      efficiency, and overall project scalability.
    - Defined primary components: `Wallet`, `Transaction`, `CryptoAsset`, and `ExchangePlatform`, outlining interactions
      and roles for each.
    - Established a project structure with separate modules for client operations, domain models, and factory methods.

2. **Implementation**:
    - Implemented the **Factory Method** to create different cryptocurrency assets dynamically.
    - Used **Abstract Factory** to establish different exchange types, providing unique setups for centralized and
      decentralized trading.
    - Developed the **Builder Pattern** for custom wallet creation, allowing users to configure wallets with specific
      balances and asset types.
    - **Prototype Pattern** was used to clone crypto assets, reducing resource use for commonly used configurations like
      Bitcoin and Ethereum.
    - **Singleton Pattern** ensured single instances of the `ExchangePlatform` and `BalanceChecker` for managing
      transactions and checking balances.
    - Integrated **Object Pooling** for transaction reuse, optimizing memory management under high trading volumes.
    - **Lazy Initialization** delayed the creation of exchange factories, minimizing unnecessary memory use.

3. **Testing and Validation**:
    - Ran tests to confirm that each design pattern worked as expected, especially under high-volume trading conditions.
    - Implemented a **Multithreaded Trading Bot** to simulate concurrent transactions, validating the efficiency of the
      object pool and transaction management.

### Setup

1. Clone this repository:
   ```bash
   git clone 
   cd lab1/src
2. Compile and run the main application:
   ```bash
   npx tsc
   node main.js

### Example Usage

1. Initialize assets and wallets through `ExchangePlatformManager`.
2. Run multiple `TradingBot` instances to simulate concurrent trading in the system.
3. Use `BalanceChecker` to verify wallet balances and monitor transaction outcomes.

### Conclusion

This cryptocurrency trading platform effectively demonstrates the power of creational design patterns in developing
scalable, efficient applications. By incorporating design patterns like Factory Method, Builder, Prototype, and Object
Pool, the project minimizes resource usage and supports high-volume, concurrent transactions. The multithreaded trading
bot successfully tests the efficiency of these patterns, showcasing the system’s ability to handle real-world trading
conditions. Future enhancements, such as adding APIs and observer notifications, would further improve the platform’s
functionality and user experience, making it a robust foundation for cryptocurrency trading simulation.