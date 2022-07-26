var Sistema = "Sistema Solar";

function Planeta(){
    var Tierra = "Tierra";
    console.log ("La "+Tierra+"esta en el "+Sistema);
}

Planeta();

Tierra(); //undefined, ya que esa variable esta dentro de la funcion