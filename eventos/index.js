const EventEmitter = require("events");

const emisorproductos = new EventEmitter();

emisorproductos.on("compra", (total,numproductos) =>{
    console.log(`se realizo una compra por ${total}`)
    console.log(`numero de productos ${numproductos}`)

}); //Event Handlers

emisorproductos.emit("compra",500,10);

