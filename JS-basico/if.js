// condicionales

if(true){
    console.log("hola");
}

// solo valida lo que es verdadero.


if (false){
    console.log("hola")
}
else {
    console.log("No se cumple el if")
}


//
var edad = 18;

if(edad === 18){
    console.log("Felicidades ahora puedes votar");
}
else if (edad>18){
    console.log("puedes votar de nuevo")
}
else{
    console.log("Aun no puedes votar")
}

// operador ternario:

condicion ? true : false;

//ejemplo

var num = 1;

var res = num === 1 ? "Es un 1" : "No, es 1";

console.log(res)