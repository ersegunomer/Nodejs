// This is my first JavaScript code!
let name = 'Omer';
let age = 30;
let isApproved = false;
let firstName = undefined;
let selectedColor = null;

let person = {
  name: 'Omer',
  age: 22,
};

console.log(person);

// Dot Notation
person.name = 'John';

// Bracket Notation
let selection = 'age';
person[selection] = 23;

console.log(name);
console.log(typeof selectedColor);
console.log(person);
console.log(person.name);
console.log(person.age);

// ARRAYS
let selectedColors = ['Red', 'Blue'];
selectedColors[2] = 1;
console.log(selectedColors[0]);
console.log(selectedColors);
console.log(selectedColors.length);

// FUNCTIONS
// Performing a task
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Wick');

// Calculating a value
function square(number) {
  return number * number;
}

console.log(square(2));