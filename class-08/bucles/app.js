// FOR: Bucle pre-definido.

function preguntar(pregunta) {
	let respuesta = prompt(pregunta);
	return respuesta;
}

let nombre;

for (let i = 0; i < 5; i++) {
	console.log("Intento: " + i);
	nombre = preguntar("Cuál es tu nombre");
	if (nombre !== "") {
		break;
	}
}

// WHILE: Bucle condicionado.
while (nombre === undefined || nombre === "") {
	nombre = preguntar("Cuál es tu nombre");
}

console.log("Tu nombre es: " + nombre);
document.write("Tu nombre es: " + nombre);
