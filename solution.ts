type FormatValueType = string | number | boolean;
type FormatReturnValue = string | number | boolean;

function formatValue(value: FormatValueType): FormatReturnValue {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

type LengthInput = string | any[];

function getLength(value: LengthInput): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  throw new Error("Invalid input type");
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);

interface RatedItem {
  title: string;
  rating: number;
}

function filterByRating(items: RatedItem[]): RatedItem[] {
  return items.filter((item) => item.rating >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

const users: User[] = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  const availability = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

function getUniqueValues<T extends string | number>(arr1: T[], arr2: T[]): T[] {
  const result: T[] = [];
  const seen: { [key: string]: boolean } = {};

  const addValues = (arr: T[]) => {
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      const key = String(value);
      if (!seen[key]) {
        seen[key] = true;
        result[result.length] = value;
      }
    }
  };

  addValues(arr1);
  addValues(arr2);

  return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  const totalPrices = products.map((p) => {
    const base = p.price * p.quantity;
    if (p.discount !== undefined && p.discount > 0) {
      const discountAmount = base * (p.discount / 100);
      return base - discountAmount;
    }
    return base;
  });

  return totalPrices.reduce((sum, val) => sum + val, 0);
}
const products: Product[] = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
