# 🧱 Object-Oriented Programming in TypeScript
This section demonstrates how to use Object-Oriented Programming (OOP) concepts in TypeScript through practical code examples. Key concepts such as objects, classes, inheritance, encapsulation, and polymorphism are covered.

## 📑 Table of Contents
Objects

Classes

Constructor

Abstraction

Inheritance

Abstract Classes

Polymorphism

Visibility Modifiers

Readonly Modifier

## 🧍 Objects
```ts
const user = {
  name: "Gustavo",
  age: 29,
  showName() {
    console.log(this.name);
  },
};

const otherUser = {
  name: "Joao",
  age: 23,
  showName() {
    console.log(this.name);
  },
};

user.showName();        // Output: Gustavo
otherUser.showName();   // Output: Joao
```
## 🧪 Classes
```ts
class User {
  name: string = "Gustavo";
  age: number = 29;

  showName = () => {
    console.log(this.name);
  };
}

const user = new User();
user.showName(); // Output: Gustavo
```
### 🏗️ Constructor
```ts
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showName = () => {
    console.log(this.name);
  };
}

const user = new User("Gustavo", 29);
user.showName(); // Output: Gustavo

const otherUser = new User("Joao", 23);
otherUser.showName(); // Output: Joao
```
## 🧠 Abstraction
Abstraction means modeling real-world objects and defining relevant attributes and behaviors.

```ts
class Account {
  name: string;
  accountNumber: number;
  balance: number = 0;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = () => {
    console.log("Deposit made");
  };

  withdraw = () => {
    console.log("Withdraw executed");
  };

  getValue = () => {
    console.log(this.balance);
  };
}

const newAccount = new Account("Gustavo", 1);
console.log(newAccount);
```
## 🧬 Inheritance
Inheritance allows classes to share common logic and attributes.

```ts
class Admin extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }
}

const admin = new Admin("Gustavo", 5);
console.log(admin); // Inherits from Account
```
## 🧩 Abstract Classes
Abstract classes define a blueprint and cannot be instantiated directly.

```ts
abstract class Account {
  name: string;
  accountNumber: number;
  balance: number = 0;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = () => {
    console.log("You made a deposit into your account");
  };

  abstract withdraw(): void;

  getValue = () => {
    console.log(this.balance);
  };
}

class PeopleAccount extends Account {
  doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }

  withdraw = () => {
    console.log("Withdraw from PeopleAccount");
  };
}

const gustavoAccount = new PeopleAccount(555, "Gustavo", 775);
console.log(gustavoAccount);

class CompanyAccount extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  withdraw = () => {
    console.log("Withdraw from CompanyAccount");
  };

  getLoan = () => {
    console.log("You got a loan");
  };
}

const companyAccount = new CompanyAccount("Company01", 28);
console.log(companyAccount);
```
## 🔁 Polymorphism
Polymorphism allows method overriding in subclasses.

```ts
class CompanyAccount extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  // Method overriding
  deposit = (): number => {
    return 2;
  };

  withdraw = () => {
    console.log("Withdraw from CompanyAccount");
  };
}
```
## 🔒 Visibility Modifiers
public: Accessible from anywhere

private: Only accessible within the class

protected: Accessible in the class and subclasses

```ts
Copiar
Editar
abstract class Account {
  private name: string;
  accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): string => {
    this.name = name;
    return "New name saved";
  };

  getName = (): string => {
    return this.name;
  };

  deposit = () => {
    if (this.validateStatus()) {
      console.log("You made a deposit into your account");
    }
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return true;
    }

    throw new Error("Account inactivated");
  };
}

const account = new Account("Gustavo", 1); // Error: Cannot create instance of abstract class
```
## 🔏 Readonly Modifier
Used to define immutable properties (can be read, not modified).

```ts
abstract class Account {
  private name: string;
  readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getAccountNumber = (): number => {
    return this.accountNumber;
  };
}
```
#### 🧩 Best Practice: Organize your classes into separate files inside a classes/ directory. Use export and import to manage them for better maintainability and clarity.