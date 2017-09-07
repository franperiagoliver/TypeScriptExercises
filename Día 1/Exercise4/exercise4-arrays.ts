// Exercise 4 - Arrays - Fran Periago.

//Create an array named “list1” with the values 1, 2, 3. Send result to the console.
let list1: Array<Number> = [1, 2, 3];
console.log(list1);

//Create an array named “list2” with values 1,2,3. This time use a generic array. 
// Send result to the console.
let list2 = new Array();
list2.push(1);
list2.push(2);
list2.push(3);
console.log(list2);

//Create an array named “anyList” with values 1,true,”three”. 
//This time use type any to create the array. Send result to the console.
let anyList: Array<any> = [1, true, "three"];
console.log(anyList);

// Create an array named “list3” of type “string” and set its length to 10. 
//Send result to the console.
let list3 = new Array<String>(10);
console.log(list3);