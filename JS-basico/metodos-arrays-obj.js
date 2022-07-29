var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2599},
    {nombre: "Libro", costo: 234},
    {nombre: "celular", costo: 4322},
    {nombre: "laptop", costo: 10000},
    {nombre: "escritorio", costo: 2000}
]




// metodo filter nos permite filtrar solo los elementos que deseamos (según ciertos criterios) y devolverlos en un nuevo array.

var articulosFiltrados = articulos.filter(function(articulo){
return articulo.costo <= 3000
});

// console.log(articulosFiltrados)
        /* RESULTADO
[
  { nombre: 'Bici', costo: 3000 },
  { nombre: 'TV', costo: 2599 },
  { nombre: 'Libro', costo: 234 },
  { nombre: 'escritorio', costo: 2000 }
]
        */




// metodo map : crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

// console.log(nombreArticulos)

/* RESULTADO
[ 'Bici', 'TV', 'Libro', 'celular', 'laptop', 'escritorio' ]
*/




// metodo find: nos ayuda a encontrar algo en especifico dentro del array
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Libro"
})

 // console.log(encuentraArticulo)

 /* RESULTADO
 { nombre: 'Libro', costo: 234 }
 */




// metodo forEach: no me genera un array si no que toma el original y lo filtra sin modificarlo.

/*  articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})
 */

/* RESULTADO
Bici
TV
Libro
celular
laptop
escritorio
*/



// metodo some: regresa una validacion de true o false, generando un nuevo array

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
})

// console.log(articulosBaratos)

/* RESULTADO
true
*/



// regresa un true, osea que si hay articulos en mi lista que cumplen esa condicion.

// Todos los metodos no modifican el array original


//console.table(articulos)

/* RESULTADO DE console.table 
┌─────────┬──────────────┬───────┐
│ (index) │    nombre    │ costo │
├─────────┼──────────────┼───────┤
│    0    │    'Bici'    │ 3000  │
│    1    │     'TV'     │ 2599  │
│    2    │   'Libro'    │  234  │
│    3    │  'celular'   │ 4322  │
│    4    │   'laptop'   │ 10000 │
│    5    │ 'escritorio' │ 2000  │
└─────────┴──────────────┴───────┘
*/