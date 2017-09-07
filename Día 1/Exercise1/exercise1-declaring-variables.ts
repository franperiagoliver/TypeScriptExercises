// Exercise 1 - Declaring variables - Fran Periago.

// Crear las variables “variableA”, “variableB”, y “variableC” de tipo number. 
// Inicialízalas con valores por defecto, como por ejemplo 2, 3 y 4.

let variableA: number = 2;
let variableB: number = 3;
let variableC: number = 4;

// Crea una variable "inferred", es decir, que no tiene tipo. Con un valor por defecto que podría ser 5.

let inferredVariable = 5;

// Crea otra variable cuyo tipo es definido pero no se inicializa a ningún valor.

let definedVariable: any;

// Muestra el contenido de las variables por consola.

console.log("Number variables: " + variableA + variableB + variableC);
console.log("Inferred variable: " + inferredVariable);
console.log("Defined variable: " + definedVariable);