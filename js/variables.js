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
    id: "Arroz-frito",
    titulo: "Arroz frito",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Platos principales",
      id: "platos-principales",
    },
    precio: 8.99,
  },
  {
    id: "Wonton",
    titulo: "Wonton",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Entradas",
      id: "entradas",
    },
    precio: 4.99,
  },
  {
    id: "Chow-Mein-de-pollo",
    titulo: "Chow Mein de pollo",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Platos principales",
      id: "platos-principales",
    },
    precio: 10.99,
  },
  {
    id: "Sopa-agripicante",
    titulo: "Sopa agripicante",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Sopas",
      id: "sopas",
    },
    precio: 6.99,
  },
  {
    id: "Dim-Sum-de-cerdo",
    titulo: "Dim Sum de cerdo",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Entradas",
      id: "entradas",
    },
    precio: 7.99,
  },
  {
    id: "Pollo-agridulce",
    titulo: "Pollo agridulce",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Platos principales",
      id: "platos-principales",
    },
    precio: 9.99,
  },
  {
    id: "Ternera-con-brócoli",
    titulo: "Ternera con brócoli",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Platos principales",
      id: "platos-principales",
    },
    precio: 11.99,
  },
  {
    id:"Rollitos-de-primavera",
    titulo: "Rollitos de primavera",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Entradas",
      id: "entradas",
    },
    precio: 5.99,
  },
  {
    id:"Cerdo-agridulce",
    titulo: "Cerdo agridulce",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Platos principales",
      id: "platos-principales",
    },
    precio: 10.99,
  },
  {
    id: "Chop-suey-de-vegetales",
    titulo: "Chop suey de vegetales",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Platos principales",
      id: "platos-principales",
    },
    precio: 8.99,
  },
  {
    id: "Fideos-de-huevo",
    titulo: "Fideos de huevo",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Acompañamientos",
      id: "acompañamientos",
    },
    precio: 3.99,
  },
  {
    id: "Ensalada-de-algas",
    titulo: "Ensalada de algas",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Entradas",
      id: "entradas",
    },
    precio: 6.99,
  },
  {
    id: "Camarones-con-nueces",
    titulo: "Camarones con nueces",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Platos principales",
      id: "platos-principales",
    },
    precio: 12.99,
  },
  {
    id: "Tofu-con-verduras",
    titulo: "Tofu con verduras",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Platos principales",
      id: "platos-principales",
    },
    precio: 9.99,
  },
  {
    id: "Sopa-de-fideos-de-huevo",
    titulo: "Sopa de fideos de huevo",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Sopas",
      id: "sopas",
    },
    precio: 5.99,
  },
  {
    id: "Rollo-de-huevo",
    titulo: "Rollo de huevo",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Entradas",
      id: "entradas",
    },
    precio: 4.99,
  },
  {
    id: "Pollo-Kung-Pao",
    titulo: "Pollo Kung Pao",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Platos principales",
      id: "platos-principales",
    },
    precio: 11.99,
  },
  {
    id: "Arroz-frito-con-camarones",
    titulo: "Arroz frito con camarones",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Platos principales",
      id: "platos-principal",
    },
    precio: 13.99,
  },
  {
    id: "Chow-Mein-de-verduras",
    titulo: "Chow Mein de verduras",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Platos Principales",
      id: "platos-principales",
    },
    precio: 8.99,
  },
  {
    id: "Sopa-wonton",
    titulo: "Sopa wonton",
    imagen:
      "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "sopas",
      id: "sopas",
    },
    precio: 6.99,
  },
];

