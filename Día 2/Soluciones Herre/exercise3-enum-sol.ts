/*
· Create an Enum using “Red”, “Green”, and “Blue”. 
· Create a variable and set it equal to the “Green” enum value.
· Create another variable and set it equal to the enum in 0 (zero) position. By default, enums are zero based. 
· Write to the console the enum integer associated with one of the enum values.
*/
// Vamos!
console.log("Vamos!");

//Create an Enum using “Red”, “Green”, and “Blue”.  This is a commonly used to demonstrate Enums.
enum Color { Red, Green, Blue };

//Create a variable and set it equal to the “Green” enum value.
var myColor: number = Color.Green;
console.log('myColor = ' + myColor);

//Create another variable and set it equal to the enum in 0(zero) position.By default enums are zero based.
var myColor2: string = Color[0];
console.log('myColor2 = ' + myColor2);

