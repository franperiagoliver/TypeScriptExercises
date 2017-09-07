/*
· Crear una función simple que dados dos atributos numéricos, los sume. Mostrar  el resultado de la llamada por consola.
· Crear una función "anónima" (var variable = function (parametros...) ) que sume dos números. Mostrar el resultado 
de la llamada por consola.
· Crear una función del tipo "arrow"que haga lo mismo que los dos puntos anteriores. Mostrar resultado por consola
var variable = (parametros): tipo => {
  return loquesea;
}

*/
// Vamos!
console.log("Vamos!");

// Create a simple 'add' function.
function add(a: number, b: number): number {
    return a + b;
}
console.log('named function');
console.log('5 + 2 = ' + add(5, 2));

// Create an ananymous 'add' function.
var add2 = function (a: number, b: number): number {
    return a + b;
}
console.log('anonymous function');
console.log('5 + 5 = ' + add2(5, 5));

// Create a function using the arrow function.
var add3 = (a: number, b: number): number => {
    return a + b;
}
console.log('arrow function');
console.log('10 + 5 = ' + add3(10, 5));
