/* const prompt = require('prompt-sync')();
const n = parseInt(prompt("Ingrese cuantas veces quiere que se repita la secuencia: "))
 */

/* function fibonacci(n){
    let arr=[0,1];

    for (let i=2; i<n;i++){
        arr[i]=arr[i-1]+[i-2];
    }

    return arr;
}

console.log(fibonacci(n)) */


/* function Fibo(n) {
    let Inicial = 0
    let Temporal = 1
    let Actual = 0
    for (i = 0; i < n; i++) {
        Inicial = Temporal
        Temporal = Actual
        Actual = Inicial + Temporal
        console.log(Actual)
    }
}
Fibo(n) */
const prompt=require("prompt-sync")({sigint:true});
function Fibo(n){
    if(n<2) return n
    return Fibo(n-1)+Fibo(n-2)
}
const n=parseInt(prompt("Ingrese cuantas veces quiere que se repita la secuencia: "))

for (let i=0; i< n; i++)

console.log(Fibo(i));



 
