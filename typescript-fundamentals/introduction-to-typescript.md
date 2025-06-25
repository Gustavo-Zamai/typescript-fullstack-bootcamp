# 📘 TypeScript Fundamentals
This repository contains fundamental concepts of TypeScript with practical code examples. It serves as a quick reference and a learning resource for beginners and intermediate developers.

## 📑 Table of Contents

- [Variables and Types](#Variables-and-Types)
- [Objects and Interfaces](#objects-and-interfaces)
- [Conditionals and Loops](#conditionals-and-loops)
- [Arrays](#Arrays)


## 📦 Variables and Types
### 🧮 Variables
```ts
var a = "a";     // global scope, not recommended due to safety concerns
let b = "b";     // block-scoped, mutable
const c = "c";   // block-scoped, immutable
```
### 🏷️ Types
#### Primitive Types
```ts
Copiar
Editar
let b: string = "b";
let n: number = 2;
let x: boolean = true;
```
#### Union Types
```ts
Copiar
Editar
// Not ideal for most use cases, but valid
let m: string | number = 2;
m = "name";
```
## 🧱 Objects and Interfaces
### 🧍 Objects Without Types
```ts
Copiar
Editar
const person = {
  name: "Gustavo",
  age: 29,
};
```

### 🧾 Interfaces
```ts
Copiar
Editar
interface Person {
  name: string;
  age: number;
  profession?: string; // optional property
}

const person: Person = {
  name: "Gustavo",
  age: 29,
};

const anotherPerson: Person = {
  name: "Wania",
  age: 23,
  profession: "Teacher",
};

const peopleArray: Person[] = [person, anotherPerson];
```

## 🧠 Conditionals and Loops
### 🔀 If-Else Statement
```ts
const num: number = 15;

if (num > 15) {
  console.log("Number is greater than 15");
} else {
  console.log("Number is less than or equal to 15");
}
```
### 🔁 Conditional with Object Literal
```ts
const typeUser = {
  admin: "Welcome, ADMIN",
  student: "You are a student",
  viewer: "View-only access",
};

function validateUser(user: string) {
  console.log(typeUser[user as keyof typeof typeUser]);
}

const currentUser = "admin";
validateUser(currentUser); // Output: Welcome, ADMIN
```
### 🔄 Loops
```ts
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0,1,2,3,4
}

// While loop
let n: number = 2;
while (n < 6) {
  console.log(n); // Output: 2,3,4,5
  n++;
}
```
## 📚 Arrays
```ts
const array: Array<number> = [1, 2, 3, 4];
const stringArray: string[] = ["a", "b", "c"];

// Array length
console.log(stringArray.length); // Output: 3

// Add new element
array.push(5); // Adds 5 to the end

// Remove last element
array.pop(); // Removes the last element

// Find element
const found = array.find(num => num > 2); // Returns 3 (first match)

// forEach
array.forEach(num => {
  if (num > 2) {
    console.log(num); // Output: 3, 4
  }
});

// map
array.map(num => console.log(num)); // Outputs each element

// Note: map is better for asynchronous operations than forEach
```
## 🚀 Notes
This repository is designed to help reinforce TypeScript basics and can serve as a personal cheatsheet.

More advanced topics like generics, enums, and async/await will be added in future updates.