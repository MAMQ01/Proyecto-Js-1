const productos = [
  {
    id: 1,
    titulo: "Arroz frito",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "Plato principal",
    },
    precio: 8.99,
  },
  {
    id: 2,
    titulo: "Wonton",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Entrada",
      id: "Entrada",
    },
    precio: 4.99,
  },
  {
    id: 3,
    titulo: "Chow Mein de pollo",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "Plato principal",
    },
    precio: 10.99,
  },
  {
    id: 4,
    titulo: "Sopa agripicante",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Sopa",
      id: "Sopa",
    },
    precio: 6.99,
  },
  {
    id: 5,
    titulo: "Dim Sum de cerdo",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Entrada",
      id: "Entrada",
    },
    precio: 7.99,
  },
  {
    id: 6,
    titulo: "Pollo agridulce",
    categoria: {
      nombre: "Plato principal",
      id: "Plato principal",
    },
    precio: 9.99,
  },
  {
    id: 7,
    titulo: "Ternera con brócoli",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "Plato principal",
    },
    precio: 11.99,
  },
  {
    id: 8,
    titulo: "Rollitos de primavera",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Entrada",
      id: "Entrada",
    },
    precio: 5.99,
  },
  {
    id: 9,
    titulo: "Cerdo agridulce",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "Plato principal",
    },
    precio: 10.99,
  },
  {
    id: 10,
    titulo: "Chop suey de vegetales",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "Plato principal",
    },
    precio: 8.99,
  },
  {
    id: 11,
    titulo: "Fideos de huevo",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Acompañamiento",
      id: "Acompañamiento",
    },
    precio: 3.99,
  },
  {
    id: 12,
    titulo: "Ensalada de algas",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Entrada",
      id: "Entrada",
    },
    precio: 6.99,
  },
  {
    id: 13,
    titulo: "Camarones con nueces",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "Plato principal",
    },
    precio: 12.99,
  },
  {
    id: 14,
    titulo: "Tofu con verduras",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "Plato principal",
    },
    precio: 9.99,
  },
  {
    id: 15,
    titulo: "Sopa de fideos de huevo",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Sopa",
      id: "Sopa",
    },
    precio: 5.99,
  },
  {
    id: 16,
    titulo: "Rollo de huevo",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Entrada",
      id: "Entrada",
    },
    precio: 4.99,
  },
  {
    id: 17,
    titulo: "Pollo Kung Pao",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "Plato principal",
    },
    precio: 11.99,
  },
  {
    id: 18,
    titulo: "Arroz frito con camarones",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "Plato principal",
    },
    precio: 13.99,
  },
  {
    id: 19,
    titulo: "Chow Mein de verduras",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Plato principal",
      id: "Plato principal",
    },
    precio: 8.99,
  },
  {
    id: 20,
    titulo: "Sopa wonton",
    imagen: "https://res.cloudinary.com/dicnsypv0/image/upload/v1671488286/polloAsiatic-min_xww15s.png",
    categoria: {
      nombre: "Sopa",
      id: "Sopa",
    },
    precio: 6.99,
  },
];

console.log(productos);