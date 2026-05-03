// ===== Session 08 - Exercise 1: Arrays of Objects =====

const employees = [
  { name: "Ahmed", department: "Design", salary: 8000 },
  { name: "Sara", department: "Development", salary: 12000 },
  { name: "Mohamed", department: "Development", salary: 11000 },
  { name: "Nour", department: "Marketing", salary: 7000 },
  { name: "Ali", department: "Development", salary: 13000 },
];

// Get all developers
const developers = employees.filter((e) => e.department === "Development");
console.log("Developers:", developers.map((d) => d.name));

// Average salary
const avgSalary =
  employees.reduce((sum, e) => sum + e.salary, 0) / employees.length;
console.log("Average Salary:", avgSalary.toFixed(0), "EGP");

// Highest paid
const topEarner = employees.reduce((top, current) =>
  current.salary > top.salary ? current : top
);
console.log("Top Earner:", topEarner.name, "-", topEarner.salary, "EGP");

// Sort by salary descending
const sorted = [...employees].sort((a, b) => b.salary - a.salary);
console.log("\nSorted by salary:");
sorted.forEach((e) => console.log(`  ${e.name}: ${e.salary}`));
