const {saludar, saludarholamundo} = require("./saludos")   // Por convencion, siempre lo asignamos a una Const, con el mismo nombre del modulo que exportamos
 // ejemplo de destructurin para traer propiedades mas facil y limpio


// console.log(saludo.saludar("Agustin Ceballos")) // primero especificamos el modulo y luego la funcion 
console.log(saludarholamundo()) 
console.log(saludar("agustin")) 

