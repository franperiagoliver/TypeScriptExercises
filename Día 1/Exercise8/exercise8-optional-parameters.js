// Exercise 8 - Optional parameters - Fran Periago.
// Crear una función que acepte varios parámetros requeridos y que los muestre por consola utilizando
// la anotación "interpolated". Por ejemplo:  console.log(`nombre: $(atributoNombre) edad: $(atributoEdad)`);
function datosPersona(nombre, edad) {
    console.log("Nombre: " + nombre + ", edad: " + edad);
}
datosPersona("Fran", 18);
// Crear una función con un par de parámetros requeridos y un par de parámetros opcionales (?). 
// Que los muestre por consola utilizando la anotación "interpolated".
function datosPersonaOpcional(nombre, surname, edad, sexo) {
    console.log("Nombre: " + nombre + ", surname: " + surname + " edad: " + edad + ", sexo: " + sexo);
}
datosPersonaOpcional("Adri", "Sánchez", 18);
// Crear una función con un par de parámetros requeridos y un par de parámetros con valores por defecto. 
// Que los muestre por consola utilizando la anotación "interpolated".
function datosPersonaDefecto(nombre, surname, edad, sexo) {
    if (edad === void 0) { edad = 18; }
    if (sexo === void 0) { sexo = "H"; }
    console.log("Nombre: " + nombre + ", surname: " + surname + " edad: " + edad + ", sexo: " + sexo);
}
datosPersonaDefecto("Maria", "Oliver", 25);
