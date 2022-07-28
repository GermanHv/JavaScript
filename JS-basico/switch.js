var num = 1;

switch(num){
    case 1:
        console.log("opcion 1");
        break; // Si este caso se cumple entra break para que no se sigan validando las demas opciones
    case 10:
        console.log("elegiste 10")
        break;
    case 100:
        console.log ("opcion 100");
        break;
    default:
        console.log("Mala opcion");
    }