// Задание 1: Абстрактный класс Animal

abstract class Animal {
    abstract makeSound(): string;
}

class Dog extends Animal {
    makeSound(): string {
        return "Bark";
    }
}

class Cat extends Animal {
    makeSound(): string {
        return "Meow";
    }
}

// Создание массива типа Animal[]
const animals: Animal[] = [
    new Dog(),
    new Cat()
];

// Вызов метода makeSound() для каждого элемента массива
console.log("=== Задание 1 ===");
animals.forEach((animal, index) => {
    console.log(`Животное ${index + 1}: ${animal.makeSound()}`);
});

export { Animal, Dog, Cat };
