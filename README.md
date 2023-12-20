# Factory API

A factory REST API, built with NestJS, for managing factories and their details.
It has two main entities: `factory` and `factory_detail`.

## Entities

### Factory

Represents a factory, including its basic information.

- **Fields**:
  - `id` (integer): Unique identifier for the factory.
  - `name` (string): Name of the factory.
  - `subscriptionStart` (date): Start date of the subscription.
  - `subscriptionEnd` (date): End date of the subscription.
  - `employeeCount` (integer): Number of employees in the factory.
  - `free` (boolean): Indicates whether the factory has a free subscription.

### Factory Detail

Contains detailed information about a specific factory.

- **Fields**:
  - `id` (integer): Unique identifier for the detail record.
  - `department` (string): Department name within the factory.
  - `start` (time): Start time for the department's operation.
  - `end` (time): End time for the department's operation.
  - `cost` (numeric): Operational cost for the department.
  - `discount` (numeric): Discount applied to the cost.
  - `factoryId` (integer): Identifier for the associated factory.

## API Endpoints

### Factory Endpoints

- `GET /factories`: Retrieve a list of all factories.
- `GET /factories/:id`: Retrieve details of a specific factory.
- `POST /factories`: Create a new factory.
- `PUT /factories/:id`: Update an existing factory.
- `DELETE /factories/:id`: Delete a factory.

### Factory Detail Endpoints

- `GET /factory-details`: Retrieve a list of all factory details.
- `GET /factory-details/:id`: Retrieve details of a specific factory detail record.
- `POST /factory-details`: Create a new factory detail record.
- `PUT /factory-details/:id`: Update an existing factory detail record.
- `DELETE /factory-details/:id`: Delete a factory detail record.
