/*
· Recreate the logic below with the ternary operator (?). 
The ternary operator can be used to look for null but what it’s really doing is 
creating conditional logic based on a true/false response. If null then false is returned.

    var myVal: number = null;
    var result: number = null;

    // using an if statement
    if (myVal == null) {
        result = 0;
    }
    else {
        result = myVal;
    }

· Now change the “myVal” variable to equal 5 and execute operation again. Result is now set equal to “myVal” because “myVal” is not null.
*/
// Vamos!
console.log("Vamos!");

var myVal: number = null;
var result: any = null;

// using an if statement
if (myVal == null) {
    result = 0;
}
else {
    result = myVal;
}
console.log('result = ' + result);

// Using a ternary operator to check for null.
result = myVal ? myVal : 0;
console.log('result = myVal ? myVal : 0; // result = ' + result);

myVal = 5;
result = myVal ? myVal : 0;
console.log('result = myVal ? myVal : 0; // result = ' + result);


// Using a ternary operator to evaluate.
result = (myVal == result) ? 'myVal and result both equal ' + result : 'values are not equal';
console.log(result);
