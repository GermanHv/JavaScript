var estudiantes = ["Pedro","Cesar","Mario","Julieta"]

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`)
}

while(estudiantes.length >0){
    console.log(estudiantes)
    var quitar  = estudiantes.shift();
    saludarEstudiantes(quitar);
}