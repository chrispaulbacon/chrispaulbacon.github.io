console.log("Hey I'm Chris P. Bacon")

let name = 'Job';
console.log(name);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//cannot be a reserved keyword
//should be meaningful
//cannot start with a number ex: 1name
//cannot contain a space or hypen(-)
//are case-sensitive

/*
let name = 'Job'; //this is a string literal
let age = 30; //number literal
let isApproved = false; //Boolean Literal
let firstName = undefined;
let selectedColor = null; // use null to explicitly clear a variable
*/

let person = {
    name: 'Maureen',
    age: 30
};

//Dot Notation
person.name = 'josh';

/*//bracket notation
let selection = 'name';
person[selection] = 'anselmo';
*/

console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 2;
console.log(selectedColors);
console.log(selectedColors.length);

function greet() {
    console.log('Hello World');
}

greet();