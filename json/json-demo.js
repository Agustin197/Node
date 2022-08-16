const infocurso = {
    "titulo": "Aprendiendo Node.js",
    "numvistas": 40000,
    "numlikes": 10000,
    "temas" : [
        "Javascript",
        "node.js"
    ],
   "espublico": true 
}
// Objeto -> String 
// string en formato JSON
let infoCursoJson = JSON.stringify(infocurso);

console.log(infoCursoJson);
console.log(typeof infoCursoJson);

// String -> Objeto
// Objeto de Js 
let infoCursoObjeto = JSON.parse(infoCursoJson)

console.log(infoCursoObjeto)
console.log(infoCursoObjeto.titulo)
console.log(typeof infoCursoObjeto)



