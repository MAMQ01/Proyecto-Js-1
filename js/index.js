/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img
      class="producto-imagen"
      src="${producto.imagen}"
      alt="${producto.titulo}"
    />
    <div class="producto-detalles">
      <h3 class="producto-titulo">${producto.titulo}</h3>
      <p class="producto-precio">${producto.precio}</p>
      <button class="producto-agregar" id="${producto.id}">Agregar</button>
    </div>
  `;
    contenedorProductos.append(div);
  });
  actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerText = productoCategoria.categoria.nombre;
      const productosBoton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = "Todos los productos";
      cargarProductos(productos);
    }
  });
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

function agregarAlCarrito(e) {
  const id = e.currentTarget.id;
  const productoAgregado = productos.find((producto) => producto.id === id);

  if (productosEnCarrito.some((producto) => producto.id === id)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === id
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }
  actualizarNumerito();
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito;
  console.log(nuevoNumerito);
  console.log(productosEnCarrito);
}

///////////////

/* 
//Creando una clase producto, y un metodo vender
class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  vender() {
    if (this.cantidad > 0) {
      this.cantidad = this.cantidad - 1;
      console.log(this.cantidad);
    } else {
      console.log("Producto agotado");
    }
  }
}
const producto1 = new Producto("monitor", 50000, 50);

console.log(`Agregué el producto ${producto1.nombre}`);

const producto2 = new Producto("mouse", 20000, 10);
console.log(`Agregué el producto ${producto2.nombre}`);

producto2.vender();
console.log(
  `vendí 1 unidad de: ${producto2.nombre}, me quedan ${producto2.cantidad}`
);
producto2.vender();
console.log(
  `vendí 1 unidad de: ${producto2.nombre}, me quedan ${producto2.cantidad}`
);
producto1.vender();
console.log(
  `vendí 1 unidad de: ${producto1.nombre}, me quedan ${producto1.cantidad}`
);

console.log(`Todas las prendas:`,prendas);

// Filtrando prendas con precio menor a 50
const prendasBaratas = prendas.filter(function(prenda) {
  return prenda.precio < 50;
});

console.log(`Prendas con precio menor a 50:`,prendasBaratas);


// Creando un array de objetos con el nombre y precio de cada prenda
const nombreYPrecio = prendas.map(function(prenda) {
  return { nombre: prenda.nombre, precio: prenda.precio };
});

console.log(nombreYPrecio);

// Calculando el precio total de todas las prendas
const precioTotal = prendas.reduce(function(acumulador, prenda) {
  return acumulador + prenda.precio;
}, 0);

console.log(`El precio total de todas las prendas es:`,precioTotal);

// Seleccionando las prendas con precio menor o igual a 50
const prendasSeleccionadas = prendas.filter(function(prenda) {
  return prenda.precio <= 50;
});

// Agregando las prendas seleccionadas al carrito
prendasSeleccionadas.forEach(function(prenda) {
  carrito.push(prenda);
});

console.log(`Agrego las siguientes prendas:`, carrito, `un total de`, carrito.length);
 */

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
