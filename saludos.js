function saludar(nombre){
    return `Hola ${nombre}`
}

function saludarholamundo(){
    return "Hola, mundo!"
}

// console.log(saludar("agustín")) 
// en el momento que utilizamos la terminal para visualizar esto, estamos utilizando Node
// ya que es un entorno de ejecucion de JS , y no necesitamos hacerlo desde la web, sino desde la misma terminal

// module.exports.saludar = saludar; // (es un objeto) va a tener todos los elementos que exportamos de este modulo
//                |_
//                  el nombre es independiente pero es util asignarle el mismo,ya que con ese nombre se exporta

// module.exports.saludarholamundo = saludarholamundo

module.exports = {
    saludar: saludar,
    saludarholamundo: saludarholamundo
};
// lo ejecutamos todo junto , en un mismo objeto