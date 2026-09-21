// ==========================================
// EJERCICIOS ADICIONALES DE JAVASCRIPT
// ==========================================

// --- 1. Invertir un array sin usar .reverse() ---
console.log("--- 1. Invertir un array ---");
function invertirArray(arr) {
    let arrayInvertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arrayInvertido.push(arr[i]);
    }
    return arrayInvertido;
}
console.log(invertirArray([1, 2, 3, 4])); // [4, 3, 2, 1][cite: 2]


// --- 2. Palíndromo ---
console.log("\n--- 2. Palíndromo ---");
function esPalindromo(str) {
    let limpio = str.toLowerCase().replace(/[\W_]/g, "");
    let alReves = limpio.split("").reverse().join("");
    return limpio === alReves;
}
console.log(esPalindromo("reconocer")); // true[cite: 2]


// --- 3. Contar vocales ---
console.log("\n--- 3. Contar vocales ---");
function contarVocales(str) {
    let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (vocales.includes(str[i])) {
            contador++;
        }
    }
    return contador;
}
console.log(contarVocales("Javascript ES Genial")); // 7[cite: 2]


// --- 4. Rotación de array ---
console.log("\n--- 4. Rotación de array ---");
function rotarDerecha(arr) {
    if (arr.length === 0) return arr;
    let ultimo = arr.pop();
    arr.unshift(ultimo);
    return arr;
}
console.log(rotarDerecha([10, 20, 30, 40])); // [40, 10, 20, 30][cite: 2]


// --- 5. Ordenar números sin .sort() (Método Burbuja) ---
console.log("\n--- 5. Ordenar números ---");
function ordenarArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(ordenarArray([5, 2, 9, 1])); // [1, 2, 5, 9][cite: 2]


// --- 6. Reemplazo de palabras ---
console.log("\n--- 6. Reemplazo de palabras ---");
function reemplazarPalabra(str, buscar, reemplazo) {
    let palabras = str.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === buscar) {
            palabras[i] = reemplazo;
        }
    }
    return palabras.join(" ");
}
console.log(reemplazarPalabra("me gusta programar en Java", "Java", "JavaScript")); // "me gusta programar en JavaScript"[cite: 2]


// --- 7. Números únicos (sin usar Set) ---
console.log("\n--- 7. Números únicos ---");
function obtenerUnicos(arr) {
    let unicos = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unicos.includes(arr[i])) {
            unicos.push(arr[i]);
        }
    }
    return unicos;
}
console.log(obtenerUnicos([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5][cite: 2]


// --- 8. Intersección de arrays ---
console.log("\n--- 8. Intersección de arrays ---");
function obtenerInterseccion(arr1, arr2) {
    let comunes = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !comunes.includes(arr1[i])) {
            comunes.push(arr1[i]);
        }
    }
    return comunes;
}
console.log(obtenerInterseccion([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4][cite: 2]


// --- 9. Contar palabras ---
console.log("\n--- 9. Contar palabras ---");
function contarFrecuenciaPalabras(str) {
    let palabras = str.split(" ");
    let conteo = {};
    for (let i = 0; i < palabras.length; i++) {
        let p = palabras[i];
        if (conteo[p]) {
            conteo[p]++;
        } else {
            conteo[p] = 1;
        }
    }
    return conteo;
}
console.log(contarFrecuenciaPalabras("hola mundo hola javascript")); // { hola: 2, mundo: 1, javascript: 1 }[cite: 2]


// --- 10. Matriz transpuesta ---
console.log("\n--- 10. Matriz transpuesta ---");
function matrizTranspuesta(matriz) {
    let filas = matriz.length;
    let columnas = matriz[0].length;
    let transpuesta = [];

    for (let j = 0; j < columnas; j++) {
        let nuevaFila = [];
        for (let i = 0; i < filas; i++) {
            nuevaFila.push(matriz[i][j]);
        }
        transpuesta.push(nuevaFila);
    }
    return transpuesta;
}

let matrizEjemplo = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(matrizTranspuesta(matrizEjemplo)); 
// Resultado esperado: [[1, 4], [2, 5], [3, 6]][cite: 2]