"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice.
//Generics
const toarraygeneric = (a, b, c, d) => {
    return [a, b, c, d];
};
let genericarray = toarraygeneric(1, 2, 3, 4);
console.log(genericarray);
//Generics with diff.types
let toarraydgeneric = (x, y, z) => {
    console.log(`x is ${typeof x} y is ${typeof y} z is ${typeof z}`);
};
toarraydgeneric(1, 'diwa', true);
