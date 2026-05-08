# 📘 TypeScript Generics

## Introduction

Generics in typescript can be simply said to type generalization. It allows us to write reusable code along with type safety. It helps us to write flexible functions for different data types.

## Why Generics Matter in TypeScript:

### Problems Without Generics:

Suppose you want a function that returns a value.

For numbers:

```ts
function getNumber(value: number): number {
  return value;
}
```

For strings:

```ts
function getString(value: string): string {
  return value;
}
```

Now imagine doing this for:

- booleans
- arrays
- objects

This creates repetitive code.

### Solution With Generics:

Generics let you create one reusable function.

```ts
function getValue<T>(value: T): T {
  return value;
}
```

Now it works for any type.

Example:

```ts
getValue<string>("Hello");
getValue<number>(10);
getValue<boolean>(true);
```

## Conclusion

At last we can say that generics are simply reusable boxes with same design, different contents, still properly labeled.
