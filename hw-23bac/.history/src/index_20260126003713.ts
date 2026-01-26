/**
 * Домашнее задание 23 - Работа с промисами и async/await
 */

// ==================== ЗАДАНИЕ 1 ====================
// Обработка цепочки промисов с async/await (последовательно)

/**
 * Функция, которая возвращает промис с задержкой
 */
function promise1(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Результат промиса 1");
    }, 1000);
  });
}

function promise2(data: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${data} -> Результат промиса 2`);
    }, 1500);
  });
}

function promise3(data: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${data} -> Результат промиса 3`);
    }, 800);
  });
}

/**
 * Функция, которая вызывает промисы последовательно с помощью await
 */
async function sequentialPromises(): Promise<void> {
  console.log("\n=== ЗАДАНИЕ 1: Последовательное выполнение промисов ===\n");
  
  try {
    const result1 = await promise1();
    console.log("Промис 1 выполнен:", result1);
    
    const result2 = await promise2(result1);
    console.log("Промис 2 выполнен:", result2);
    
    const result3 = await promise3(result2);
    console.log("Промис 3 выполнен:", result3);
    
    console.log("\nФинальный результат:", result3);
  } catch (error) {
    console.error("Ошибка в цепочке промисов:", error);
  }
}

// ==================== ЗАДАНИЕ 2 ====================
// Асинхронная обработка данных из массива с Promise.all

/**
 * Асинхронная функция для обработки строки (преобразование в верхний регистр с задержкой)
 */
async function processString(str: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str.toUpperCase());
    }, Math.random() * 1000 + 500); // Случайная задержка от 500 до 1500 мс
  });
}

/**
 * Функция, которая обрабатывает массив строк параллельно с помощью Promise.all
 */
async function processArrayParallel(strings: string[]): Promise<void> {
  console.log("\n=== ЗАДАНИЕ 2: Параллельная обработка массива ===\n");
  console.log("Исходный массив:", strings);
  
  try {
    const startTime = Date.now();
    
    // Выполняем все операции параллельно
    const results = await Promise.all(strings.map(processString));
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    console.log("\nРезультаты обработки:", results);
    console.log(`Время выполнения: ${duration} мс`);
  } catch (error) {
    console.error("Ошибка при обработке массива:", error);
  }
}

// ==================== ЗАДАНИЕ 3 ====================
// Обработка ошибки в параллельных промисах

/**
 * Три промиса, один из которых завершается с ошибкой
 */
function successfulPromise1(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Промис 1 успешно выполнен");
    }, 1000);
  });
}

function successfulPromise2(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Промис 2 успешно выполнен");
    }, 1500);
  });
}

function failingPromise(): Promise<string> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Промис 3 завершился с ошибкой!"));
    }, 800);
  });
}

/**
 * Функция, которая обрабатывает ошибку в Promise.all с помощью try/catch
 */
async function handlePromiseErrors(): Promise<void> {
  console.log("\n=== ЗАДАНИЕ 3: Обработка ошибок в параллельных промисах ===\n");
  
  try {
    const results = await Promise.all([
      successfulPromise1(),
      successfulPromise2(),
      failingPromise()
    ]);
    
    console.log("Все промисы выполнены успешно:", results);
  } catch (error) {
    console.error("Обнаружена ошибка в одном из промисов:");
    if (error instanceof Error) {
      console.error("Сообщение об ошибке:", error.message);
    } else {
      console.error("Ошибка:", error);
    }
  }
}

// ==================== ЗАДАНИЕ 4 ====================
// Асинхронная функция с динамическим временем выполнения

/**
 * Создает промис, который завершается через указанное количество миллисекунд
 */
function createDelayedPromise(value: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, value);
  });
}

/**
 * Асинхронная функция, которая обрабатывает массив чисел параллельно
 * Каждый промис завершается через количество мс, равное значению числа
 */
async function processNumbersWithDelay(numbers: number[]): Promise<void> {
  console.log("\n=== ЗАДАНИЕ 4: Динамическое время выполнения промисов ===\n");
  console.log("Исходный массив чисел:", numbers);
  
  try {
    const startTime = Date.now();
    
    // Создаем промисы для каждого числа
    const promises = numbers.map(num => createDelayedPromise(num));
    
    // Ждем завершения всех промисов
    const results = await Promise.all(promises);
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    console.log("\nРезультаты:", results);
    console.log(`Время выполнения: ${duration} мс`);
    console.log(`Максимальное время задержки: ${Math.max(...numbers)} мс`);
    console.log("(Все промисы выполнялись параллельно, поэтому общее время = максимальной задержке)");
  } catch (error) {
    console.error("Ошибка при обработке чисел:", error);
  }
}

// ==================== ГЛАВНАЯ ФУНКЦИЯ ====================

/**
 * Главная функция, которая запускает все задания
 */
async function main(): Promise<void> {
  console.log("╔═══════════════════════════════════════════════════════════╗");
  console.log("║   Домашнее задание 23 - Промисы и async/await           ║");
  console.log("╚═══════════════════════════════════════════════════════════╝");
  
  // Задание 1
  await sequentialPromises();
  
  // Задание 2
  await processArrayParallel(["привет", "мир", "typescript", "node.js"]);
  
  // Задание 3
  await handlePromiseErrors();
  
  // Задание 4
  await processNumbersWithDelay([1000, 2000, 500, 1500, 300]);
  
  console.log("\n╔═══════════════════════════════════════════════════════════╗");
  console.log("║   Все задания выполнены!                                 ║");
  console.log("╚═══════════════════════════════════════════════════════════╝\n");
}

// Запуск программы
main().catch((error) => {
  console.error("Критическая ошибка:", error);
  process.exit(1);
});
