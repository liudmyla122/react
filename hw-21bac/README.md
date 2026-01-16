# Домашнее задание 21 - Абстрактные классы

## Описание

Проект содержит 5 заданий по работе с абстрактными классами в TypeScript.

## Структура проекта

- `src/task1.ts` - Абстрактный класс Animal (Dog, Cat)
- `src/task2.ts` - Абстрактный класс ColoredShape (ColoredCircle, ColoredRectangle)
- `src/task3.ts` - Абстрактный класс Appliance (WashingMachine, Refrigerator)
- `src/task4.ts` - Абстрактный класс Account (SavingsAccount, CheckingAccount)
- `src/task5.ts` - Абстрактный класс Media (Audio, Video)
- `src/index.ts` - Главный файл для запуска всех заданий

## Установка зависимостей

```bash
npm install
```

## Запуск проекта

### Вариант 1: С использованием ts-node (рекомендуется для разработки)

```bash
npm run dev
```

### Вариант 2: Компиляция и запуск

```bash
npm run build
npm start
```

## Задания

### Задание 1: Абстрактный класс Animal
Создан абстрактный класс `Animal` с методом `makeSound()`. Реализованы классы `Dog` и `Cat`, которые возвращают "Bark" и "Meow" соответственно.

### Задание 2: Абстрактный класс Shape с цветом
Создан абстрактный класс `ColoredShape`, наследующий `Shape`, с абстрактным полем `color`. Реализованы классы `ColoredCircle` и `ColoredRectangle` с расчетом площади.

### Задание 3: Абстрактный класс Appliance
Создан абстрактный класс `Appliance` с методами `turnOn()` и `turnOff()`. Реализованы классы `WashingMachine` и `Refrigerator`.

### Задание 4: Абстрактный класс Account
Создан абстрактный класс `Account` с методами `deposit()` и `withdraw()`. Реализованы:
- `SavingsAccount` - с начислением процентов
- `CheckingAccount` - со снятием средств с учетом комиссии

### Задание 5: Абстрактный класс Media
Создан абстрактный класс `Media` с методом `play()`. Реализованы классы `Audio` и `Video`.
