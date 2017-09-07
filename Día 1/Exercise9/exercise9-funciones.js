// Exercise 9 - Functions - Fran Periago.
// Crear una función simple que dados dos atributos numéricos, los sume. 
// Mostrar el resultado de la llamada por consola.
function simple(n1, n2) {
    return n1 + n2;
}
console.log(simple(1, 2));
// Crear una función "anónima" (var variable = function (parametros...) ) que sume dos números. 
//Mostrar el resultado de la llamada por consola.
var anonima = function (n1, n2) {
    return n1 + n2;
};
console.log(anonima(5, 7));
// Crear una función del tipo "arrow"que haga lo mismo que los dos puntos anteriores. 
// Mostrar resultado por consola.
/*
var variable = (parametros): tipo => {
    return loquesea;
  }
*/
var arrow = function (n1, n2) {
    return n1 + n2;
};
console.log(arrow(8, 9));
