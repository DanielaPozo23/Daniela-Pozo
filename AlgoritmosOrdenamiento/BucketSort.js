//Normal
function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {
        return arr;
    }

    // Encuentra los valores mínimo y máximo en el array
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);

    // Calcula el número de cubetas necesarias
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = new Array(bucketCount).fill(null).map(() => []);

    // Distribuye los elementos en las cubetas correspondientes
    for (let i = 0; i < arr.length; i++) {
        let bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }

    // Ordena cada cubeta y concatena todas las cubetas en un array final
    return buckets.reduce((sortedArray, bucket) => {
        return sortedArray.concat(insertionSort(bucket));
    }, []);
}

// Implementación de Insertion Sort para ordenar cada cubeta
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Ejemplo de uso
let arr = [29, 25, 3, 49, 9, 37, 21, 43];
console.log(bucketSort(arr));


//con recursividad
function bucketSortRecursive(arr, bucketSize = 5) {
    if (arr.length === 0) {
        return arr;
    }

    // Encuentra los valores mínimo y máximo en el array
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);

    // Calcula el número de cubetas necesarias
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = new Array(bucketCount).fill(null).map(() => []);

    // Distribuye los elementos en las cubetas correspondientes
    for (let i = 0; i < arr.length; i++) {
        let bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }

    // Ordena cada cubeta recursivamente
    return buckets.reduce((sortedArray, bucket) => {
        if (bucket.length > 1) {
            return sortedArray.concat(bucketSortRecursive(bucket, bucketSize));
        }
        return sortedArray.concat(bucket);
    }, []);
}

// Ejemplo de uso
let arrRecursive = [29, 25, 3, 49, 9, 37, 21, 43];
console.log(bucketSortRecursive(arrRecursive));
