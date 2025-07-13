const employees = [
  { name: "Alice", department: "Engineering", salary: 50000, performance: 85 },
  { name: "Bob", department: "Engineering", salary: 45000, performance: 65 },
  { name: "Charlie", department: "HR", salary: 40000, performance: 70 },
  { name: "David", department: "HR", salary: 35000, performance: 50 },
  { name: "Eve", department: "Sales", salary: 30000, performance: 95 },
  { name: "Frank", department: "Sales", salary: 28000, performance: 40 },
];

/*
Filter out employees whose performance is less than 60.

Give them a performance bonus of 25% of their salary.

Then, keep only those whose new salary (including bonus) is above 35,000.

Return the total sum of new salaries of the remaining employees.

*/
const question = employees
  .filter((emp) => emp.performance < 60)
  .map((emp) => ({
    ...emp,
    salary: emp.salary * 1.25,
  }))
  .filter((emp) => emp.salary > 35000)
  .reduce((acc, curr) => acc + curr.salary, 0);

console.log(question);
