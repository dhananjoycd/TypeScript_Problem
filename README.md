# &#x20;

## 1. Differences Between Interface and Type in TypeScript

### **Interface**

- বিশেষভাবে object structure ডিফাইন করার জন্য তৈরি।
- `extends` ব্যবহার করে বড় করা যায়।
- একই নামে একাধিক interface লিখলে merge হয়।

```ts
interface User {
  name: string;
  age: number;
}

interface User {
  address: string;
}
```

### **Type**

- শুধু object নয় — union, tuple, primitive সব ডিফাইন করা যায়।
- Extend করতে intersection (`&`) ব্যবহার হয়।
- একই নামে type alias তৈরি করা যায় না।

```ts
type User = {
  name: string;
  age: number;
};

type Admin = User & { role: string };
```

---

## 2. Use of `keyof` in TypeScript

`keyof` একটি object type-এর সব key-এর union তৈরি করে।

```ts
type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User; // "name" | "age" | "email"
```

### **Practical Example**

```ts
function getValue<T>(obj: T, key: keyof T) {
  return obj[key];
}

const p = { name: "Joy", age: 25 };

getValue(p, "name"); // Valid
getValue(p, "email"); // Error
```

### **Benefits**

- Object key ভুল লেখা প্রতিরোধ করে।
- Dynamic এবং type-safe ফাংশন তৈরি করা যায়।
