// ===== Session 08 - Exercise 2: Destructuring + Spread =====

// Object destructuring
const user = {
  name: "Ahmed",
  age: 25,
  city: "Cairo",
  email: "ahmed@email.com",
};

const { name, age, city } = user;
console.log(`${name} is ${age} years old from ${city}`);

// Array destructuring
const colors = ["red", "green", "blue", "yellow"];
const [first, second, ...rest] = colors;
console.log("First:", first);
console.log("Second:", second);
console.log("Rest:", rest);

// Spread operator - merge objects
const baseConfig = { theme: "dark", language: "en" };
const userConfig = { language: "ar", fontSize: 16 };
const finalConfig = { ...baseConfig, ...userConfig }; // userConfig overrides
console.log("\nFinal Config:", finalConfig);

// Spread operator - merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined:", combined);
