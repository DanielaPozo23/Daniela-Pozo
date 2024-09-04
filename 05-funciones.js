//Factory Function

const Persona = {
    nombre: "Dany",
    edad: 23
}

/* const Persona2 = {
    nombre: "Jose",
    edad: 25
} */

function datosPersona(nombre, edad){
    return{
        nombre:nombre,
        edad:edad,
        active:true
    }
}

let persona=datosPersona("Dany",23);
let persona2=datosPersona("Jose",25)
//console.log(persona,persona2);
const datosUsuario={
    nombre:"dany",
    edad:23,
    password:"123456",
    direccion:{
        colonia:"El carmen",
        calle:"principal",
        numext:123
    },
    sueldo:234.24,
    guardarUsuario:function(){
        console.log("Guardar usuario....")
    }
}
//datosUsuario.guardarUsuario();

//Add registros y parámetros a los objetos definidos
const user={id:1};
user.nombre="Dany",
user.guardarUser=function(){
    console.log("Guardar User....")
}
/* console.log(user)
user.guardarUser(); */
//let funcionGuardar=user.guardarUser();
//console.log(funcionGuardar);

//Objetos definidos Object.freeze para no permitir cambios y .seal es para modificar pero no agregar
const Person=Object.freeze({id:1,nombre:"Dany"});
Person.id=2;
Person.nombre="Juan"
Person.edad=23;

//console.log(Person)

//Pasar funciones como parámetros
function Pitbull(nombre){
    this._nombre=nombre;

}

function Animal(Fn,argumento){
    return new Fn(argumento)
}
let animal1=Animal(Pitbull,"aska")
console.log(animal1);