//Normal
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));  // Salida: [3, 9, 10, 27, 38, 43, 82]

  //con recursividad
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

  