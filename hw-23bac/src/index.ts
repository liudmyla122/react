function promise1(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Результат промиса 1')
    }, 1000)
  })
}

function promise2(data: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${data} -> Результат промиса 2`)
    }, 1500)
  })
}

function promise3(data: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${data} -> Результат промиса 3`)
    }, 800)
  })
}

async function sequentialPromises(): Promise<void> {
  console.log('ЗАДАНИЕ 1: Последовательное выполнение промисов с async/await')

  try {
    const result1 = await promise1()
    console.log('Промис 1 выполнен:', result1)

    const result2 = await promise2(result1)
    console.log('Промис 2 выполнен:', result2)

    const result3 = await promise3(result2)
    console.log('Промис 3 выполнен:', result3)

    console.log('Финальный результат:', result3)
  } catch (error) {
    console.error('Ошибка в цепочке промисов:', error)
  }
}

async function processString(str: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str.toUpperCase())
    }, Math.random() * 1000 + 500)
  })
}

async function processArrayParallel(strings: string[]): Promise<void> {
  console.log('ЗАДАНИЕ 2: Параллельная обработка массива с Promise.all')
  console.log('Исходный массив:', strings)

  try {
    const startTime = Date.now()

    const results = await Promise.all(strings.map(processString))

    const endTime = Date.now()
    const duration = endTime - startTime

    console.log('Результаты обработки:', results)
    console.log('Время выполнения: ' + duration + ' мс')
  } catch (error) {
    console.error('Ошибка при обработке массива:', error)
  }
}

function successfulPromise1(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Промис 1 успешно выполнен')
    }, 1000)
  })
}

function successfulPromise2(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Промис 2 успешно выполнен')
    }, 1500)
  })
}

function failingPromise(): Promise<string> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Промис 3 завершился с ошибкой!'))
    }, 800)
  })
}

async function handlePromiseErrors(): Promise<void> {
  console.log('ЗАДАНИЕ 3: Обработка ошибок в параллельных промисах')

  try {
    const results = await Promise.all([
      successfulPromise1(),
      successfulPromise2(),
      failingPromise(),
    ])

    console.log('Все промисы выполнены успешно:', results)
  } catch (error) {
    console.error('Обнаружена ошибка в одном из промисов:')
    if (error instanceof Error) {
      console.error('Сообщение об ошибке:', error.message)
    } else {
      console.error('Ошибка:', error)
    }
  }
}

function createDelayedPromise(value: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value)
    }, value)
  })
}

async function processNumbersWithDelay(numbers: number[]): Promise<void> {
  console.log(
    'ЗАДАНИЕ 4: Асинхронная функция с динамическим временем выполнения'
  )
  console.log('Исходный массив чисел:', numbers)

  try {
    const startTime = Date.now()

    const promises = numbers.map((num) => createDelayedPromise(num))

    const results = await Promise.all(promises)

    const endTime = Date.now()
    const duration = endTime - startTime

    console.log('Результаты:', results)
    console.log('Время выполнения: ' + duration + ' мс')
    const maxDelay = Math.max(...numbers)
    console.log('Максимальное время задержки: ' + maxDelay + ' мс')
    console.log(
      '(Все промисы выполнялись параллельно, поэтому общее время ≈ максимальной задержке)'
    )
  } catch (error) {
    console.error('Ошибка при обработке чисел:', error)
  }
}

async function main(): Promise<void> {
  console.log('╔═══════════════════════════════════════════════════════════╗')
  console.log('║   Домашнее задание 23 - Промисы и async/await           ║')
  console.log('╚═══════════════════════════════════════════════════════════╝')

  await sequentialPromises()

  await processArrayParallel(['привет', 'мир', 'typescript', 'node.js'])

  await handlePromiseErrors()

  await processNumbersWithDelay([1000, 2000, 500, 1500, 300])

  console.log('\n╔═══════════════════════════════════════════════════════════╗')
  console.log('║   Все задания выполнены!                                 ║')
  console.log('╚═══════════════════════════════════════════════════════════╝\n')
}

main().catch((error) => {
  console.error('Критическая ошибка:', error)
  process.exit(1)
})
