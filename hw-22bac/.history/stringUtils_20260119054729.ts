/**
 * Модуль для работы со строками
 */

/**
 * Делает первую букву строки заглавной
 * @param str - исходная строка
 * @returns строка с заглавной первой буквой
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Переворачивает строку задом наперед
 * @param str - исходная строка
 * @returns перевернутая строка
 */
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}
