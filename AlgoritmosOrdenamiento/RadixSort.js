//Normal
function radixSort(arr) {
    if (arr.length === 0) return arr;

    // Encuentra el número máximo para saber cuántos dígitos tiene
    const maxNumber = Math.max(...arr);

    // Itera por cada dígito, comenzando desde el menos significativo
    let divisor = 1;
    while (Math.floor(maxNumber / divisor) > 0) {
        arr = countingSortByDigit(arr, divisor);
        divisor *= 10;
    }

    return arr;
}

// Función de Counting Sort para ordenar por dígito específico
function countingSortByDigit(arr, divisor) {
    let buckets = Array.from({ length: 10 }, () => []);
    
    // Coloca los números en cubetas basadas en el dígito correspondiente
    for (let i = 0; i < arr.length; i++) {
        let digit = Math.floor((arr[i] / divisor) % 10);
        buckets[digit].push(arr[i]);
    }

    // Concatenar todas las cubetas en un solo array
    return [].concat(...buckets);
}

// Ejemplo de uso
let arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr));  // Output: [2, 24, 45, 66, 75, 90, 170, 802]

//con reursividad
function radixSortRecursive(arr, divisor = 1) {
    if (arr.length === 0 || divisor === 0) return arr;

    // Encuentra el número máximo en el array
    const maxNumber = Math.max(...arr);

    // Condición base para detener la recursividad
    if (Math.floor(maxNumber / divisor) === 0) {
        return arr;
    }

    // Realiza Counting Sort basado en el dígito correspondiente
    arr = countingSortByDigit(arr, divisor);

    // Llama recursivamente con el siguiente divisor (para el siguiente dígito)
    return radixSortRecursive(arr, divisor * 10);
}

// Ejemplo de uso
let arrRecursive = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSortRecursive(arrRecursive));  // Output: [2, 24, 45, 66, 75, 90, 170, 802]
