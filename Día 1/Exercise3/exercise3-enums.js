// Exercise 3 - Enums - Fran Periago.
// Create an Enum using “Red”, “Green”, and “Blue”.
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
// Create a variable and set it equal to the “Green” enum value.
var greenColor = Colors.Green;
// Create another variable and set it equal to the enum in 0 (zero) position. By default, enums are zero based. 
var redColor = Colors[0];
