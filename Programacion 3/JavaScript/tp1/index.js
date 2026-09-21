// ==========================================
// TRABAJO PRÁCTICO: Algoritmia con Arrays y Strings
// ==========================================

// --- Consigna 1: Crear un array de palabras ---
console.log("--- Consigna 1: Array de palabras ---");
let palabras = [];

// Pedir al usuario 5 palabras usando prompt y guardarlas en el array
for (let i = 0; i < 5; i++) {
    let palabraIngresada = prompt(`Ingresa la palabra ${i + 1} de 5:`);
    palabras.push(palabraIngresada);
}

// Mostrar el array completo en consola
console.log("Array inicial:", palabras);


// --- Consigna 2: Manipular el array ---
console.log("\n--- Consigna 2: Manipulación del array ---");

// Agregar una palabra al inicio
let palabraInicio = prompt("Ingresa una palabra para agregar al INICIO del array:");
palabras.unshift(palabraInicio);

// Agregar una palabra al final
let palabraFin = prompt("Ingresa una palabra para agregar al FINAL del array:");
palabras.push(palabraFin);

// Eliminar la segunda palabra del array (índice 1)
palabras.splice(1, 1);

// Mostrar el array actualizado
console.log("Array actualizado:", palabras);


// --- Consigna 3: Analizar las palabras ---
console.log("\n--- Consigna 3: Análisis de palabras ---");

let palabraMasLarga = palabras[0];
let contieneLetraA = false;

for (let i = 0; i < palabras.length; i++) {
    let palabraActual = palabras[i];
    
    // Longitud de cada palabra
    console.log(`La palabra "${palabraActual}" tiene ${palabraActual.length} caracteres.`);
    
    // Encontrar la palabra más larga
    if (palabraActual.length > palabraMasLarga.length) {
        palabraMasLarga = palabraActual;
    }
    
    // Verificar si contiene la letra "a" (o "A")
    if (palabraActual.toLowerCase().includes("a")) {
        contieneLetraA = true;
    }
}

console.log(`\nLa palabra más larga es: "${palabraMasLarga}"`);
if (contieneLetraA) {
    console.log("¿Alguna palabra contiene la letra 'a'? Sí.");
} else {
    console.log("¿Alguna palabra contiene la letra 'a'? No.");
}


// --- Consigna 4: Juego de inversión de palabras ---
console.log("\n--- Consigna 4: Inversión de palabras ---");

let palabrasInvertidas = [];

for (let i = 0; i < palabras.length; i++) {
    // Convertir string a array de letras, invertirlo y volver a unirlo
    let palabraInvertida = palabras[i].split("").reverse().join("");
    palabrasInvertidas.push(palabraInvertida);
}

console.log("Array de palabras invertidas:", palabrasInvertidas);
alert("Palabras invertidas:\n" + palabrasInvertidas.join(", "));


// --- Consigna 5: Palíndromo ---
console.log("\n--- Consigna 5: Palíndromos ---");

let respuestaPalindromo = prompt("¿Quieres comprobar palíndromos? (responde 'sí' o 'no')");

if (respuestaPalindromo && respuestaPalindromo.toLowerCase().trim() === "sí") {
    console.log("Resultados de palíndromos:");
    for (let i = 0; i < palabras.length; i++) {
        let original = palabras[i].toLowerCase();
        let invertida = original.split("").reverse().join("");
        
        if (original === invertida) {
            console.log(`"${palabras[i]}" ES un palíndromo.`);
        } else {
            console.log(`"${palabras[i]}" NO es un palíndromo.`);
        }
    }
} else {
    console.log("No se comprobaron palíndromos por elección del usuario.");
}


// --- Consigna 6: Bonus (opcional) ---
console.log("\n--- Consigna 6: Bonus ---");

let contadorMasDe4 = 0;

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > 4) {
        contadorMasDe4++;
    }
}

console.log(`Cantidad de palabras con más de 4 caracteres: ${contadorMasDe4}`);

// Crear un string con todas las palabras unidas por "-"
let stringUnido = palabras.join("-");
console.log(`Palabras unidas por '-': ${stringUnido}`);