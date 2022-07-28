// es tipo objeto; lista de datos.

var frutas = ["fresa", "piña","limón", "kiwi"];

console.log(frutas);

// imprime el numero de elementos
console.log(frutas.length);

// imprime la posicion del elemento en la lista
console.log(frutas[3])

// metodos
//agregar o quitar elementos.
var masFrutas = frutas.push("Pera") // push empuja un elemento al final del array
console.log(frutas)

var noFrutas = frutas.pop()

console.log(frutas)

// agregar elemento pero al inicio del array

var frutanueva = frutas.unshift("mango");

console.log(frutas)

// borrar primer elemento. solo borra el primero asi que da igual el nombre que le pongas

var borrarFruta = frutas.shift("kiwi");

console.log(frutas)

// indice, posicion de los elementos.
var posicion = frutas.indexOf("limón")

console.log(posicion)