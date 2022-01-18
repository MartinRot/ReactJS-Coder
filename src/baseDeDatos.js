export const products = [
    {
      id: 0,
      name: "NIKE AIR FORCE LOW",
      description: "Estas zapatillas estan buenisimas",
      price: 10220,
      img: "https://images.unsplash.com/photo-1597949992171-689c5673b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
    },
    {
      id: 1,
      name: "NIKE AIR YEEZY ZEN GREY",
      description: "Estas zapatillas estan buenisimas",
      price: 7820,
      img: "https://images.unsplash.com/photo-1580894529660-d55c66eefee7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"  
    },
    {
      id: 2,
      name: "ADIDAS RESPONSE CL BEIGE",
      description: "Estas zapatillas estan buenisimas",
      price: 9675,
      img: "https://images.unsplash.com/photo-1580902394724-b08ff9ba7e8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 3,
      name: "NEW BALANCE 237 HIGHER LEARNIN MARRON",
      description: "Estas zapatillas estan buenisimas",
      price: 3458,
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    {
      id: 4,
      name: "CONVERSE PRO LEATHER HI GRIS",
      description: "Estas zapatillas estan buenisimas",
      price: 9999,
      img: "https://images.unsplash.com/photo-1554192833-a5cd504427dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 5,
      name: "PUMA SUEDE SANTA CRUZ SHARK VERDE",
      description: "Estas zapatillas estan buenisimas",
      price: 9999,
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    }
];

//Simula la peticion a la base de datos con 2s de retraso
  export function getProductos () {
    return new Promise ((resolve, reject) => {
      setTimeout(() => resolve(products), 2000);
    })
  };