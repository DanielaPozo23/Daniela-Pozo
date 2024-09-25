//Normal
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Intercambiar elementos
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
      n--; // Reducir el rango porque el último ya está en su lugar correcto
    } while (swapped);
  
    return arr;
  }
  
  console.log(bubbleSort([5, 3, 8, 4, 2]));  // Salida: [2, 3, 4, 5, 8]

  //con recursividad 
  function bubbleSortRecursive(arr, n = arr.length) {
    // Caso base: si el tamaño del array es 1, ya está ordenado
    if (n === 1) {
        return arr;
    }

    // Realiza una pasada de bubble sort
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            // Intercambiar elementos
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    // Llamada recursiva para el subarray de tamaño n-1
    return bubbleSortRecursive(arr, n - 1);
}

console.log(bubbleSortRecursive([5, 3, 8, 4, 2])); // Salida: [2, 3, 4, 5, 8]
