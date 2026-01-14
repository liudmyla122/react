// Задание 3: Переопределение конструктора в классе Vehicle

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, type) {
        super(make, model);
        this.type = type;
    }
}

// Пример использования
const vehicle = new Vehicle("Toyota", "Camry");
console.log("Транспортное средство:", vehicle.make, vehicle.model);
console.log("Свойства:", vehicle);

const motorcycle = new Motorcycle("Yamaha", "YZF-R1", "Спортивный");
console.log("Мотоцикл:", motorcycle.make, motorcycle.model, "-", motorcycle.type);
console.log("Свойства:", motorcycle);

// Проверка правильности инициализации
console.log("\nПроверка инициализации:");
console.log("Vehicle - make:", vehicle.make, ", model:", vehicle.model);
console.log("Motorcycle - make:", motorcycle.make, ", model:", motorcycle.model, ", type:", motorcycle.type);
