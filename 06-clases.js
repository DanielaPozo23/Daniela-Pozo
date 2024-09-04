//Definir clases con atributos dentro del constructor

class Persona{
    constructor(nombre, edad,sexo,direccion){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
        this.direccion=direccion;
    }
 saludar(){
    console.log(` Hola ${this.nombre}`);
 }
 //Encapsulamiento setter y getter
 get nombre(){
    return this._nombre
 }
 set nombre(values){
    this._nombre=values;
 }
}
persona1=new Persona("Dany",18,"F","Balancan")
persona1.nombre="Juan";
console.log(persona1._nombrenombre);
persona1.saludar()