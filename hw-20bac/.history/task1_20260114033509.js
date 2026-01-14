// Задание 1: Класс Animal и его наследник Dog

class Animal {
  constructor(name, species) {
    this.name = name
    this.species = species
  }

  sound() {
    console.log('The animal makes a sound')
  }
}

class Dog extends Animal {
  constructor(name, species, breed) {
    super(name, species)
    this.breed = breed
  }

  sound() {
    console.log('The dog barks')
  }
}
