// Задание 6: Интерфейс для функции с несколькими параметрами

interface ConcatStringsFunction {
  (str1: string, str2: string): string;
}

// Реализация функции concatStrings
const concatStrings: ConcatStringsFunction = (str1, str2) => {
  return str1 + str2;
};

console.log("\n=== Задание 6 ===");
const result1 = concatStrings("Привет, ", "мир!");
console.log(`concatStrings("Привет, ", "мир!") = "${result1}"`);

const result2 = concatStrings("Type", "Script");
console.log(`concatStrings("Type", "Script") = "${result2}"`);

const result3 = concatStrings("", "Тест");
console.log(`concatStrings("", "Тест") = "${result3}"`);
