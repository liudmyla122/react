// Задание 5: Абстрактный класс Media

abstract class Media {
    abstract play(): void;
}

class Audio extends Media {
    play(): void {
        console.log("Playing audio");
    }
}

class Video extends Media {
    play(): void {
        console.log("Playing video");
    }
}

// Создание массива типа Media[]
const mediaArray: Media[] = [
    new Audio(),
    new Video()
];

// Вызов метода play() для каждого элемента массива
console.log("\n=== Задание 5 ===");
mediaArray.forEach((media, index) => {
    console.log(`Медиа ${index + 1}:`);
    media.play();
});

export { Media, Audio, Video };
