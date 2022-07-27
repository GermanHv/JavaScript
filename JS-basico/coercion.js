/* Coercion implicita */

// es una concatenacion
var a = 4+"7";
// undefined
typeof a;
//"string"
// a = "47"


var b= 4* "7";
//28

typeof b
// "number"

/* Coercion explicita */

var a= 20
var c= String(a);
typeof a
//"string"
var d = Number(c);
typeof d
// "number"

