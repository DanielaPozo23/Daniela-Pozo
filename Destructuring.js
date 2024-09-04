const Persona={
    nombre:"Dany",
    edad: 18,
    sexo:null,

}
//const datos=[1,"hola",23];
//let[num1,cadena]=datos
 

let nombre,edad,sexo;

/*let{...datos}=Persona
datos.nombre="Juan"
console.log(datos.edad) */

let{nombre:name}=Persona
Persona.name="Juan"
console.log(Persona.name)