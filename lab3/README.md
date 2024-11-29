# Cryptocurrency Trading Platform - Advanced Design Patterns

## Author

**Latcovschi Catalin FAF-221**

## Overview

This project extends a cryptocurrency trading platform by integrating both structural and behavioral design patterns to
optimize the composition of objects and enhance system architecture. The focus on these patterns enhances scalability,
flexibility, and prepares the platform for real-world trading scenarios while increasing the flexibility in
communication between software entities.

## Implemented Design Patterns

### Structural Design Patterns

These patterns have been implemented to enhance the system's architecture:

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

### Behavioral Design Patterns

These patterns are utilized to improve communication among different software entities:

1. **Observer**: Automates notification across different components upon state changes, crucial for real-time updates in
   trading data.
2. **Strategy**: Allows dynamic changes in the trading algorithm based on fluctuating market conditions, enhancing
   adaptability and performance.
3. **Command**: Encapsulates all details of a transaction into standalone commands, which simplifies transaction
   execution, undo or redo operations, and makes extension simpler.
4. **Mediator**: Centralizes complex communications and control between various system objects to prevent the components
   from referring to each other explicitly, thus decoupling them and increasing flexibility.

## Multithreaded Trading Bot

A multithreaded trading bot is implemented to automate trade executions, showcasing the robustness of the platform in
handling concurrent transactions efficiently.

## Work Process

### Design and Planning

- Selected appropriate design patterns to improve object creation, efficiency, scalability, and inter-component
  communication.
- Defined the interactions and roles of primary components including `Wallet`, `Transaction`, `CryptoAsset`,
  and `ExchangePlatform`.

### Implementation

Each design pattern was meticulously implemented to address specific system needs:

- **Structural Patterns** such as Adapters for API integration and Composite for group management.
- **Behavioral Patterns** like Observer for real-time updates and Strategy for adaptive trading decisions.

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
4. Dynamic strategy adjustments using the Strategy pattern during market volatility.

### Conclusion

The integration of both structural and behavioral design patterns has substantially enhanced the platform's
architectural robustness and communication efficiency, allowing for scalable, secure, and efficient cryptocurrency
trading. Future enhancements will focus on API integrations and real-time analytics to further improve the platform's
functionality and user experience.