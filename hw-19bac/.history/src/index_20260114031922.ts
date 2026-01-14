// Задание 1: Стрелочная функция sumEvenNumbers
// Принимает массив чисел и возвращает сумму всех четных чисел
const sumEvenNumbers = (numbers: number[]): number => {
  return numbers
    .filter(num => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
};

// Задание 2: Интерфейс StringToBooleanFunction
// Определяет функцию, которая принимает строку и возвращает boolean
interface StringToBooleanFunction {
  (str: string): boolean;
}

// Реализация функции, соответствующей интерфейсу StringToBooleanFunction
const isEmptyString: StringToBooleanFunction = (str: string): boolean => {
  return str.trim().length === 0;
};

// Задание 3: Тип CompareStrings
// Определяет функцию, которая принимает две строки и возвращает boolean
type CompareStrings = (str1: string, str2: string) => boolean;

// Реализация функции, соответствующей типу CompareStrings
const areStringsEqual: CompareStrings = (str1: string, str2: string): boolean => {
  return str1 === str2;
};

// Задание 4: Обобщенная функция getLastElement
// Принимает массив любого типа и возвращает последний элемент
const getLastElement = <T>(array: T[]): T | undefined => {
  return array.length > 0 ? array[array.length - 1] : undefined;
};

// Задание 5: Обобщенная функция makeTriple
// Принимает три аргумента одного типа и возвращает массив из этих трёх элементов
const makeTriple = <T>(first: T, second: T, third: T): T[] => {
  return [first, second, third];
};

// Примеры использования и тестирование функций
console.log('=== Задание 1: sumEvenNumbers ===');
console.log('Сумма четных чисел [1, 2, 3, 4, 5, 6]:', sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log('Сумма четных чисел [10, 15, 20, 25]:', sumEvenNumbers([10, 15, 20, 25])); // 30

console.log('\n=== Задание 2: StringToBooleanFunction ===');
console.log('Пустая строка "":', isEmptyString('')); // true
console.log('Строка с пробелами "   ":', isEmptyString('   ')); // true
console.log('Непустая строка "hello":', isEmptyString('hello')); // false

console.log('\n=== Задание 3: CompareStrings ===');
console.log('"hello" === "hello":', areStringsEqual('hello', 'hello')); // true
console.log('"hello" === "world":', areStringsEqual('hello', 'world')); // false

console.log('\n=== Задание 4: getLastElement ===');
console.log('Последний элемент [1, 2, 3, 4, 5]:', getLastElement([1, 2, 3, 4, 5])); // 5
console.log('Последний элемент ["a", "b", "c"]:', getLastElement(['a', 'b', 'c'])); // "c"
console.log('Последний элемент []:', getLastElement([])); // undefined

console.log('\n=== Задание 5: makeTriple ===');
console.log('makeTriple(1, 2, 3):', makeTriple(1, 2, 3)); // [1, 2, 3]
console.log('makeTriple("a", "b", "c"):', makeTriple('a', 'b', 'c')); // ["a", "b", "c"]
console.log('makeTriple(true, false, true):', makeTriple(true, false, true)); // [true, false, true]
