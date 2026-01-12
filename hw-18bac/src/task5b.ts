// Задание 5: Наследование интерфейсов и работа с объектами

interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number;
}

// Создаем объект student типа Student
const student: Student = {
  firstName: "Алексей",
  lastName: "Соколов",
  grade: 5
};

// Функция, которая выводит полное имя студента и его оценку
function printStudentInfo(student: Student): void {
  const fullName = `${student.firstName} ${student.lastName}`;
  console.log(`Полное имя: ${fullName}`);
  console.log(`Оценка: ${student.grade}`);
}

console.log("\n=== Задание 5 (Наследование интерфейсов) ===");
printStudentInfo(student);
