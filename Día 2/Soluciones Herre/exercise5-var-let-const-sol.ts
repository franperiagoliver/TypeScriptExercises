/*
· Create a few variables with “var”, “let”, and “const”.
· Demonstrate what happens when declaring a variable with “var” in the root and then again inside a block statement like foreach or if(true). 
Here is one possible example:
    if (true) {
        var myVar: number = 444;
    }
    console.log('myVar = ' + myVar);
    
· Demonstrate what happens when doing the same with a variable declared with “let”.
    if (true) {
        let myLet: number = 555;
    }
    console.log('myLet = ' + myLet);
 
· Try changing the value of the constant you created earlier. What happens?
*/
// Vamos!
console.log("Vamos!");

// Create a few variables with “var”, “let”, and “const”.
var myVar: number = 111;
let myLet: number = 222;
const myConst: number = 333;

if (true) {
    var myVar: number = 444;
}
console.log('myVar = ' + myVar);

if (true) {
    let myLet: number = 555;
}
console.log('myLet = ' + myLet);

//myConst = 123;
