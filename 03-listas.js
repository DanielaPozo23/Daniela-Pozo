//Crear una lista con diferentes tipos de datos
let datos = [{ nombre: "Dany", apellidos: "Pozo", edad: "18", estuiante: false },{ nombre: "Dany", apellidos: "Pozo", edad: "18", estuiante: false }]

const Arreglo = () => {
    for (const datosIndex in datos){
         for (const valoresIndex in datos[datosIndex]) {
             console.log(`${valoresIndex}=${datos[datosIndex][valoresIndex]}`);
         }}}

Arreglo()
//let arreglo = ["Dany", 18, false]

//const info = () => {
    /*for (let arr in arreglo) {  //lis in datos para leer la lista
        console.log(arreglo[arr]);  //`${lis}:${datos[lis]}`
    }


let valores= object.values(datos)
valores.map((data,index)=>{
    console.log(`${index}:${data}`)
})*/

/* let valores = Object.entries(data);
 for( let informacion of valores) {
    for ( const valores of datos) {
        console.log(`${valoresIndex}=${datos[datosIndex][valoresIndex]}`)
    }
 } */

/* Object.entries(datos).forEach(([key,value])=>{
    console.log(`${key}:${value}`);
})
 */

/* }

info(); */






