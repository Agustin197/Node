const http = require("http"); //requerimos http

const servidor = http.createServer((req,res) =>{
    console.log("=>>> res(respuesta)");
    res.setHeader("content-type", "application/json");
console.log(res.getHeader());

    res.end("hola agus")
});

const puerto = 3000 

servidor.listen(puerto,() =>{
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`)
})