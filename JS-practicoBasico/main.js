console.log("Hello, world")

// La buena forma es crear variables para cada selector

const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafoclase = document.querySelector('.parrafoclase')
const parrafoid = document.querySelector('#parrafoid')
const input = document.querySelector('input')

// en css pasa lo mismo en este caso JS
/* 
console.log(input.value)

console.log({
    h1,
    p,
    parrafoclase,
    parrafoid,
    input
})
 */
/* h1.innerHTML = "Estoy ocupado <br> vuelva pronto";
h1.innerText = "Estoy ocupado <br> vuelva pronto";
console.log(h1.getAttribute('comida'))
console.log(h1.getAttribute('class'))

// MODIFICA CLASE

h1.setAttribute('class', 'red')
console.log(h1.getAttribute('class'))


h1.classList.add('amarillo')
console.log(h1.getAttribute('class'))

h1.classList.remove('red')

console.log(h1.getAttribute('class'))
// h1.classList.toggle('verde');  Agrega y quita independiente si la tiene o no cada vez que se ejecute

// h1.classList.contains('verde');  nos regresa un true o false si contiene ese atributo.

// modificando el valor de input.

input.value='8543'


// creando elemento desde 0

console.log(document.createElement('img'))

const img = document.createElement('img')

img.setAttribute('src','https://images.freeimages.com/images/large-previews/9bd/buddha-4-1142506.jpg')

console.log(img)

parrafoid.append(img); */


// Creando eventos 

const input1 = document.querySelector('#calculo')
const input2 = document.querySelector('#calculo1')
const btn = document.querySelector ('bcalc')

const presult = document.querySelector('#result')

// function btnOnClick(){
//     console.log("Diste click al boton")
//     const sumaInputs= +input1.value + +input2.value
//     presult.innerText = "Resultado : " + sumaInputs;} 
// tenemos que convertir los .value en numeros para que no sea una concatenacion.


// Utilizando addEventListener
const form = document.querySelector('#form')
const btn1 = document.querySelector('#btcalc')

// btn1.addEventListener('click', btnOnClick)
 form.addEventListener('submit', sumarInputValues)

 function sumarInputValues(event){
    console.log(event)
    console.log({event})
    event.preventDefault()
    console.log("Diste click al boton")
    const sumaInputs= +input1.value + +input2.value
    presult.innerText = "Resultado : " + sumaInputs;}