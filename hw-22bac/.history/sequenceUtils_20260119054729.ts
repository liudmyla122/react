/**
 * Модуль для работы с числовыми последовательностями
 */

/**
 * Генерирует последовательность Фибоначчи до указанного числа
 * @param maxValue - максимальное значение в последовательности
 * @returns массив чисел Фибоначчи
 */
export function generateFibonacci(maxValue: number): number[] {
  if (maxValue < 0) return [];
  if (maxValue === 0) return [0];
  
  const sequence: number[] = [0, 1];
  
  while (true) {
    const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (next > maxValue) break;
    sequence.push(next);
  }
  
  return sequence;
}

/**
 * Генерирует простые числа до указанного числа
 * @param maxValue - максимальное значение
 * @returns массив простых чисел
 */
export function generatePrimeNumbers(maxValue: number): number[] {
  if (maxValue < 2) return [];
  
  const primes: number[] = [];
  const isPrime = new Array(maxValue + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  
  for (let i = 2; i <= maxValue; i++) {
    if (isPrime[i]) {
      primes.push(i);
      // Отмечаем все кратные числа как непростые
      for (let j = i * i; j <= maxValue; j += i) {
        isPrime[j] = false;
      }
    }
  }
  
  return primes;
}
