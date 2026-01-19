"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Задание 1: Импорт функций для работы со строками
const stringUtils_1 = require("./stringUtils");
// Задание 2: Импорт пространства имен Finance
const finance_1 = require("./finance");
// Задание 3: Импорт пространства имен UserManagement
const userManagement_1 = require("./userManagement");
// Задание 4: Импорт функций для работы с последовательностями
const sequenceUtils_1 = require("./sequenceUtils");
console.log('='.repeat(60));
console.log('ДОМАШНЕЕ ЗАДАНИЕ 22 - ТЕСТИРОВАНИЕ МОДУЛЕЙ');
console.log('='.repeat(60));
console.log();
const testString1 = 'hello world';
const testString2 = 'TypeScript';
const testString3 = 'ПРОГРАММИРОВАНИЕ';
console.log(`Исходная строка: "${testString1}"`);
console.log(`capitalize("${testString1}"): "${(0, stringUtils_1.capitalize)(testString1)}"`);
console.log(`reverseString("${testString1}"): "${(0, stringUtils_1.reverseString)(testString1)}"`);
console.log(`Исходная строка: "${testString2}"`);
console.log(`capitalize("${testString2}"): "${(0, stringUtils_1.capitalize)(testString2)}"`);
console.log(`reverseString("${testString2}"): "${(0, stringUtils_1.reverseString)(testString2)}"`);
console.log(`Исходная строка: "${testString3}"`);
console.log(`capitalize("${testString3}"): "${(0, stringUtils_1.capitalize)(testString3)}"`);
console.log(`reverseString("${testString3}"): "${(0, stringUtils_1.reverseString)(testString3)}"`);
// Задание 2: Тестирование финансовых операций
console.log('Задание 2: Пространства имен для финансовых операций');
// Расчет ежемесячного платежа по кредиту
const loanAmount = 1000000;
const annualRate = 12;
const loanTerm = 24;
const monthlyPayment = finance_1.Finance.LoanCalculator.calculateMonthlyPayment(loanAmount, annualRate, loanTerm);
console.log(`\nРасчет кредита:`);
console.log(`Сумма кредита: ${loanAmount.toLocaleString('de-DE')} евро`);
console.log(`Годовая ставка: ${annualRate}%`);
console.log(`Срок кредита: ${loanTerm} месяцев`);
console.log(`Ежемесячный платеж: ${monthlyPayment.toLocaleString('de-DE')} евро`);
// Расчет налога на доход
const income = 500000;
const taxRate = 13;
const tax = finance_1.Finance.TaxCalculator.calculateTax(income, taxRate);
console.log(`Расчет налога:`);
console.log(`Доход: ${income.toLocaleString('de-DE')} евро`);
console.log(`Ставка налога: ${taxRate}%`);
console.log(`Сумма налога: ${tax.toLocaleString('de-DE')} евро`);
console.log(`Доход после налога: ${(income - tax).toLocaleString('de-DE')} евро`);
// Задание 3: Тестирование управления пользователями
console.log('Задание 3: Вложенные пространства имен для управления пользователями');
const admin = new userManagement_1.UserManagement.Admin.AdminUser('Иван Иванов', 'ivan@example.com', false);
console.log('\nСоздан администратор:');
console.log(admin.getInfo());
console.log('Изменение прав доступа на супер-администратора:');
admin.setSuperAdmin(true);
console.log(admin.getInfo());
console.log('Изменение имени:');
admin.changeName('Иван Петров');
console.log(admin.getInfo());
console.log('Изменение email:');
admin.changeEmail('ivan.petrov@example.com');
console.log(admin.getInfo());
console.log('Задание 4: Модули для работы с числовыми последовательностями');
const fibMax = 50;
const fibonacci = (0, sequenceUtils_1.generateFibonacci)(fibMax);
console.log(`Последовательность Фибоначчи до ${fibMax}:`);
console.log(fibonacci.join(', '));
const fibMax2 = 100;
const fibonacci2 = (0, sequenceUtils_1.generateFibonacci)(fibMax2);
console.log(`Последовательность Фибоначчи до ${fibMax2}:`);
console.log(fibonacci2.join(', '));
const primeMax = 50;
const primes = (0, sequenceUtils_1.generatePrimeNumbers)(primeMax);
console.log(`Простые числа до ${primeMax}:`);
console.log(primes.join(', '));
const primeMax2 = 100;
const primes2 = (0, sequenceUtils_1.generatePrimeNumbers)(primeMax2);
console.log(`Простые числа до ${primeMax2}:`);
console.log(primes2.join(', '));
console.log('' + '='.repeat(60));
console.log('ТЕСТИРОВАНИЕ ЗАВЕРШЕНО');
console.log('='.repeat(60));
