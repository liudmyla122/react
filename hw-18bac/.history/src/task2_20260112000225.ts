// Задание 2: Вложенные объекты и опциональные поля

type Car = {
  make: string
  model: string
  engine: {
    type: string
    horsepower: number
  }
  year?: number
}

// Функция для вывода информации о машине
function printCarInfo(car: Car): void {
  console.log(`Марка: ${car.make}`)
  console.log(`Модель: ${car.model}`)
  console.log(`Двигатель: ${car.engine.type}, ${car.engine.horsepower} л.с.`)
  if (car.year) {
    console.log(`Год выпуска: ${car.year}`)
  } else {
    console.log('Год выпуска: не указан')
  }
}

console.log('\n=== Задание 2 ===')
const car1: Car = {
  make: 'Toyota',
  model: 'Camry',
  engine: {
    type: 'V6',
    horsepower: 301,
  },
  year: 2023,
}

const car2: Car = {
  make: 'BMW',
  model: 'X5',
  engine: {
    type: 'V8',
    horsepower: 523,
  },
}

printCarInfo(car1)
console.log('---')
printCarInfo(car2)
