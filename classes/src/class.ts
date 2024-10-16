class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
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
const toarraygeneric = <T>(a:T,b:T,c:T,d:T) =>{
  return [a,b,c,d]
}
let genericarray = toarraygeneric<number>(1,2,3,4)

console.log(genericarray)

//Generics with diff.types
let toarraydgeneric = <a,b,c>(x:a,y:b,z:c) =>{
  console.log(`x is ${typeof x} y is ${typeof y} z is ${typeof z}`)
}
toarraydgeneric(1,'diwa',true)