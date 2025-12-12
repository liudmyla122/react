class Stack {
  constructor() {
    this.items = [] // внутренний массив — наша «коробка»
  }

  // empty() — проверка, пуст ли стек
  empty() {
    return this.items.length === 0
  }

  // push(x) — кладём элемент наверх
  push(element) {
    this.items.push(element)
  }

  // pop() — снимаем верхний элемент и возвращаем его
  pop() {
    if (this.empty()) {
      return null // или можно кидать ошибку
    }
    return this.items.pop()
  }

  // peek() — смотрим на верх, но не снимаем
  peek() {
    if (this.empty()) {
      return null
    }
    return this.items[this.items.length - 1]
  }

  // search(value)
  // Возвращает позицию элемента относительно вершины:
  // вершина = позиция 1, следующий = 2, ...
  // если элемента нет — возвращает -1
  search(value) {
    // ищем с конца, ведь вершина там
    for (let i = this.items.length - 1, pos = 1; i >= 0; i--, pos++) {
      if (this.items[i] === value) {
        return pos
      }
    }
    return -1
  }
}
