// Задание 2: Абстрактный класс Shape с цветом

// Базовый абстрактный класс Shape
abstract class Shape {
  abstract calculateArea(): number
}

// Абстрактный класс ColoredShape, который наследует Shape
abstract class ColoredShape extends Shape {
  abstract color: string
}

// Класс ColoredCircle
class ColoredCircle extends ColoredShape {
  color: string
  private radius: number

  constructor(radius: number, color: string) {
    super()
    this.radius = radius
    this.color = color
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius
  }
}

// Класс ColoredRectangle
class ColoredRectangle extends ColoredShape {
  color: string
  private width: number
  private height: number

  constructor(width: number, height: number, color: string) {
    super()
    this.width = width
    this.height = height
    this.color = color
  }

  calculateArea(): number {
    return this.width * this.height
  }
}

// Создание объектов и вывод площади и цвета
console.log('Задание 2')
const coloredCircle = new ColoredCircle(5, 'красный')
const coloredRectangle = new ColoredRectangle(4, 6, 'синий')

console.log(
  `Круг: площадь = ${coloredCircle.calculateArea().toFixed(2)}, цвет = ${
    coloredCircle.color
  }`
)
console.log(
  `Прямоугольник: площадь = ${coloredRectangle.calculateArea()}, цвет = ${
    coloredRectangle.color
  }`
)

export { Shape, ColoredShape, ColoredCircle, ColoredRectangle }
