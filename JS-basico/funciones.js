// Funciones Declarativas

function miFuncion(){
    return 4;
}

miFuncion();
// Funciones de Expresion o anonimas

var otraFuncion = function(a,b){
    return a + b;
}

otraFuncion();

// ________________________________________

function saludarEstudiante (estudiante) {
    console.log(`Hola estudiante ${estudiante}`);
}

console.log("German");

// Suma

function sumar(a,b){
    var resultado=a+b;
    return resultado;
}
sumar(2,1);