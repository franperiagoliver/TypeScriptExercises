// Exercise 8 - Optional parameters - Fran Periago.

// Crear una función que acepte varios parámetros requeridos y que los muestre por consola utilizando
// la anotación "interpolated". Por ejemplo:  console.log(`nombre: $(atributoNombre) edad: $(atributoEdad)`);
function datosPersona(nombre: string, edad: number) {
    console.log(`Nombre: ${nombre}, edad: ${edad}`);
}
datosPersona("Fran", 18);

// Crear una función con un par de parámetros requeridos y un par de parámetros opcionales (?). 
// Que los muestre por consola utilizando la anotación "interpolated".
function datosPersonaOpcional(nombre: string, surname: string, edad?: number, sexo?: string) {
    console.log(`Nombre: ${nombre}, surname: ${surname} edad: ${edad}, sexo: ${sexo}`);
}
datosPersonaOpcional("Adri", "Sánchez", 18);

// Crear una función con un par de parámetros requeridos y un par de parámetros con valores por defecto. 
// Que los muestre por consola utilizando la anotación "interpolated".
function datosPersonaDefecto(nombre: string, surname: string, edad: number = 18, sexo: string = "H") {
    console.log(`Nombre: ${nombre}, surname: ${surname} edad: ${edad}, sexo: ${sexo}`);
}
datosPersonaDefecto("Maria", "Oliver", 25);