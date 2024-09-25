//Normal
function insertionSort(arr) {
    let n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;
  
      // Mover los elementos mayores a la derecha
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current; // Insertar el elemento en su posición correcta
    }
  
    return arr;
  }
  
  console.log(insertionSort([12, 11, 13, 5, 6]));

  //Recursividad
  function insertionSortRecursive(arr, n = arr.length) {
    // Caso base: si el array tiene un solo elemento o está vacío, ya está ordenado
    if (n <= 1) {
        return arr;
    }

    // Ordenar recursivamente los primeros n-1 elementos
    insertionSortRecursive(arr, n - 1);

    // Insertar el último elemento en su posición correcta
    let last = arr[n - 1];
    let j = n - 2;

    // Desplazar los elementos mayores hacia la derecha
    while (j >= 0 && arr[j] > last) {
        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = last;

    return arr;
}

console.log(insertionSortRecursive([12, 11, 13, 5, 6])); // Salida: [5, 6, 11, 12, 13]
