# 🔒 Readonly Arrays and Tuples

> **Topic:** TypeScript (Readonly Types)

---

# 🤔 What are Readonly Arrays and Tuples?

The `readonly` keyword tells TypeScript that an **array or tuple cannot be modified after it is created**.

This means you cannot:

* ❌ Change an existing value
* ❌ Add new values
* ❌ Remove values
* ❌ Sort or reverse the array

The restriction exists **only during TypeScript compilation**.

---

# 📝 Syntax

## Readonly Tuple

```ts
const readonlyTuple: readonly [string, number, boolean] = [
  "Kaushik",
  20,
  true,
];
```

## Readonly Array

```ts
const readonlyArray: readonly number[] = [
  1,
  2,
  3,
  4,
  5,
];
```

---

# ✏️ What happens if we try to modify it?

```ts
const numbers: readonly number[] = [1, 2, 3];

numbers[0] = 10;      // ❌ Error
numbers.push(4);      // ❌ Error
numbers.pop();        // ❌ Error
numbers.shift();      // ❌ Error
numbers.unshift(0);   // ❌ Error
```

TypeScript prevents all of these operations because the array is marked as `readonly`.

---

# 🧠 What happens behind the scenes?

One of the biggest misconceptions is that `readonly` freezes the array.

It **does not**.

TypeScript only checks your code **at compile time**.

Consider this code:

```ts
const numbers: readonly number[] = [1, 2, 3];
```

After TypeScript compilation:

```js
const numbers = [1, 2, 3];
```

Notice that the `readonly` keyword completely disappears.

The generated JavaScript is still a **normal array**.

---

# ⚠️ Important Difference

`readonly` **does not freeze** the array at runtime.

For example:

```ts
const numbers: readonly number[] = [1, 2, 3];
```

Compiles to:

```js
const numbers = [1, 2, 3];
```

If another JavaScript file receives this array, it can still modify it because JavaScript has **no knowledge** of TypeScript's `readonly`.

So:

* ✅ TypeScript protects you while writing code.
* ❌ JavaScript does not enforce `readonly` at runtime.

---

# 🧊 If you want real immutability...

If you want an array that **cannot be modified even at runtime**, use JavaScript's `Object.freeze()`.

```ts
const numbers = Object.freeze([1, 2, 3]);
```

Now JavaScript also prevents modifications (although `Object.freeze()` is shallow and does not deeply freeze nested objects).

---

# 🚀 Production Perspective

In large production applications, developers commonly use `readonly` for:

* 📦 API response types
* ⚙️ Configuration objects
* 🎨 Theme constants
* 📋 Fixed lookup tables
* ⚛️ React props and state types
* 📚 Shared data that should never be accidentally modified

This improves code safety and makes the codebase easier to maintain.

---

# 📚 Key Points

✅ `readonly` works for both arrays and tuples.

✅ You cannot modify elements or use mutating methods like `push()` or `pop()`.

✅ The restriction exists only in TypeScript's type system.

✅ After compilation, `readonly` is completely removed.

✅ The generated JavaScript array is still mutable.

✅ Use `Object.freeze()` if you need runtime immutability.

---

# 🎯 Remember

> **`readonly` = Compile-time protection (TypeScript)**
> **`Object.freeze()` = Runtime protection (JavaScript)**
