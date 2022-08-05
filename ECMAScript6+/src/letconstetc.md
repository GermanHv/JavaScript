Las siguientes características de ES6 que aprenderás son: plantilla multilínea, let y const, operador de propagación y desestructuración.

# Let y const, la nueva forma para declarar variables
Hasta ahora aprendiste a declarar variables con var, sin embargo, a partir de la especificación de ES6 se agregaron nuevas formas para la declaración de variables.

Let y const resuelven varios problemas con var como el hoisting, variables globales, re-declaración y re-asignación de variables.

## Scope
En el tema del scope, se diferencian porque let y const tienen un scope de bloque y var no.
```js
{
var nameVar = "soy var"
let nameLet = "soy let"
}

console.log(nameVar) // 'soy var'
console.log(nameLet) // ReferenceError: nameLet is not defined
```

Curso de Closures y Scope en JavaScript
## Objeto global
En variables globales, let y constno guardan sus variables en el objeto global (window, global o globalThis), mientras que var si lo guarda.
```js
var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

globalThis.nameVar   // 'soy var'
globalThis.nameLet   // undefined
globalThis.nameConst  // undefined
```
## Variables re-declaradas y re-asignadas
La re-declaración es volver a declarar una variable, y la re-asignación es volver a asignar un valor, entonces cada variable tiene una forma diferente de manejarlas:

- Una variable declarada con var puede ser re-declarada y re-asignada.
- Una variable declarada con let puede ser re-asignada, pero no re-declarada.
- Una variable declarada con const no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

En conclusión, si intentas re-declarar una variable declarada con let y const habrá un error de “variable ya declarada”; y, si intentas re-asignar una variable declarada con const existirá un error de tipo.

En los demás casos, JavaScript lo aceptará como válidos, algo problemático con var, por eso deja de utilizarlo.
```js
// Declarar y asignar con const
const pi  // SyntaxError: Missing initializer in const declaration.
pi = 3.14
```
```js
// Declaración de variables
var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"
```
```js
// Re-declaración de variables
var nameVar = "var soy" 
console.log(nameVar) // 'var soy'

let nameLet = "let soy" // SyntaxError: Identifier 'nameLet' has already been declared.
```
```js
const nameConst = "const soy" //SyntaxError: Identifier 'nameConst' has already been declared.
// Re-asignación de variables
nameVar = "otro var"
console.log(nameVar) // 'otro var'

nameLet = "otro let"
console.log(nameVar) // otro let'

nameConst = "otro const" //TypeError: Assignment to constant variable.
```
Ten en cuenta que los errores pararán la ejecución de tu programa.

## Plantilla multilínea
La plantilla multilínea consiste en crear mensajes que contengan varias líneas separadas entre sí, utilizando las plantillas literales.

Antes de ES6, la forma de crear una plantilla multilínea era agregar \n al string.
```js
var mensaje = "Línea 1 \n" + "línea 2"

console.log(mensaje)
// 'Línea 1
// línea 2'
```

Con ES6 solamente necesitas utilizar las plantillas literales.

```js
const mensaje = `Línea 1
línea 2`

console.log(mensaje)
// 'Línea 1
// línea 2'
```

## Desestructuración
La desestructuración (destructuring) consiste en extraer los valores de arrays o propiedades de objetos en distintas variables.

### Desestructuración de objetos
La desestructuración de objetos consiste en extraer las propiedades de un objeto en variables, utilizando el mismo nombre de la propiedad en el objeto con la siguiente sintaxis:
```js
const objeto = { prop1: "valor1", prop2: "valor2", ... } 

// Desestructuración
const { prop1, prop2 } = objeto
```
Antes de ES6, necesitabas acceder al objeto con la notación punto o corchetes por cada propiedad que se necesita y asignar ese valor a una variable diferente.
```js
var usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

var nombre = usuario.nombre
var edad = usuario.edad
var plataforma = usuario["plataforma"]

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'
```
Con la desestructuración puedes realizar lo mismo, pero en una sola línea, provocando que el código seas más legible y mantenible.
```js
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre, edad, plataforma } = usuario

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'
```
Cambiar el nombre de las variables con desestructuración
Si no te agrada el nombre de la propiedad del objeto, puedes cambiarlo utilizando la siguiente sintaxis:
```js
const objeto = { prop1: "valor1", prop2: "valor2", ... } 

// Desestructuración
const { prop1: newProp1, prop2: newProp2 } = objeto
```
Por ejemplo:
```js
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre: name, edad: age, plataforma: platform } = usuario

console.log(name)  // 'Andres' 
console.log(age)  // 23
console.log(platform)  // 'Platzi'

console.log(nombre)   // Uncaught ReferenceError: nombre is not defined
```
### Desestructuración en parámetros de una función
Si envías un objeto como argumento en la invocación a la declaración de una función, puedes utilizar la desestructuración en los parámetros para obtener los valores directamente. Ten en cuenta que el nombre debe ser igual a la propiedad del objeto.
```js
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

function mostrarDatos( { nombre, edad, plataforma } ){
    console.log(nombre, edad, plataforma) 
}

mostrarDatos(usuario) // 'Andres', 23, 'Platzi'
```
### Desestructuración de arrays
La desestructuración de objetos consiste en extraer los valores de un objeto en variables, utilizando la misma posición del array con una sintaxis similar a la desestructuración de objetos.
```js
const array = [ 1, 2, 3, 4, 5 ]

// Desestructuración
const [uno, dos, tres ] = array

console.log(uno) // 1
console.log(dos) // 2
console.log(tres) // 3
```

