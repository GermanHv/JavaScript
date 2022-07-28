function auto( marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var coche1 = new auto("Tesla","Model 3","2020");
var coche2 = new auto("Lambo","Veneno","2020");
var coche3 = new auto("Toyota","Corolla","2020")

console.log(coche1)
console.log(coche2)
console.log(coche3)


// Forma de automatizar la entrada de nuevos autos

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 3 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
// este ciclo me imprime al final de terminar de registrarlos
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }