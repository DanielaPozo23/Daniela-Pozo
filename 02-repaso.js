//Realizar un arreglo con dos dimensiones y guaradr dos arreglos internos y dar lectura a los datos internos.

array= [[3,4,5,6],[7,8,9]];

const datosArreglo= ()=>{
    array.map((datos)=>{
        datos.map((valores, i)=>{
            console.log(`${i}=${valores}`);
        })
    });
}