#### Desestructuración para valores retornados de una función
Cuando una función retorna un array, puedes guardarlo en una variable por medio de la invocación. Por ende, puedes utilizar la desestructuración para utilizar esos valores por separado de manera legible.

En el siguiente ejemplo, la función useState retorna un array con dos elementos: un valor y otra función actualizadora.
```js
function useState(value){
    return [value, updateValue()]
}

//Sin desestructuración 
const estado = useState(3)
const valor = estado[0]
const actualizador = estado[1]

//Con desestructuración 
const [valor, actualizador] = useState(3)
```
#### Lo que puedes hacer con desestructuración, pero no es recomendable
Si necesitas un elemento en cierta posición, puedes utilizar la separación por comas para identificar la variable que necesitas.
```js
const array = [ 1, 2, 3, 4, 5 ]

const [ ,,,,  cinco ] = array

console.log(cinco) // 5
```
Como los arrays son un tipo de objeto, puedes utilizar la desestructuración de objetos mediante el índice y utilizando un nombre para la variable.
```js
const array = [ 1, 2, 3, 4, 5 ]

const {4: cinco} = array

console.log(cinco) // 5
```

## Operador de propagación
El operador de propagación (spread operator), como su nombre lo dice, consiste en propagar los elementos de un iterable, ya sea un array o stringm utilizando tres puntos (...) dentro de un array.
```js
// Para strings
const array = [ ..."Hola"]    // [ 'H', 'o', 'l', 'a' ]

// En arrays
const otherArray = [ ...array]   //[ 'H', 'o', 'l', 'a' ]
```
También se utiliza para objetos, pero esta característica fue añadida en versiones posteriores de ECMAScript y es denominada *Spread properties.

Copiar arrays utilizando el operador de propagación
Si quieres realizar una copia de una array, deberás tener cuidado de la referencia en memoria. Los arrays se guardan en una referencia en memoria, al crear una copia, la copia tendrá la misma referencia que el original, por lo que si cambias algo en la copia, también lo harás en el original.
```js
const originalArray = [1,2,3,4,5]
const copyArray = originalArray
copyArray[0] = 0

originalArray // [0,2,3,4,5]
originalArray === copyArray  // true
```
Para evitar esto, utiliza el operador de propagación para crear una copia del array que utilice una refencia en memoria diferente al original.
```js
const originalArray = [1,2,3,4,5]
const copyArray = [...originalArray]
copyArray[0] = 0

originalArray // [1,2,3,4,5]
copyArray // [0,2,3,4,5]
originalArray === copyArray  // false
```
Unir arrays y añadir elementos con el operador de propagación
Para unir dos arrays con el operador de propagación, simplemente debes separarlos por comas en un array.
```js
const array1 = [1,2,3]
const number = 4
const array2 = [5,6,7]

const otherArray = [ ...array1, number, ...array2 ]

otherArray // [1,2,3,4,5,6,7]
```
Ten cuidado con la copia para diferentes niveles de profundidad
El operador de propagación sirve para crear una copia en un solo nivel de profundidad, esto quiere decir que si existen objetos o arrays dentro del array a copiar. Entonces los sub elementos en cada nivel, tendrán la misma refencia en la copia y en el original.
```js
const originalArray = [1, [2,3] ,4,5]
const copyArray = [...originalArray]

originalArray[1] === copyArray[1] // true
```
La manera de solucionar es más compleja, tendrías que utilizar el operador de propagación para cada elemento en cada nivel de profundidad.

Sin embargo, recientemente salió una forma de crear una copia profunda con [https://developer.mozilla.org/en-US/docs/Web/API/structuredClone](StructuredClone), aunque es una característica muy reciente, así que revisa que navegadores tienen soporte.
```js
const originalArray = [1, [2,3] ,4,5]
const copyArray = structuredClone(originalArray)

originalArray === copyArray  // false
originalArray[1] === copyArray[1] // 
```
Contribución creada por Andrés Guano.


Con respecto al spread operator, si tenemos arreglos con valores duplicados como:
```js
let team1 = ['oscar', 'andres', 'ricardo']
let team2 = ['andres', 'yesica', 'camila']
```
*Notese que team1 y tem2 contienen a “andres”.

Y si creamos un nuevo arreglo de la siguiente forma:
```js
let education = ['Carolina', ...team1, ...team2]
```
Obtendremos un arreglo con el valor “andres” duplicado.

Así que 👀
Una forma de quitar estos duplicados es con Set.
```js
let education2 = [...new Set(['Carolina', ...team1, ...team2])]
```
Y con esto logramos tener un arreglo sin duplicados
by Andrés Felipe Mesa David