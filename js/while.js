console.log(`Archivo de bucle white cargado`)
//git init para iniciar el repositorio
//git add . para llevar a la zona stage mis cambios 
// gir fetch para preguntar si hay cambios en la nube
// git push es para enviar los cambios en el local hacia la nube
// git pull origin main


// console.log ("Estamos contando 1")
// console.log ("Estamos contando 2")
// console.log ("Estamos contando 3")
// console.log ("Estamos contando 4")
// console.log ("Estamos contando 5")
// console.log ("Estamos contando 6")
// console.log ("Estamos contando 7")
// console.log ("Estamos contando 8")
// console.log ("Estamos contando 9")
// console.log ("Estamos contando 10")

//esto tiene muchas lineas de codigo, imaginate que tenga 250 productos

let counter = 1

while (counter <= 10) {
    //lineas de codigo a repetir segun las veces que iteremos (repitamos)
    //entre parentesis tenemos que poner la condicion para que se realice esto
    console.log(`Estamos contando ${counter}`)

    counter = counter + 1

}

/* EJERCICIO 1
Solicitar al usuario un número a través de un prompt empezando desde 1 e ir incrementando este valor de a 1 a medida que recorremos todos los números enteros anteriores e incluído el ingresado por el usuario. Quiero hacer un log de aquellos que son múltiplos de 7
El log debe ser : el número X es múltiplo de 7


EJERCICIO 2
Solicitar a una maestra que ingresa las calificaciones de sus alumnos, pedir constantemente las notas hasta que la maestra ingrese un 0 como valor. En ese momento saldremos de nuestro bucle e imprimiremos el promedio del curso según las notas ingresadas

*/

let nota //= parseInt (prompt("Ingrese la calificacion del alumno"))
let cantidadNotas = 0;
let acumuladoNotas = 0;

if(nota > 0){
    cantidadNotas++;
    acumuladoNotas += nota;
}

do{

    nota = parseInt (prompt("Ingrese la calificacion del alumno"));

}while(nota !== 0)

const promedio = acumuladoNotas/cantidadNotas

console.log(`El promedio de notas es de: ${promedio}`)