//Realizar un arreglo con dos dimensiones y guaradr dos arreglos internos y dar lectura a los datos internos.

array= [[3,4,5,6],[7,8,9]];

/*const datosArreglo= ()=>{
    array.map((datos)=>{
        datos.map((valores, i)=>{
            console.log(`${i}=${valores}`);
        })
    });
}

datosArreglo();*/

/*for of
const datosArreglo= () => {
    for ( const datos of array){
        for (const valores of datos){
            console.log(`${datos.indexOf(valores)}=${valores}`)
        }
    }
}  

datosArreglo();*/

  
//for in
/*const datosArreglo = () => {
    for (const datosIndex in array){
         for (const valoresIndex in array[datosIndex]) {
             console.log(`${valoresIndex}=${array[datosIndex][valoresIndex]}`);
         }
    }
}

datosArreglo();*/


//funcion flecha
/*const datosArreglo = () => {
    for (const datosIndex in array) {
       for(const valoresIndex in array[datosIndex]) 
          console.log(`${valoresIndex}=${array[datosIndex][valoresIndex]}`);
    }
}

datosArreglo();*/


//while
const datosArreglo = () => {
    let datosIndex = 0;
    while (datosIndex < array.length) {
        let valoresIndex = 0;
        while (valoresIndex < array[datosIndex].length) {
            console.log(`${valoresIndex}=${array[datosIndex][valoresIndex]}`);
             valoresIndex++;
        }
        datosIndex++;
    }

}
datosArreglo();