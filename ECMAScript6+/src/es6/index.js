// 1. Parametros por defecto (Default params y Concatenacion)

// antes de ES6
function newFunction(name,age,country){
    var _name = name || 'gh'
    var _age = age || '22'
    var _country = country  || 'MX'
    console.log(_name,_age,_country)
}
//newFunction()

//Ahora con ES6
function newFunction2(name='gh', age=22, country='mx'){
    console.log(name,age,country)
}

//newFunction2()
//newFunction2('richard',23,'Co')

// template literals
// antes de ES6
let hello = 'hello'
let world = 'word'
let p = hello + ' ' + world
//console.log(p)

// ahora con ES6
let epic = `${hello} ${world}` // estas son las template literals  ``
//console.log(epic)

////////////////////////////////////////////////////////////////


// 2. Let y const , Multilinea, Spread Operator y Desestructuracion

//Multilinea antes
let lorem = 'Lorem ipsum dolor sit amet.\n' + 'blah blah'
//console.log(lorem)

//ahora con es6

let lorem2 = `Lorem ipsum dolor sit amet.
otro renglon multilinea`
//console.log(lorem2)


// Desestructuracion de elementos
let person = {
    'name': 'oscar',
    'age': '24',
    'country':'MX'
}
//antes
console.log(person.name,person.age)

//ahora es6 Destructuracion
let {name,age,country} = person
console.log(name,age,country)



//Spread Operator
// con ES6; antes se tenia que unir uno por uno.
let team1 = ['Oscar','Julio','Richard']
let team2 = ['Valeria','Jazmin','Oracio']

let education= ['David',...team1, ...team2]

console.log(education)


// Let y Const
// let es una nueva forma  de trabajar con la memoria
{
    var globalvar = 'global var'
}

{
    let globallet = 'global let'
    console.log(globallet) //let solo esta disponible en este bloque de codigo
}
console.log(globalvar)


const a = 'b'
// si queremos reasignar, no nos va a dejar
a= 'a'