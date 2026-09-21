// ==========================================
// TRABAJO PRÁCTICO DE JAVASCRIPT[cite: 3]
// ==========================================

// --- PUNTO 1: Funciones declarativas y expresadas ---
console.log("--- PUNTO 1 ---");

// Función declarativa (se puede llamar antes de ser declarada por el "hoisting")
function calcularCuadrado(num) {
    return num * num;
}
console.log("Cuadrado de 4:", calcularCuadrado(4));

// Función expresada (se asigna a una variable y no sufre hoisting de la misma manera)
const calcularCubo = function(num) {
    return num * num * num;
};
console.log("Cubo de 3:", calcularCubo(3));

/* 
EXPLICACIÓN PUNTO 1:
- Función declarativa: Utiliza la palabra reservada 'function' al inicio. JavaScript las lee antes de ejecutar el código (hoisting), por lo que se pueden invocar antes de definirlas en el archivo.
- Función expresada: Se almacena dentro de una variable anónima o con nombre. No se puede invocar antes de la línea donde se define.
*/


// --- PUNTO 2: Arrow Functions y parámetros por defecto ---
console.log("\n--- PUNTO 2 ---");

const presentarPersona = (nombre, edad = 18) => `Hola ${nombre}, tienes ${edad} años.`;

console.log(presentarPersona("Ana")); // Usa el valor por defecto (18)[cite: 3]
console.log(presentarPersona("Carlos", 25));


// --- PUNTO 3: Objetos con propiedades y métodos ---
console.log("\n--- PUNTO 3 ---");

const persona = {
    nombre: "Lucía",
    edad: 22,
    presentarse: function() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
};

console.log(persona.presentarse());

/* 
EXPLICACIÓN PUNTO 3:
- Propiedades: Son las características o variables que describen al objeto (ej. nombre, edad).
- Métodos: Son funciones almacenadas dentro de un objeto que definen las acciones que este puede realizar.
*/


// --- PUNTO 4: Desestructuración ---
console.log("\n--- PUNTO 4 ---");

// Extraemos las propiedades usando desestructuración
const { nombre, edad } = persona;
console.log("Nombre desestructurado:", nombre);
console.log("Edad desestructurada:", edad);

/* 
EXPLICACIÓN PUNTO 4:
La ventaja de usar desestructuración frente a acceder individualmente (como persona.nombre) es que permite extraer múltiples propiedades de un objeto de forma limpia, directa y en una sola línea de código, reduciendo la repetición.
*/


// --- PUNTO 5: Operador spread/rest ---
console.log("\n--- PUNTO 5 ---");

// Spread (...) para expandir arrays
let numerosBase = [1, 2, 3];
let numerosExpandidos = [...numerosBase, 4, 5, 6];
console.log("Array con Spread:", numerosExpandidos);

// Rest (...) para recibir múltiples parámetros en una función
function sumarTodos(...valores) {
    let acumulado = 0;
    for (let i = 0; i < valores.length; i++) {
        acumulado += valores[i];
    }
    return acumulado;
}
console.log("Suma con Rest:", sumarTodos(10, 20, 30, 40));

/* 
EXPLICACIÓN PUNTO 5:
- Spread (...): "Expande" los elementos de un array u objeto en lugares donde se esperan múltiples valores o argumentos.
- Rest (...): Agrupa un conjunto de argumentos independientes en un solo array dentro de los parámetros de una función.
*/


// --- PUNTO 6: Manipulación básica del DOM ---
// Seleccionar título y cambiar texto
const titulo = document.getElementById("titulo-principal");
titulo.textContent = "Título Modificado con JavaScript";

// Agregar elementos a la lista
const lista = document.getElementById("lista-elementos");
const nuevoLi1 = document.createElement("li");
nuevoLi1.textContent = "Nuevo elemento creado dinámicamente";
lista.appendChild(nuevoLi1);

// Manipular clases con classList
titulo.classList.add("resaltado");


// --- PUNTO 7: Eventos click e input ---
const inputP7 = document.getElementById("input-punto7");
const btnP7 = document.getElementById("btn-punto7");

btnP7.addEventListener("click", () => {
    if (inputP7.value.trim() !== "") {
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = inputP7.value;
        lista.appendChild(nuevoLi);
        inputP7.value = ""; // Limpiar input
    }
});

/* 
EXPLICACIÓN PUNTO 7:
Utilizamos el evento 'click' en el botón para capturar el momento exacto en que el usuario desea enviar la acción, leyendo el contenido del input en ese instante.
*/


// --- PUNTO 8: Evento submit y preventDefault ---
const formulario = document.getElementById("formulario-p8");
const inputP8 = document.getElementById("input-p8");
const mensajeP8 = document.getElementById("mensaje-p8");

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Previene que la página se recargue por defecto[cite: 3]
    mensajeP8.textContent = `Dato enviado correctamente: ${inputP8.value}`;
    inputP8.value = "";
});

/* 
EXPLICACIÓN PUNTO 8:
'preventDefault()' sirve para detener el comportamiento nativo de ciertos elementos HTML (como el envío de formularios que recargan la página por defecto), permitiendo manejar los datos mediante JavaScript de forma asíncrona o controlada.
*/


// --- PUNTO 9: Eventos keydown y change ---
const inputEnter = document.getElementById("input-enter");
const listaElementos = document.getElementById("lista-elementos"); // Aseguramos capturar la lista principal

inputEnter.addEventListener("keydown", (e) => {
    // Verificamos si la tecla presionada es "Enter" y el input no está vacío
    if (e.key === "Enter" && inputEnter.value.trim() !== "") {
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = inputEnter.value + " (Agregado con Enter)"; // Añadimos una etiqueta para identificarlo
        listaElementos.appendChild(nuevoLi); // Lo agregamos visiblemente a la lista de arriba
        inputEnter.value = ""; // Limpiamos el input
    }
});

const selectColores = document.getElementById("select-colores");
const resultadoSelect = document.getElementById("resultado-select");

selectColores.addEventListener("change", (e) => {
    resultadoSelect.textContent = `Opción seleccionada: ${e.target.value}`;
});