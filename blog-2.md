# 📘 Reducing Complexity with OOP Concepts in TypeScript

## Introduction

Object-Oriented Programming (OOP) in TypeScript is a programming approach that organizes code into objects and classes. It helps for writing code easier to maintain, reduces duplication, and improves project structure.

## Mastering the Four Pillars of OOP in TypeScript:

TypeScript supports important OOP concepts such as:

- Inheritance
- Polymorphism
- Abstraction
- Encapsulation

### Inheritance:

Inheritance allows one class to reuse properties and methods from another class.

### Benefits:

- Reduces code duplication
- Improves reusability
- Creates cleaner structure

```ts
class Animal {
  makeSound(): void {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }
}
```

The Dog class inherits behavior from Animal.

### Polymorphism:

Polymorphism allows different classes to use the same method name with different behaviors.

### Benefits:

- Makes code flexible
- Simplifies large systems
- Improves maintainability

```ts
class Shape {
  draw(): void {
    console.log("Drawing shape");
  }
}

class Circle extends Shape {
  draw(): void {
    console.log("Drawing circle");
  }
}
```

Both classes use draw(), but behave differently.

### Abstraction:

Abstraction hides complex implementation details and only shows essential features.

### Benefits:

- Reduces complexity
- Makes code easier to use
- Focuses on important behavior

```ts
abstract class Vehicle {
  abstract start(): void;
}

class Car extends Vehicle {
  start(): void {
    console.log("Car started");
  }
}
```

The user only knows that vehicles can start() without worrying about internal details.

### Encapsulation

Encapsulation is the process of combining data and related methods inside a class while controlling access to certain properties using access modifiers.

### Benefits:

- Protects data from unwanted changes
- Keeps logic organized
- Reduces bugs

```ts
class BankAccount {
  private _balance: number = 0;

  deposit(amount: number): void {
    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }
}
```

Here, balance cannot be changed directly from outside the class.

## Conclusion

The four pillars of OOP help developers build structured and scalable TypeScript applications. Together, they reduce complexity, improve code organization, encourage reusability, and make large projects easier to maintain.
