const { evalDependencies } = require('mathjs');

const prompt = require('prompt-sync')();

/*let numero1;
let numero2;
numero1=parseInt(prompt("ingrese el numero 1: "))
numero2=parseInt(prompt("ingrese el valor 2: "))

console.log(numero1*numero2) */

//Realizar un programa que contenga un arreglo indefinido,en el que solicite a travez
//del teclado el tamaño y se ingrese por lo menos 4 valores con n ciclo de cualquier
//tipo imprimir los valores en pantalla.
/*Arreglo = []
numero = parseInt(prompt("ingrese el tamaño del areglo que sea mayor a 4: "))
while (numero < 4) {
    numero = parseInt(prompt("ingrese el tamaño del areglo que sea mayor a 4: "))
}

function añadir(){
    i=0
    while(i<numero){
        Arreglo.push(prompt("ingrese el elemento a añadir: "))
        i++
    }
}

añadir()

Arreglo.map((data)=>{
    console.log(data)
})*/



let arreglo = [];
let numero = parseInt(prompt("Ingrese el número de personas a agregar: "));

while (numero < 2) {
  numero = parseInt(prompt("Ingrese un número válido mayor a 1: "));
}
for (let i = 0; i < numero; i++) {
  let persona = {
    nombre: prompt(`Ingrese el nombre de la persona : `),
    apellido: prompt(`Ingrese el apellido de la persona : `)
  };

  arreglo.push((persona));
}
arreglo.map((persona) => {
  console.log(`Nombre:`+persona.nombre, "Apellido: "+persona.apellido);
});
