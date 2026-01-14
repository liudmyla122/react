// Задание 1: Стрелочная функция sumEvenNumbers
// Принимает массив чисел и возвращает сумму всех четных чисел
const sumEvenNumbers = (numbers: number[]): number => {
  return numbers
    .filter((num) => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0)
}

// Задание 2: Интерфейс StringToBooleanFunction
// Определяет функцию, которая принимает строку и возвращает boolean
interface StringToBooleanFunction {
  (str: string): boolean
}

// Реализация функции, соответствующей интерфейсу StringToBooleanFunction
const isEmptyString: StringToBooleanFunction = (str: string): boolean => {
  return str.trim().length === 0
}

// Задание 3: Тип CompareStrings
// Определяет функцию, которая принимает две строки и возвращает boolean
type CompareStrings = (str1: string, str2: string) => boolean

// Реализация функции, соответствующей типу CompareStrings
const areStringsEqual: CompareStrings = (
  str1: string,
  str2: string
): boolean => {
  return str1 === str2
}

// Задание 4: Обобщенная функция getLastElement
// Принимает массив любого типа и возвращает последний элемент
const getLastElement = <T>(array: T[]): T | undefined => {
  return array.length > 0 ? array[array.length - 1] : undefined
}

// Задание 5: Обобщенная функция makeTriple
// Принимает три аргумента одного типа и возвращает массив из этих трёх элементов
const makeTriple = <T>(first: T, second: T, third: T): T[] => {
  return [first, second, third]
}

// Примеры использования и тестирование функций
console.log('Задание 1')
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]))
console.log(sumEvenNumbers([10, 15, 20, 25]))

console.log('Задание 2')
console.log(isEmptyString(''))
console.log(isEmptyString('   '))
console.log(isEmptyString('hello'))

console.log('Задание 3')
console.log(areStringsEqual('hello', 'hello'))
console.log(areStringsEqual('hello', 'world'))

console.log('Задание 4')
console.log(getLastElement([1, 2, 3, 4, 5]))
console.log(getLastElement(['a', 'b', 'c']))
console.log(getLastElement([]))

console.log('Задание 5')
console.log(makeTriple(1, 2, 3))
console.log(makeTriple('a', 'b', 'c'))
console.log(makeTriple(true, false, true))
