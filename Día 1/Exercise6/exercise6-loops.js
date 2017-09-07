// Exercise6 - Loops: Diferencias entre los bucles "for in" y "for .. of" - Fran Periago.
// Create a list named “items” and add random values to it then output “items” to the console.
var items = ["Pen", "Glasses", "Bottle"];
console.log(items);
// Create a “for…in” loop over the “items” list and ouput the results to the console. 
for (var itemIn in items) {
    console.log(itemIn);
}
// Create a “for…of” loop over the “items” list and output the results to the console.
for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var itemFor = items_1[_i];
    console.log(itemFor);
}
// NOTE: Notice “for…in” only works against the index of the list while “for…of” 
// works against the value of each item in the list. 
