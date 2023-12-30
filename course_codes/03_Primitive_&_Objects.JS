//PRIMITIVES AND OBJECTS IN JAVASCRIPT

// N null
// N Number
// S Symbol
// S String
// B Boolean
// B BigInt 
// U undefined

//Object is a non primitive data type
let a = null;
let b = 345;
let c = "HARSH";
let d = true;
let e = BigInt("998");
let f = undefined;
// let f  it is also undefined
let g = Symbol("I am example of symbol");
console.log(a,b,c,d,e,f,g);
console.log(typeof f);

//objects in js
// Creating an object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Accessing object properties
console.log(person.name); // Output: John
console.log(person["name"]) //output :Jhon
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York

// Modifying object properties
person.age = 35;
console.log(person.age); // Output: 35

// Adding new properties to an object
person.job = "Developer";
console.log(person.job); // Output: Developer

// Deleting properties from an object
delete person.city;
console.log(person.city); // Output: undefined