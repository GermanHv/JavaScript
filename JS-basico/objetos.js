var coche = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleCoche: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
        
};

console.log(coche)

console.log(coche.modelo)

console.log(coche.detalleCoche())

coche.detalleCoche()

