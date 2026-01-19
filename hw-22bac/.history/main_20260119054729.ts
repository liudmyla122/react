/**
 * Главный файл для тестирования всех модулей
 */

// Задание 1: Импорт функций для работы со строками
import { capitalize, reverseString } from './stringUtils';

// Задание 2: Импорт пространства имен Finance
import { Finance } from './finance';

// Задание 3: Импорт пространства имен UserManagement
import { UserManagement } from './userManagement';

// Задание 4: Импорт функций для работы с последовательностями
import { generateFibonacci, generatePrimeNumbers } from './sequenceUtils';

console.log('='.repeat(60));
console.log('ДОМАШНЕЕ ЗАДАНИЕ 22 - ТЕСТИРОВАНИЕ МОДУЛЕЙ');
console.log('='.repeat(60));

// Задание 1: Тестирование функций для работы со строками
console.log('\n--- Задание 1: Модули для работы со строками ---');
const testString1 = 'hello world';
const testString2 = 'TypeScript';
const testString3 = 'ПРОГРАММИРОВАНИЕ';

console.log(`Исходная строка: "${testString1}"`);
console.log(`capitalize("${testString1}"): "${capitalize(testString1)}"`);
console.log(`reverseString("${testString1}"): "${reverseString(testString1)}"`);

console.log(`\nИсходная строка: "${testString2}"`);
console.log(`capitalize("${testString2}"): "${capitalize(testString2)}"`);
console.log(`reverseString("${testString2}"): "${reverseString(testString2)}"`);

console.log(`\nИсходная строка: "${testString3}"`);
console.log(`capitalize("${testString3}"): "${capitalize(testString3)}"`);
console.log(`reverseString("${testString3}"): "${reverseString(testString3)}"`);

// Задание 2: Тестирование финансовых операций
console.log('\n--- Задание 2: Пространства имен для финансовых операций ---');

// Расчет ежемесячного платежа по кредиту
const loanAmount = 1000000; // 1 млн рублей
const annualRate = 12; // 12% годовых
const loanTerm = 24; // 24 месяца

const monthlyPayment = Finance.LoanCalculator.calculateMonthlyPayment(loanAmount, annualRate, loanTerm);
console.log(`\nРасчет кредита:`);
console.log(`Сумма кредита: ${loanAmount.toLocaleString('ru-RU')} руб.`);
console.log(`Годовая ставка: ${annualRate}%`);
console.log(`Срок кредита: ${loanTerm} месяцев`);
console.log(`Ежемесячный платеж: ${monthlyPayment.toLocaleString('ru-RU')} руб.`);

// Расчет налога на доход
const income = 500000; // 500 тысяч рублей
const taxRate = 13; // 13% (стандартная ставка НДФЛ в России)

const tax = Finance.TaxCalculator.calculateTax(income, taxRate);
console.log(`\nРасчет налога:`);
console.log(`Доход: ${income.toLocaleString('ru-RU')} руб.`);
console.log(`Ставка налога: ${taxRate}%`);
console.log(`Сумма налога: ${tax.toLocaleString('ru-RU')} руб.`);
console.log(`Доход после налога: ${(income - tax).toLocaleString('ru-RU')} руб.`);

// Задание 3: Тестирование управления пользователями
console.log('\n--- Задание 3: Вложенные пространства имен для управления пользователями ---');

// Создание администратора
const admin = new UserManagement.Admin.AdminUser(
  'Иван Иванов',
  'ivan@example.com',
  false
);

console.log('\nСоздан администратор:');
console.log(admin.getInfo());

// Изменение прав доступа
console.log('\nИзменение прав доступа на супер-администратора:');
admin.setSuperAdmin(true);
console.log(admin.getInfo());

// Изменение имени
console.log('\nИзменение имени:');
admin.changeName('Иван Петров');
console.log(admin.getInfo());

// Изменение email
console.log('\nИзменение email:');
admin.changeEmail('ivan.petrov@example.com');
console.log(admin.getInfo());

// Задание 4: Тестирование числовых последовательностей
console.log('\n--- Задание 4: Модули для работы с числовыми последовательностями ---');

// Генерация последовательности Фибоначчи
const fibMax = 50;
const fibonacci = generateFibonacci(fibMax);
console.log(`\nПоследовательность Фибоначчи до ${fibMax}:`);
console.log(fibonacci.join(', '));

const fibMax2 = 100;
const fibonacci2 = generateFibonacci(fibMax2);
console.log(`\nПоследовательность Фибоначчи до ${fibMax2}:`);
console.log(fibonacci2.join(', '));

// Генерация простых чисел
const primeMax = 50;
const primes = generatePrimeNumbers(primeMax);
console.log(`\nПростые числа до ${primeMax}:`);
console.log(primes.join(', '));

const primeMax2 = 100;
const primes2 = generatePrimeNumbers(primeMax2);
console.log(`\nПростые числа до ${primeMax2}:`);
console.log(primes2.join(', '));

console.log('\n' + '='.repeat(60));
console.log('ТЕСТИРОВАНИЕ ЗАВЕРШЕНО');
console.log('='.repeat(60));
