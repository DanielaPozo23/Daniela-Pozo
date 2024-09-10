const { parse } = require("mathjs");

const prompt = require("prompt-sync")({ sigint: true })

class Empleado {
    constructor(rfc, nombre, apellidos, direccion, telefono,sueldo) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._rfc = rfc;
        this._direccion = direccion;
        this._telefono = telefono;
        this._sueldo = sueldo;
    }
    CalSueldo(){
       return this._sueldo*.15
    }

    get nombre() {
        return this._nombre
    }

    set nombre(value) {
        this._nombre = value;
    }

    get apellidos() {
        return this._apellidos
    }

    set apellidos(value) {
        this._apellidos = value;
    }

    get rfc() {
        return this._rfc
    }

    set rfc(value) {
        this._rfc = value;
    }

    get direccion() {
        return this._direccion
    }

    set direccion(value) {
        this._direccion = value;
    }

    get direccion() {
        return this._direccion
    }

    set direccion(value) {
        this._telefono = value;
    }

}

let arreglo=[]

function añadirEmpleado(){
    let Tamaño=parseInt(prompt("Ingrese el número de empleados a agregar : "))
    for (let i = 0; i < Tamaño; i++) {
       let nombre= prompt("Ingrese el nombre de la persona : ")
       let apellidos= prompt("Ingrese el apellido de la persona : ")
       let rfc= prompt("Ingrese el RFC de la persona : ")
       let direccion= prompt("Ingrese la direccion de la persona : ")
       let telefono= prompt("Ingrese el telefono de la persona : ")
       let sueldo= parseFloat(prompt("Ingrese el sueldo de la persona : "))

       let empleado = new Empleado(nombre,apellidos,rfc,direccion,telefono,sueldo)
       arreglo.push(empleado);

       let bono = empleado.CalSueldo()
       console.log(`El bono del empleado es : ${nombre}: ${bono}`)

       
       let SuelBono = sueldo + bono
       console.log(`El sueldo con bono del empleado es : ${nombre}: ${SuelBono}`)
    }
    arreglo.pop();
}
añadirEmpleado();
 console.log(arreglo);
