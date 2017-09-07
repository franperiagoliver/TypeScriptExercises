"use strict";
// Exercise 11 - Classes - Fran Periago.
exports.__esModule = true;
// Crea una clase con 3 propiedades cualquiera con el tipo que quieras
var Armario = /** @class */ (function () {
    function Armario(numPuertas, numCajones, corbatero, ropa) {
        this.corbatero = false;
        this.numPuertas = numPuertas;
        this.numCajones = numCajones;
        this.corbatero = corbatero;
        this.ropa = ropa;
    }
    Armario.prototype.toString = function () {
        if (this.corbatero) {
            return "El armario tiene " + this.numPuertas + " puertas, "
                + this.numCajones + " cajones y la siguiente ropa: "
                + this.ropa + ". Además dispone de corbatero";
        }
        else {
            return "El armario tiene " + this.numPuertas + " puertas, "
                + this.numCajones + " cajones y la siguiente ropa: "
                + this.ropa + ".";
        }
    };
    return Armario;
}());
exports.Armario = Armario;
// Declara un objeto del tipo de la nueva clase y setea cada valor y muestra el objeto en la consola.
var armario = new Armario(2, 3, true, "camiseta Pepe Jean");
console.log(armario.toString());
// Crea una clase con el nombre "Matematicas" con una función "suma" y un constructor con 
// dos parámetros de tipo numérico cada uno. 
var Matematicas = /** @class */ (function () {
    function Matematicas(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    }
    Matematicas.prototype.suma = function () {
        return this.n1 + this.n2;
    };
    return Matematicas;
}());
exports.Matematicas = Matematicas;
// Crea un objeto de tipo "Matematicas" y muestra por consola 
// el resultado de la llamada a la construcción del objeto y de la función suma.
var mates = new Matematicas(2, 1);
console.log(mates);
console.log(mates.suma());
// Crea una clase "Persona" con las propiedades "nombre","apellidos" y "email". 
// Añade una función "nombreCompleto" que combine el nombre y los apellidos.
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, email) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
    }
    ;
    Persona.prototype.nombreCompleto = function () {
        return this.nombre + " " + this.apellidos;
    };
    Persona.prototype.toString = function () {
        return "Nombre: " + this.nombre + ". Apellidos: " + this.apellidos + ". Email: " + this.email;
    };
    return Persona;
}());
exports.Persona = Persona;
// Crea un objeto de la clase "Persona", setea los atributos y muestra por 
// consola la llamada a la función "nombreCompleto".
var persona = new Persona("Fran", "Periago", "fperiago@everis.com");
console.log(persona.toString());
console.log(persona.nombreCompleto());
