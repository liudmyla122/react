// Задание 1: Функция приветствия
function greetUser(name: string): void {
  console.log(`Привет, ${name}!`);
}

// Задание 2: Типизация функции с объектом в качестве параметра
interface Person {
  name: string;
  age: number;
  city: string;
}

function printPersonInfo(person: Person): void {
  console.log(`Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`);
}

// Задание 3: Простая типизация для числового параметра
function squareNumber(num: number): number {
  return num * num;
}

// Задание 4: Типизация функции с boolean
function isEven(num: number): boolean {
  return num % 2 === 0;
}

// Задание 5: Создание интерфейса для объекта
interface Student {
  name: string;
  grade: number;
}

function printStudentInfo(student: Student): void {
  console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}

// Задание 6: Функция с типом void
function logMessage(message: string): void {
  console.log(message);
}

// Примеры использования функций
console.log('=== Задание 1 ===');
greetUser('Анна');

console.log('\n=== Задание 2 ===');
const person: Person = {
  name: 'Иван',
  age: 25,
  city: 'Москва'
};
printPersonInfo(person);

console.log('\n=== Задание 3 ===');
const squared = squareNumber(5);
console.log(`Квадрат числа 5: ${squared}`);

console.log('\n=== Задание 4 ===');
console.log(`Число 4 четное? ${isEven(4)}`);
console.log(`Число 5 четное? ${isEven(5)}`);

console.log('\n=== Задание 5 ===');
const student: Student = {
  name: 'Мария',
  grade: 5
};
printStudentInfo(student);

console.log('\n=== Задание 6 ===');
logMessage('Это тестовое сообщение');

