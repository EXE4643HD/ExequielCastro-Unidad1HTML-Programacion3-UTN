// ==========================================
// TRABAJO PRÁCTICO: Callbacks, Promesas y Async/Await
// ==========================================

// Base de datos simulada (nuestros usuarios)[cite: 4]
const users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Luis" },
    { id: 3, name: "María" }
];


// ==========================================
// ACTIVIDAD 1: Callbacks
// ==========================================
console.log("--- ACTIVIDAD 1: Callbacks ---");

function getUserById(id, callback) {
    // Simulamos una demora de 1.5 segundos con setTimeout
    setTimeout(() => {
        // Buscamos el usuario en el array usando .find()
        const usuarioEncontrado = users.find(user => user.id === id);

        if (usuarioEncontrado) {
            // Si existe, el primer argumento (error) es null/undefined y pasamos el usuario
            callback(null, usuarioEncontrado);
        } else {
            // Si no existe, pasamos un mensaje de error y null como usuario
            callback(`No se encontró ningún usuario con el ID: ${id}`, null);
        }
    }, 1500);
}

// Probando la función con un ID existente (2)
getUserById(2, (error, user) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Usuario encontrado (Callback):", user);
    }
});


// ==========================================
// ACTIVIDAD 2: Promesas
// ==========================================
console.log("--- ACTIVIDAD 2: Promesas ---");

function getUserByIdPromise(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarioEncontrado = users.find(user => user.id === id);

            if (usuarioEncontrado) {
                resolve(usuarioEncontrado); // Éxito: resuelve la promesa
            } else {
                reject(`Error: Usuario con ID ${id} no encontrado en la base de datos.`); // Error: rechaza la promesa
            }
        }, 1500);
    });
}

// Probando la función con .then() y .catch()
getUserByIdPromise(3)
    .then(user => console.log("Usuario encontrado (Promesa):", user))
    .catch(error => console.error("Error:", error));


// ==========================================
// ACTIVIDAD 3: Async/Await
// ==========================================
console.log("--- ACTIVIDAD 3: Async/Await ---");

async function fetchUser(id) {
    try {
        // Usamos await para pausar la ejecución hasta que la promesa se resuelva
        const user = await getUserByIdPromise(id);
        console.log("Usuario encontrado (Async/Await):", user);
    } catch (error) {
        // Capturamos cualquier error devuelto por el reject de la promesa
        console.error("Error capturado con Try/Catch:", error);
    }
}

// Probando la función asincrónica
fetchUser(1); // Debería mostrar el usuario con id 1

// Prueba adicional con un ID que no existe para ver el manejo de errores:
// fetchUser(99);