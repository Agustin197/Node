const promesacumplida = false

const mipromesa = new Promise((resolve,reject) => {
    setTimeout(() => {
if (promesacumplida){
    resolve("promesa cumplida")
}
else{
    reject("promesa rechazada")
}
    },2000);
})

const manejarpromesacumplida = (valor) => {
    console.log(valor)
}

const manejarerror = (razonrechazo) =>{
    console.log(razonrechazo)
}

mipromesa.then(manejarpromesacumplida,manejarerror);