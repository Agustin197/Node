const estatuspedido = () =>{
    return Math.random() < 0.8
};

const mipedido = new Promise ((resolve,reject) => {
    setTimeout(() =>{
        if(estatuspedido()){
            resolve("pedido exitoso, pizza en camino");
        } else {
            reject("pedido erroneo, la pizza no te llega mas");
        }
    },1000);
});

mipedido.then((exito) => {    // esta es una forma mas legible de manejar los handlers 
console.log(exito)
})
.catch((error) =>{
    console.log(error)
})


// const manejarpedido = (mensajedeconfirmacion) =>{
//     console.log(mensajedeconfirmacion)
// };

// const manejarerror = (mensajeerrores) =>{
//     console.log(mensajeerrores)
// };

// mipedido.then(manejarpedido,manejarerror) esto es un handler o manejador de exito o error


