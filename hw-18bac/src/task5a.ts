// Задание 5: Массив объектов и функции

interface Employee {
  name: string;
  salary: number;
}

// Массив объектов Employee
const employees: Employee[] = [
  { name: "Анна Петрова", salary: 75000 },
  { name: "Петр Сидоров", salary: 85000 },
  { name: "Мария Козлова", salary: 90000 },
  { name: "Иван Смирнов", salary: 80000 }
];

// Функция, которая принимает массив Employee и возвращает массив зарплат
function getSalaries(employees: Employee[]): number[] {
  return employees.map(employee => employee.salary);
}

console.log("\n=== Задание 5 (Массив объектов) ===");
console.log("Сотрудники:", employees);
console.log("Зарплаты:", getSalaries(employees));
