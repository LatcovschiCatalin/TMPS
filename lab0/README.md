# E-commerce Platform with Products and Services

## Author: Latcovschi Catalin FAF-221

### Overview

This project simulates an e-commerce platform designed to handle the sale of **products** and **services**. The platform
is structured around **SOLID principles** and utilizes **object-oriented design** to create a scalable and maintainable
application. The focus is on building a system that allows for flexible management of items, maintaining code clarity
and extensibility.

## SOLID Principles Implemented

1. **Single Responsibility Principle (SRP)**: Each class has a specific responsibility. For instance, `ProductManager`
   and `ServiceManager` handle product and service operations independently.
2. **Open/Closed Principle (OCP)**: The design allows for easy addition of new item types without modifying existing
   code, making it extensible and adaptable to future requirements.

## Work Process

### 1. Design and Planning

- **Objective**: To create a system capable of managing various item types, including products and services, while
  ensuring clear separation of responsibilities.
- **Components**: Defined primary components, including `Product`, `Service`, `ProductManager`, and `ServiceManager`.
- **Structure**: Created interfaces (`ProductService` and `ServiceService`) to provide flexibility in managing different
  item types.

### 2. Implementation

- **Product and Service Types**: Defined `Product` and `Service` types, encapsulating common attributes and behaviors
  for each.
- **Product and Service Managers**: Implemented separate managers (`ProductManager` and `ServiceManager`) for handling
  CRUD operations, maintaining adherence to SRP.
- **Extensibility**: Designed the platform for future expansion to include additional item types without modifying
  existing code, aligning with OCP.

### 3. Testing and Validation

- **Data Addition**: Added sample products and services to test system functionality with different item types.
- **Listing and Display**: Utilized `console.table` to format products and services for clear output in the console.
- **Extensibility**: Simulated adding new items, confirming that the platform easily accommodates future expansions.

### Setup

1. Clone this repository:
   ```bash
   git clone 
   cd lab1/src
2. Init ts:
   ```bash
   npm init -y
   npm install typescript --save-dev
   npx tsc --init
3. Compile and run the main application:
   ```bash
   npx tsc
   node main.js

### Conclusion

This e-commerce platform illustrates the effective use of SOLID principles for managing an inventory of products and
services. The structure supports easy scalability and modularity, adhering to SRP and OCP. Future improvements could
include adding new item types, integrating a user interface, and implementing additional design patterns to enhance the
functionality and user experience.