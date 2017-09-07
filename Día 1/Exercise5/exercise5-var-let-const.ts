// Exercise 5 - Var, let and const - Fran Periago.

// Create a few variables with “var”, “let”, and “const”.
var myVar: number = 5;
let myLet: number = 10;
const lifesOfCats = 7;

/*
Demonstrate what happens when declaring a variable with “var” in the root and then 
again inside a block statement like foreach or if(true). 
Here is one possible example:
    if (true) {
        var myVar: number = 444;
    }
    console.log('myVar = ' + myVar);
*/
if (true) {
    var myVar: number = 444;
}
console.log('myVar = ' + myVar); 

// ** The value of the variable changes.

/*
Demonstrate what happens when doing the same with a variable declared with “let”.
    if (true) {
        let myLet: number = 555;
    }
    console.log('myLet = ' + myLet);
*/
if (true) {
    let myLet: number = 555;
}
console.log('myLet = ' + myLet); 

// ** The value of the variable doesn't change.

//Try changing the value of the constant you created earlier. What happens?

// lifesOfCats = 9;

// ** Cannot be reasigned the value of a constant.
