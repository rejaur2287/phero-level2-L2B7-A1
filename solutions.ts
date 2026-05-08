//* Solution-1:
const filterEvenNumbers = (arr: number[]): number[] =>
  arr.filter((elem) => elem % 2 === 0);

//* Solution-2:
const reverseString = (text: string): string =>
  text.split("").reverse().join("");

//* Solution-3
type StringOrNumber = string | number;
const checkType = (param1: StringOrNumber) => {
  if (typeof param1 === "number") {
    return "Number";
  } else {
    return "String";
  }
};

//* Solution-4
const getProperty = <T>(object: T, key: keyof T) => {
  return object[key];
};

// * Solution-5
interface IBook {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: IBook) => {
  return { ...book, isRead: true };
};

// * Solution-6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}, Grade:${this.grade}'`;
  }
}
