/*
· Crea una clase con 3 propiedades cualquiera con el tipo que quieras
· Declara un objeto del tipo de la nueva clase y setea cada valor y muestra el objeto en la consola.
· Crea una clase con el nombre "Matematicas" con una función "suma"y un constructor con dos parámetros de tipo numérico cada uno. 
· Crea un objeto de tipo "Matematicas" y muestra por consola el resultado de la llamada a la construcción del objeto y de la función suma.
· Crea una clase "Persona" con las propiedades "nombre","apellidos" y "email". Añade una función "nombreCompleto" que combine el 
nombre y los apellidos.
· Crea un objeto de la clase "Persona", setea los atributos y muestra por consola la llamada a la función "nombreCompleto".
*/

(function() {
    // Vamos!
    console.log("Vamos!");

    // Create a very basic class with only 3 properties.
    // New up an object with your new class as the template and update the properties.
    // Output your new class to the console.

    class myBasicClass {
        property1: number;
        property2: string;
        property3: string;
    }

    var x = new myBasicClass();
    x.property1 = 1;
    x.property2 = 'hi';
    x.property3 = 'number one';

    console.log(x);

    // Create a new "math" class with a constructor that accepts 2 numbers for various task.
    // Add these two numbers and output the results to the screen.
    // Add the add method to add up the two numbers and console.log the answer.
    // new up the new class.
    // Explicitly call the "add" function.

    class Math {
        constructor(a: number, b: number) {
            console.log(`constructor logic: ${(a + b)}`);
        }
        add(a: number, b: number) {
            console.log(`add function: ${(a + b)}`);
        }
    }

    var y: Math = new Math(5, 5);
    y.add(10, 5);


    // Create anothing class "Person" with FirstName, LastName, Email, and
    // a fullName() that returns the first and last names.  Output the result.
    class Person {
        FirstName: string;
        LastName: string;
        Email: string;
        fullName() { return `${this.FirstName}, ${this.LastName}`}
    }

    var z: Person = new Person();
    z.FirstName = 'Robert';
    z.LastName = 'Dunaway';
    
    var fullName = z.fullName();

    console.log(`full name is: ${fullName}`);
    
})();