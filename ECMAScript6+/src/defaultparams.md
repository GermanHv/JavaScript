# Default Params y Concatenación
En ECMAScript 6 ES6 y ES2015 fueron publicadas varias características nuevas que dotaron de gran poder al lenguaje, dos de estas son: parámetros por defecto y plantillas literales.

En qué consisten los parámetros por defecto
Los parámetros por defecto (default params) consisten en establecer un valor por defecto a los parámetros de una función, para asegurar que el código se ejecute correctamente en el caso de que no se establezcan los argumentos correspondientes en la invocación de la función.

Tal como puedes ver en el siguiente código, la función sumar recibe dos parámetros y retorna el valor total. Sin embargo, si alguien no decide poner alguno o todos los parámetros necesarios, pues que el programa no funcionará correctamente.

```js
function sumar(number1, number2){
  return number1 + number2
}

sumar(3,4) //7
sumar(3)    //NaN  
sumar()      // NaN
```
Antes de ES6, se debía establecer una variable y utilizar el operador OR (||) con el valor por defecto necesario. El caracter guion bajo (_) lo utilizo para diferenciar el parámetro de la función de la variable declarada dentro.
```js
function sumar(number1, number2){
  var _number1 = number1 || 0
  var _number2 = number2 || 0
  
  return _number1 + _number2
}

sumar(3,4) // 7
sumar(3)    // 3
sumar()      // 0
```

Con los parámetros por defectos añadidos en ES6, eliminamos las declaraciones para mejorar la legibilidad y el mantenimiento del código de la siguiente manera:
```js
function sumar(number1 = 0, number2 = 0){
  return number1 + number2
}

sumar(3,4) // 7
sumar(3)    // 3
sumar()      // 0
```
Puedes utilizar cualquier valor siempre que sea necesario.

Qué son las plantillas literales
Las plantillas literales (template literals) consisten en crear cadenas de caracteres que puedan contener variables.

Antes de ES6, si querías crear una cadena larga o un mensaje, debías utilizar la concatenación.
```js
var nombre = "Andres"
var edad = 23
var mensaje = "Mi nombre es " + nombre + " y tengo " + edad + " años."

console.log(mensaje)
// 'Mi nombre es Andres y tengo 23 años.'
```
Esto trae varios problemas en la legibilidad y mantenibilidad del código. Se convierte cada vez más complejo en mensajes más extensos o el estar pendiente de agregar espacios antes o después de cada variable concatenada.

Con las plantillas literales añadidas en ES6, emplea el caracter ( ` ), que no es una comilla simple ( ’ ), para envolver el mensaje e incluir las variables con la sintaxis ${variable}.
```js
var nombre = "Andres"
var edad = 23

var mensaje = `Mi nombre es ${nombre} y tengo ${edad} años.`

console.log(mensaje)
// 'Mi nombre es Andres y tengo 23 años.'
```
De esta manera el código es más legible y que pueda mantenerse.
Contribución creada por Andrés Guano.



by Victor Lozada
Para añadir algo mas a esta clase, tambien le podemos asignar un default param a los elementos dentro de un objeto al momento en que estamos haciendo destructuring
```js
const obj = { name:'pepe', lastName: undefined }
const { name, lastname = "perez" } = obj
console.log(name, lastname)
// console output -> pepe perez 
```

Esto es de bastante ayuda en momentos en los que tenemos un funcion que recibe muchos parametros, para evitar confundirnos en la posicion de algun parametro podemos simplemente recibir un solo parametro en la funcion y que este sea un objeto, luego hacemos destructuring para poder obtener sus elementos de manera mas facil.
```js
//Funcion recibiendo todos los parametros  sin un objeto
function saveUser( name, lastName, age, country, city, postalCode, userName, password ){
	//...
}
//Al recibir todos los parametros de esta forma podemos equivocarnos al momento de invocar esta funcion
saveUser('pepe', 'perez', 20, 'Toronto', 'Canada', 0000,  'peperez', '123pass' ) // intercambiamos el parametro Country por el parametro City accidentalmente

//funcion recibiendo solo 1 objeto como parametro
function saveUser({ name, lastName, age, country, city, postalCode = 0000, userName, password }){
	//...
}
saveUser({ name: 'pepe', lastName: "perez", age: 20, city: 'Toronto', country: 'Canada', userName: 'peperez', password:'123pass' })//aqui intercambiamos la posicion de country y city nuevamente, pero esta vez no importa ya que todo se esta pasando dentro de un objeto, adicionalmente no estamos enviando el elemento postalCode pero su valor por defecto es 0000
```
