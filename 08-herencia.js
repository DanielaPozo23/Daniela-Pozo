//Regla sintáctica JS

class Persona{
    constructor(nombre, apellido, edad, sexo,dirreccion, telefono, correo, horario){
    this._nombre  = nombre
    this._apellido = apellido
    this._edad = edad
    this._sexo = sexo
    this._dirreccion = dirreccion
    this._telefono = telefono
    this._correo = correo
    this._horario = horario
}}

class Alumno extends Persona{
    constructor (nombre,apellidos,horario,matricula,carrera, semestre, ){
        super(nombre, apellidos, horario)
        this._matricula = matricula
        this._carrera = carrera
        this._semestre = semestre
       
    }
    
    mensaje(){
        console.log(`Soy el alumno ${ this._nombre} y estudio la carrera de ${this._carrera}`)
    }
}

let alumno1 = new Alumno("DANY", "POZO", "10-16","23E20113","SISTEMAS","3")
alumno1.mensaje()