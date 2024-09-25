//Normal 
function selectionSort(arr) {
    let n = arr.length;
  
    for (let i = 0; i < n; i++) {
      let minIndex = i;
      // Encontrar el mínimo elemento en el arreglo desordenado
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Intercambiar el mínimo elemento con el primer elemento
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  
    return arr;
  }
  
  console.log(selectionSort([29, 10, 14, 37, 13]));

  //Con recursividad
  function selectionSortRecursive(arr, i = 0) {
    let n = arr.length;
    
    // Caso base: si se ha llegado al final del array, está ordenado
    if (i === n) {
        return arr;
    }

    // Encontrar el índice del valor mínimo desde la posición i hasta el final del array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    // Intercambiar el mínimo elemento encontrado con el primer elemento no ordenado
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

    // Llamada recursiva para ordenar el resto del array
    return selectionSortRecursive(arr, i + 1);
}

console.log(selectionSortRecursive([29, 10, 14, 37, 13])); // Salida: [10, 13, 14, 29, 37]
