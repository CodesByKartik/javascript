// Classes are a template for creating objects. They encapsulate data with code to work on that data. In JavaScript, classes are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

// Class declaration

class rect {
    constructor(height, width, colour) {
        this.height = height
        this.width = width
        this.colour = colour
    }
    area() {
        return this.height * this.width
    }
    paint() {
        return `The colour of the rectangle is ${this.colour}`
    }

}
const rect1 = new rect(10, 20, 'red') // instance of the class created by using the new keyword
// console.log(rect1)
console.log(rect1.area())
console.log(rect1.paint())

const rect2 = new rect(30, 40, 'blue')
console.log(rect2.area())
console.log(rect2.paint())

// Class expression
const square = class {
    constructor(side) {
        this.side = side
    }
    area() {
        return this.side * this.side
    }
    perimeter() {
        return 4 * this.side
    }
}

const sq1 = new square(10)
console.log(sq1.area())
console.log(sq1.perimeter())

// Hoisting is not applicable for class declarations. You must declare a class before you can use it.

// Example of class inheritance 
class Animal {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(`${this.name} makes a noise`)
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name) // call the super class constructor and pass in the name parameter
        this.breed = breed
    }
    speak() {
        console.log(`${this.name} barks`)
    }
}

const dog1 = new Dog('Buddy', 'Golden Retriever')
dog1.speak() // Buddy barks

const animal1 = new Animal('Leo')
animal1.speak() // Leo makes a noise

// Getters and Setters
class Circle {
    constructor(radius) {
        this.radius = radius
    }
    get area() {
        return Math.PI * this.radius * this.radius
    }
    set area(area) {
        this.radius = Math.sqrt(area / Math.PI)
    }
}

const circle1 = new Circle(10)
console.log(circle1.area) // getter called

circle1.area = 314.159 // setter called
console.log(circle1.radius) // radius updated based on the area set

// Static methods
class MathUtil {
    static add(a, b) {
        return a + b
}
    static subtract(a, b) {
        return a - b
    }
}

console.log(MathUtil.add(5, 3)) // 8
console.log(MathUtil.subtract(5, 3)) // 2

// Static properties
class Counter {
    static count = 0
    constructor() {
        Counter.count++
    }
    static getCount() {
        return Counter.count
    }
}

const c1 = new Counter()
const c2 = new Counter()
console.log(Counter.getCount()) // 2

// Private fields (using #)
class Person {
    #ssn // private field
    constructor(name, ssn) {
        this.name = name
        this.#ssn = ssn
    }
    getSSN() {
        return this.#ssn
    }
}

const person1 = new Person('Alice', '123-45-6789')
console.log(person1.name) // Alice
console.log(person1.getSSN()) // 123-45-6789
// console.log(person1.#ssn) // SyntaxError: Private field '#ssn' must be declared in an enclosing class


