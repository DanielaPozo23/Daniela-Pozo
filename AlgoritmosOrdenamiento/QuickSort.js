//normal
function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  console.log(quickSort([10, 7, 8, 9, 1, 5]));

  //Con recursividad 
  function quickSortRecursive(arr) {
    // Caso base: si el array tiene 1 o menos elementos, ya está ordenado
    if (arr.length <= 1) {
        return arr;
    }

    // Elegir el pivote (último elemento en este caso)
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    // Separar los elementos en 'left' (menores que el pivote) y 'right' (mayores o iguales)
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Llamadas recursivas para las sublistas 'left' y 'right'
    return [...quickSortRecursive(left), pivot, ...quickSortRecursive(right)];
}

console.log(quickSortRecursive([10, 7, 8, 9, 1, 5])); // Salida: [1, 5, 7, 8, 9, 10]
