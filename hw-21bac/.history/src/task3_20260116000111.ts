// Задание 3: Абстрактный класс Appliance

abstract class Appliance {
    abstract turnOn(): void;
    abstract turnOff(): void;
}

class WashingMachine extends Appliance {
    turnOn(): void {
        console.log("Стиральная машина включена");
    }

    turnOff(): void {
        console.log("Стиральная машина выключена");
    }
}

class Refrigerator extends Appliance {
    turnOn(): void {
        console.log("Холодильник включен");
    }

    turnOff(): void {
        console.log("Холодильник выключен");
    }
}

// Создание массива типа Appliance[]
const appliances: Appliance[] = [
    new WashingMachine(),
    new Refrigerator()
];

// Вызов методов turnOn() и turnOff() для каждого элемента
console.log("\n=== Задание 3 ===");
appliances.forEach((appliance, index) => {
    console.log(`\nБытовая техника ${index + 1}:`);
    appliance.turnOn();
    appliance.turnOff();
});

export { Appliance, WashingMachine, Refrigerator };
