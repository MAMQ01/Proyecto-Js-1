//CODIGO ENTREGA 2

siIngresar = confirm("¿Estás seguro de que deseas continuar a mi sitio Web?");

while (siIngresar == true) {

function calculadora(numero1, numero2, operacion) {
  switch (operacion) {
    case "+":
      return numero1 + numero2;
    case "-":
      return numero1 - numero2;
    case "*":
      return numero1 * numero2;
    case "/":
      return numero1 / numero2;
    default:
      break;
  }
}

do {
  numero1 = parseInt(prompt("Ingresa el número 1"));
} while (isNaN(numero1));
do {
  numero2 = parseInt(prompt("Ingresa el número 2"));
} while (isNaN(numero2));
let operacion = prompt("Ingrese la operacion que desea realizar + - * /");
let resultado;

if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
  alert("Debe ingresar dos números válidos");
} else {
  resultado = calculadora(numero1, numero2, operacion);

  if (resultado === undefined) {
    alert("No ingresó una operación reconocida");
  } else {
    alert(`El resultado es: ${resultado}`);
  }
}
  break;
}

/* const num1 = Number(prompt("Ingresa el primer número:"));
const num2 = Number(prompt("Ingresa el segundo número:"));
const operacion = prompt(
  "Ingresa la operación a realizar (suma, resta, multiplicacion o division):"
);

const calcular = (numero1, numero2, operacion) => {
  let resultado;
  if (operacion === "suma" || operacion === "+") {
    resultado = numero1 + numero2;
  } else if (operacion === "resta" || operacion === "-") {
    resultado = numero1 - numero2;
  } else if (operacion === "multiplicacion" || operacion === "*") {
    resultado = numero1 * numero2;
  } else if (operacion === "division" || operacion === "/") {
    resultado = numero1 / numero2;
  } else {
    resultado = "Operación no válida";
  }
  return resultado;
};

const resultado = calcular(num1, num2, operacion);
console.log(resultado); */

/* const persona1 = {
    nombre: "Manuel",
    apellido: "Muñoz",
    edad: 21,
    direccion: "Av pajarito 54",
    sexo: "Masculino",

};
console.log(persona.apellido) */

/* function Producto(nombre, imagen, precio, descripcion) {
  this.nombre = nombre;
  this.imagen = imagen;
  this.precio = precio;
  this.descripcion = descripcion;
}

const productoNuevo = new Producto("Computadora", "https", 34500, "Una descripcion muy buena")
console.log(productoNuevo); */

/* class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 5;
    }
    vender() { 
        if (this.cantidad > 0) {
            this.cantidad = this.cantidad - 1;
        }else{
            console.log("Producto agotado")
        }
    }
}
const producto1 = new Producto("monitor", 232323)
console.log(producto1)
producto1.vender();
const producto2 = new Producto("monitor samsumg", 100000) */

/* function recorrer(array, funcion){
    for(const item of array){
        funcion(item)
    }
}
recorrer([1,2,3], console.log) */

/* const array1 = [];
const arrayNumero = [1,2,3,11,12,13];
const nombres = ["andres", "camila", "mariano", "andrea"];
const valores = [true, false, true];
const varios = [1, true, "case"];


console.log(array1); //muestra clg de un array vacio []
console.log(arrayNumero); //muestra clg de mis numeros [1,2,n...]
console.log(varios[1]); //trae la posicion que pido   */

/* const productos = [
    {id: 1, nombre: "pantalones", precio:1000 },
    {id: 2, nombre: "Camisa", precio:150 },
    {id: 3, nombre: "Saco", precio:450 },
    {id: 4, nombre: "medias", precio:300 }
];    */

/* let precio = productos.map(item => item.precio);
console.log(precio);

let nuevosPrecios = productos.map(item => {
    return {
        nombre: item.nombre,
        precio: item.precio + 5
    }
}) // Genera una copia del arreglo anterior
console.log(nuevosPrecios); */

/* let nombre = prompt("ingrese el nombre del producto");
let producto = productos.find(item => item.nombre === nombre);

let mensaje = `El producto ${nombre} tiene un precio de ${producto.precio}`;
alert(mensaje); */

/* const nombres = ["andres", "ari"];

nombres.push("mariano")
console.log(nombres ); //agrega elementos al final del array 

nombres.unshift("lucas"); //agrega elementos al inicio
console.log(nombres );

nombres.pop();
console.log(nombres); //elimina elementos al final del array quito mariano

nombres.shift();
console.log(nombres); //elimina elementos al inicio del array quito mariano

nombres.unshift("holaaa");
console.log(nombres); //agrega elementos al inicio del array quito mariano */

/* const nombres = ["andres", "camila", "mariano", "andrea"];
nombres.splice(2, 1) //se para en la primer parametro y elimina el/los parametros especificados 1,2,..n (elimina a mariano)

console.log(nombres); */

/* const nombres = ["juan", "carlos", "jesus"];
console.log(nombres.join(" ")); // une en un unico string y los separa por lo indicado

const animales = ["perro", "gato", "cerdo"];
const varios = nombres.concat(animales);
console.log(varios); //concatena los arreglos   */

/* const nombres = ["andres", "camila", "mariano", "tania", "andrea", "carlos"];
const copia = nombres .slice(2 ,4);// crea copia, el primer parametro partiendo de 0. el segundo parametro hasta el N parametro partiendo de 0. pero pero el N no se incluye por lo tanto llega hasta N-1
console.log(copia); */

/* let num1 = 2
let num2 = 4
let num3 = 111111111111

if (num1 > num2 || num2 > num3){
    console.log("ffdfd");
}

if (num3 > num2){
console.log(num3);
}

let parse = console.log(parseInt(0.000000545454333333)); */
