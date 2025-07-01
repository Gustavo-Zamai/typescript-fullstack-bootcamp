# 🏦 Simple Banking System with TypeScript
A TypeScript-based banking system simulating basic operations like deposits, withdrawals, loans, and VIP account benefits.
(Project developed for the FullStack TypeScript Bootcamp)

## 📂 Project Structure
```bash
src/  
├── class/  
│   ├── BankAccount.ts          # Abstract base class (core logic)  
│   ├── PersonAccount.ts        # Individual customer account  
│   ├── CompanyAccount.ts       # Business account (supports loans)  
│   └── BankAccountVip.ts       # VIP account (bonus deposits)  
└── app.ts   
```                  
## 🧩 Classes Overview
### 1. BankAccount (Abstract Base Class)
#### Properties:

- `name`: Account holder name (private)

- `accountNumber`: Unique ID (readonly)
 
- `balance`: Current balance (protected)
 
- `status`: Active/inactive flag (private)

#### Key Methods:

- `deposit(amount)`: Adds funds if account is active.
 
- `withdraw(amount)`: Deducts funds if balance suffices.
 
- `getBalance()`: Returns current balance.
 
- `validateStatus()`: Private method to check account status.

### 2. PersonAccount (Extends BankAccount)
#### Added Feature:

- `doc_id`: Personal document ID (e.g., CPF).

#### Usage Example:

```ts
const person = new PersonAccount(123456789, "Gustavo", 5, 100, true);  
person.deposit(50);  
console.log(person.getBalance()); // 150  
```
### 3. CompanyAccount (Extends BankAccount)
#### Added Feature:

- `getLoan(amount)`: Credits the account with a loan (if active).

#### Usage Example:

```ts
const company = new CompanyAccount("ACME Inc.", 123, 0, true);  
company.getLoan(1000);  
company.withdraw(500);  
console.log(company.getBalance()); // 500  
```
### 4. BankAccountVip (Extends BankAccount)
#### Added Feature:

- `deposit(amount)`: Adds +10 bonus to every deposit.

#### Usage Example:

```ts
const vip = new BankAccountVip("VIP User", 777, 0, true);  
vip.deposit(100);  
console.log(vip.getBalance()); // 110  
```
## 🚀 How to Run
Clone the repository:
```bash
git clone https://github.com/Gustavo-Zamai/typescript-fullstack-bootcamp.git
cd typescript-fullstack-bootcamp/projects/ts-bank-system
```

Install dependencies:
```bash
npm install
```
Run the project:
```bash
npm run start:watch
```

## ✅ Key Concepts Applied
- `OOP Principles`: Encapsulation (`private`/`protected`), Inheritance (`extends`), Abstraction.
 
- `TypeScript Features`: Abstract classes, readonly properties, type annotations.
 
- `Error Handling`: Validations for inactive accounts/insufficient funds.

### 📝 Notes
- To expand, consider adding:

    - Database persistence (e.g., JSON file).
    
    - REST API layer (Express.js).
     
    - Transaction history tracking.


#### Developed by Gustavo Zamai for the FullStack TypeScript Bootcamp.