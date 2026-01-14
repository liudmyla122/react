// Задание 2: Статическое свойство для учета всех книг

class Library {
  static totalBooks = 0

  constructor(name) {
    this.name = name
  }

  addBook() {
    Library.totalBooks++
    console.log(`Книга добавлена. Всего книг: ${Library.totalBooks}`)
  }
}

// Пример использования
const library1 = new Library('Городская библиотека')
const library2 = new Library('Университетская библиотека')
const library3 = new Library('Школьная библиотека')

console.log('Начальное количество книг:', Library.totalBooks)

library1.addBook()
library1.addBook()
library2.addBook()
library3.addBook()

console.log('Итоговое количество книг:', Library.totalBooks) // 4
