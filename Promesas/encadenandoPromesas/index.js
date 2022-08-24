function ordenarproducto (producto) {
return new Promise((resolve,reject) => {
    console.log(`Estamos ordenando tu producto ${producto}`)
setTimeout(() =>{
    if(producto === "avena"){
        resolve("ordenando la avena solicitada")
    }else{
        reject("no tenemos stock")
    }
},3000)
});
}

function procesarpedido(respuesta){
    return new Promise(resolve => {
        console.log("procesando respuesta...");
        console.log(`la respuesta fue ${respuesta}`);
        setTimeout(() =>{
        resolve("gracias por tu compra :)")
        },4000);
    });
}

async function realizarPedido (producto){
    try {
        const respuesta = await ordenarproducto(producto);
    console.log("respuesta recibida")
    console.log(respuesta)
    const respuestaprocesada = await procesarpedido(respuesta);
    console.log(respuestaprocesada)
    } catch (error) {
        console.log(error)
    }
    }
     
realizarPedido("avena");


// ordenarproducto("avena")
// .then(respuesta => {
//     console.log("respuesta recibida");
//     console.log(respuesta);
//     return procesarpedido(respuesta);
// })
// .then(respuestaprocesada => {
//     console.log(respuestaprocesada)
// })
// .catch(err => {
//     console.log(err)
// })

