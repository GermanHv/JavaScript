//Ejemplos en los que Boolean devuelve Falso:
Boolean(); //false
Boolean(0); //false tener cuidado con los números negativos. Sólo el 0 es false.Cualquier otro número incluso los negativos es true
Boolean(null); //false
Boolean(NaN); // false Not a Number
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false string vacio

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean(-1); //TRUE!
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también
Boolean(true);

Boolean("false"); // ? = true!