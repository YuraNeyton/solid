// Open close principle
/*
    Класи які ми створюєм повині бути відкриті для розширення, але закриті для модифікації.
    Ми повинні проектувати наші класи таким чином, щоб коли в нас появляться нові кейси(наприклад потреба дописати
    додатковий функціонал), ми не модифікували старий код, а він вже був спроектований таким чином, щоб коли ми
    дописували новий функціонал, ми не міняли старий фунціонал(код).
 */

//GOOD
class Shape {
    constructor() {
    }

    area() {
        throw new Error('Area method should be implement')
    }
}

// квадрат
class Square extends Shape {
    constructor(size) {
        super();
        this.type = 'square'
        this.size = size
    }

    //GOOD
    area() {
        return this.size ** 2;
    }
}

// круг
class Circle {
    constructor(radius) {
        this.type = 'circle'
        this.radius = radius
    }
}

// тепер нам потрібно добивити новий функціонал
// тоді виникає потреба змінювати клас AreaCalculator
class Rect {
    constructor(width, height) {
        this.type = 'rect'
        this.width = width
        this.height = height
    }
}

class AreaCalculator {
    // фігурки
    constructor(shapes = []) {
        this.shapes = shapes
    }

    //BAD
    // sum() {
    //     return this.shapes.reduce((acc, shape) => {
    //         if (shape.type === 'circle') {
    //             acc += (shape.radius ** 2) * Math.PI
    //         } else if (shape.type === 'square') {
    //             acc += shape.size ** 2
    //         }
    //
    //         return acc;
    //     }, 0)
    // }
    //GOOD
    sum() {
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area();
            return acc;
        }, 0)
    }
}

const circle = new Circle(5);
const square = new Square(10);
const rect = new Rect(10, 20);

console.log(circle);

const areaCalculator = new AreaCalculator([
    circle,
    square,
    //все габелла
    rect
]);
console.log(areaCalculator.sum());
