const carrito = [];

const prendas = [
  { nombre: "Camisa", precio: 20, descripcion: "Camisa de manga corta" },
  { nombre: "Pantalón", precio: 40, descripcion: "Pantalón de vestir" },
  { nombre: "Chaqueta", precio: 80, descripcion: "Chaqueta de cuero" },
  { nombre: "Vestido", precio: 60, descripcion: "Vestido de noche" },
  { nombre: "Zapatos", precio: 50, descripcion: "Zapatos de tacón" },
  { nombre: "Sombrero", precio: 30, descripcion: "Sombrero de ala ancha" },
  { nombre: "Bufanda", precio: 15, descripcion: "Bufanda de lana" },
  { nombre: "Gorra", precio: 25, descripcion: "Gorra deportiva" },
  { nombre: "Calcetines", precio: 5, descripcion: "Calcetines deportivos" },
  { nombre: "Chaleco", precio: 70, descripcion: "Chaleco acolchado" },
];


const productos = [
  {
    id: 1,
    titulo: "Arroz frito",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "platos-principales",
    },
    precio: 8.99,
  },
  {
    id: 2,
    titulo: "Wonton",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Entrada",
      id: "entradas",
    },
    precio: 4.99,
  },
  {
    id: 3,
    titulo: "Chow Mein de pollo",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "platos-principales",
    },
    precio: 10.99,
  },
  {
    id: 4,
    titulo: "Sopa agripicante",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Sopa",
      id: "sopas",
    },
    precio: 6.99,
  },
  {
    id: 5,
    titulo: "Dim Sum de cerdo",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Entrada",
      id: "entradas",
    },
    precio: 7.99,
  },
  {
    id: 6,
    titulo: "Pollo agridulce",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "platos-principales",
    },
    precio: 9.99,
  },
  {
    id: 7,
    titulo: "Ternera con brócoli",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "platos-principales",
    },
    precio: 11.99,
  },
  {
    id: 8,
    titulo: "Rollitos de primavera",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Entrada",
      id: "entradas",
    },
    precio: 5.99,
  },
  {
    id: 9,
    titulo: "Cerdo agridulce",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "platos-principales",
    },
    precio: 10.99,
  },
  {
    id: 10,
    titulo: "Chop suey de vegetales",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "platos-principales",
    },
    precio: 8.99,
  },
  {
    id: 11,
    titulo: "Fideos de huevo",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Acompañamiento",
      id: "acompañamientos",
    },
    precio: 3.99,
  },
  {
    id: 12,
    titulo: "Ensalada de algas",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Entrada",
      id: "entradas",
    },
    precio: 6.99,
  },
  {
    id: 13,
    titulo: "Camarones con nueces",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "platos-principales",
    },
    precio: 12.99,
  },
  {
    id: 14,
    titulo: "Tofu con verduras",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "platos-principales",
    },
    precio: 9.99,
  },
  {
    id: 15,
    titulo: "Sopa de fideos de huevo",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Sopa",
      id: "sopas",
    },
    precio: 5.99,
  },
  {
    id: 16,
    titulo: "Rollo de huevo",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Entrada",
      id: "entradas",
    },
    precio: 4.99,
  },
  {
    id: 17,
    titulo: "Pollo Kung Pao",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "plato principal",
    },
    precio: 11.99,
  },
  {
    id: 18,
    titulo: "Arroz frito con camarones",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "plato principal",
    },
    precio: 13.99,
  },
  {
    id: 19,
    titulo: "Chow Mein de verduras",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "platos-principales",
    },
    precio: 8.99,
  },
  {
    id: 20,
    titulo: "Sopa wonton",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Sopa",
      id: "sopas",
    },
    precio: 6.99,
  },
];

console.log(productos);



function cargarProductos() {

}