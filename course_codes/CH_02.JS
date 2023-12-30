//CONST,VAR,LET IN JS
//VAR WAS USED BEFORE ES6 ,IT CAN CREATE SOME BUG IN YOUR CODE ,SO WE NEGLECT IT AND USE LET
// VAR CAN BE REDECLARE ,BUT LET OR CONST CANT ,BUT let CAN BE UPDATED const can't

const author = "Harsh"
console.log(author)

// Example usage of let:
let x1 = 10;
console.log(x); // Output: 10

x1 = 20;
console.log(x); // Output: 20

// Example usage of const:
const y1 = 30;
console.log(y1); // Output: 30

// Uncommenting the line below will result in an error because y is a constant and cannot be reassigned
// y1 = 40;


//Example of Block scope

//VAR IS GLOBALLY SCOPED AND LET AND CONST ARE BLOCK SCOPED
//HERE IS THE EXAMPLE OF ABOVE STATEMENT

// Example using var (globally scoped)
var x = 10;

function exampleVar() {
var y = 20;
if (true) {
    var z = 30;
    console.log(x, y, z); // Output: 10 20 30
}
  console.log(x, y, z); // Output: 10 20 30
}

exampleVar();
console.log(x, y, z); // Output: 10 undefined undefined

// Example using let (block scoped)
let a = 10;

function exampleLet() {
let b = 20;
if (true) {
    let c = 30;
    console.log(a, b, c); // Output: 10 20 30}
  console.log(a, b, c); // Output: 10 20 ReferenceError: c is not defined
}

exampleLet();
console.log(a, b, c); // Output: 10 undefined ReferenceError: b is not defined

// Example using const (block scoped)
const PI = 3.14159;

function exampleConst() {
const radius = 5;
if (true) {
    const circumference = 2 * PI * radius;
    console.log(PI, radius, circumference); // Output: 3.14159 5 31.4159
}
  console.log(PI, radius, circumference); // Output: 3.14159 5 ReferenceError: circumference is not defined
}


exampleConst();
console.log(PI, radius, circumference); // Output: 3.14159 undefined ReferenceError: radius is not defined
}
