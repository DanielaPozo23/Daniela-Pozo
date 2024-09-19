/* La recursividad es un concepto en programación en el que una función se llama a sí misma para resolver un problema. 
Es útil cuando un problema puede dividirse en subproblemas más pequeños y similares al original. Cada llamada recursiva 
aproxima la solución del problema hasta llegar a un caso base que detiene la recursión y evita que se repita indefinidamente. */

/* Cómo funciona:
Caso base: es la condición que detiene la recursión. Si no existe, 
la función continuará llamándose a sí misma indefinidamente.
Llamada recursiva: es el proceso en el cual la función se llama a sí misma, 
generalmente con un valor más simple o reducido del problema original. */

/* Ejemplo sencillo en JavaScript: Factorial de un número
El factorial de un número  𝑛
n es el producto de todos los números enteros positivos desde 1 hasta 𝑛.
 Por ejemplo, el factorial de 5 es 5×4×3×2×1=120. */

 function factorial(n) {
    // Caso base: si n es 0 o 1, el factorial es 1
    if (n === 0 || n === 1) {
      return 1;
    }
    
    // Llamada recursiva: n * factorial(n-1)
    return n * factorial(n - 1);
  }
  
  // Ejemplo de uso
  console.log(factorial(5));  // Salida: 120

  /* Explicación:
Si n=5, la función calcula 5×factorial(4), luego 
4×factorial(3), y así sucesivamente hasta llegar a 
factorial(1), donde el caso base devuelve 1 y la recursión comienza a resolverse hacia atrás. */
  