var estudiantes = ["Pedro","Cesar","Mario","Julieta"]

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`)
}
// 1er opcion
/* for(var i =0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
} */

// 2da opcion
for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}