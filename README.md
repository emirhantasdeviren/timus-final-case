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

- `GET /api/v1/factories`: Retrieve a list of all factories.
- `GET /api/v1/factories/:id`: Retrieve details of a specific factory.
- `POST /api/v1/factories`: Create a new factory.
- `DELETE /api/v1/factories/:id`: Delete a factory.

### Factory Detail Endpoints

- `GET /api/v1/factory-details`: Retrieve a list of all factory details.
- `GET /api/v1/factory-details/:id`: Retrieve details of a specific factory detail record.
- `POST /api/v1/factory-details`: Create a new factory detail record.
- `DELETE /api/v1/factory-details/:id`: Delete a factory detail record.
