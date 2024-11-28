# Cryptocurrency Trading Platform - Advanced Structural Design Patterns

## Author

**Latcovschi Catalin FAF-221**

## Overview

This project extends a cryptocurrency trading platform by integrating structural design patterns to optimize the
composition of objects and system architecture. The focus on these patterns enhances scalability, flexibility, and
prepares the platform for real-world trading scenarios.

## Implemented Design Patterns

The following structural design patterns have been implemented to enhance the system's architecture:

1. **Adapter**: Integrates external payment services with our trading system, enabling smooth transaction processing
   with incompatible interfaces.
2. **Bridge**: Separates the abstraction of transaction processing from its implementation, allowing for the flexible
   handling of different asset types such as cryptocurrencies and fiat currencies.
3. **Facade**: Provides a simplified interface to complex system operations, facilitating user interactions for trading,
   balance checks, and transaction management.
4. **Composite**: Manages groups of similar objects like transactions and wallets uniformly, streamlining operations
   such as bulk processing and updates.
5. **Decorator**: Adds new functionalities to objects dynamically without altering their structures, ideal for
   performance monitoring and logging.
6. **Proxy**: Controls access to sensitive components such as user wallets and transaction details, enhancing the
   security of the platform.

## Multithreaded Trading Bot

A multithreaded trading bot is implemented to automate trade executions, showcasing the robustness of the platform in
handling concurrent transactions efficiently.

## Work Process

### Design and Planning

- Selected appropriate structural design patterns to improve object creation, efficiency, and scalability.
- Defined the interactions and roles of primary components including `Wallet`, `Transaction`, `CryptoAsset`,
  and `ExchangePlatform`.

### Implementation

Each design pattern was meticulously implemented to address specific system needs:

- **Adapters** for seamless external API integration.
- **Bridge** for flexible transaction processing.
- **Facade** for simplified user operations.
- **Composite** for efficient management of group operations.
- **Decorator** for enhanced transaction functionalities.
- **Proxy** for secured access to core components.

### Testing and Validation
- Ensured all design patterns functioned as intended under stress conditions facilitated by a multithreaded trading bot.

### Setup Instructions

1. Clone this repository:
   ```bash
   git clone 
   cd lab1/src
2. Compile and run the main application:
   ```bash
   npx tsc
   node main.js

### Example Usage

1. Execute trades through the Facade interface.
2. Utilize the Composite pattern for managing bulk transactions.
3. Secure transaction details using the Proxy pattern.

### Conclusion

The integration of structural design patterns has substantially enhanced the platform's architectural robustness,
allowing for scalable, secure, and efficient cryptocurrency trading. Future enhancements will focus on API integrations
and real-time analytics to further improve the platform's functionality and user experience.