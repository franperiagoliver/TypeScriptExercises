// Exercise 11 - Classes - Fran Periago.

// Crea una clase con 3 propiedades cualquiera con el tipo que quieras
export class Armario {

    private numPuertas: number;
    private numCajones: number;
    private corbatero: boolean = false;
    private ropa: string;

    public constructor(numPuertas: number, numCajones: number, corbatero: boolean, ropa: string) {
        this.numPuertas = numPuertas;
        this.numCajones = numCajones;
        this.corbatero = corbatero;
        this.ropa = ropa;
     }

     public toString() {
         if(this.corbatero){
            return "El armario tiene " + this.numPuertas + " puertas, "
            + this.numCajones + " cajones y la siguiente ropa: "
            + this.ropa + ". Además dispone de corbatero";
         } else {
            return "El armario tiene " + this.numPuertas + " puertas, "
            + this.numCajones + " cajones y la siguiente ropa: "
            + this.ropa + ".";
         }
     }
}

// Declara un objeto del tipo de la nueva clase y setea cada valor y muestra el objeto en la consola.
let armario = new Armario(2, 3, true, "camiseta Pepe Jean");
console.log(armario.toString());

// Crea una clase con el nombre "Matematicas" con una función "suma" y un constructor con 
// dos parámetros de tipo numérico cada uno. 
export class Matematicas {

    private n1: number;
    private n2: number;

    public constructor(n1: number, n2: number) { 
        this.n1 = n1;
        this.n2 = n2;
    }

    public suma() {
        return this.n1 + this.n2;
    }
}

// Crea un objeto de tipo "Matematicas" y muestra por consola 
// el resultado de la llamada a la construcción del objeto y de la función suma.
let mates = new Matematicas(2, 1);
console.log(mates);
console.log(mates.suma());

// Crea una clase "Persona" con las propiedades "nombre","apellidos" y "email". 
// Añade una función "nombreCompleto" que combine el nombre y los apellidos.
export class Persona {
    
    private nombre: string;
    private apellidos: string;
    private email: string;

    public constructor(nombre: string, apellidos: string, email: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
    };

    public nombreCompleto() {
        return this.nombre + " " + this.apellidos;
    }

    public toString() {
        return `Nombre: ${this.nombre}. Apellidos: ${this.apellidos}. Email: ${this.email}`;
    }
}

// Crea un objeto de la clase "Persona", setea los atributos y muestra por 
// consola la llamada a la función "nombreCompleto".
let persona = new Persona("Fran", "Periago", "fperiago@everis.com");
console.log(persona.toString());
console.log(persona.nombreCompleto());