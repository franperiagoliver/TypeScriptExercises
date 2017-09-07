/*
· Create an array named “list1” with the values 1, 2, 3. Send result to the console.
· Create an array named “list2” with values 1,2,3. This time use a generic array. Send result to the console.
· Create an array named “anyList” with values 1,true,”three”. This time use type any to create the array. Send result to the console.
· Create an array named “list3” of type “string” and set its length to 10. Send result to the console.
*/
// Vamos!
console.log("Vamos!");

// New array
var list1: number[] = [1, 2, 3];
console.log('list1 array = ' + list1);

// results in the same array as the one above.  This is a style preference.
var list2: Array<number> = [1, 2, 3];
console.log('list2 array = ' + list2);


//Creating an array of type Any.
var anyList: any[] = [1, true, "three"];
console.log('anyList[] = ' + anyList);

// Set the length of an array structure to 10.
var list3:string[] = new Array(10);
console.log('list3 = ' + list3);
  