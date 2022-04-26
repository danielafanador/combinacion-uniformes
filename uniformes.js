
// Programa: combinación de uniformes

// Declaración de variables

var equipos = ['Hertha BSC', 'St. Pauli', 'Hansa Rostock', 'Schalke 04', 'HSV'];

var colores = ['Azul', 'Blanco', 'Negro', 'Rojo']

var condicion = ['local', 'visitante']

var pais = ['Alemania']

// Declaración de función

function crearCombinacion (equipo, color, condicion, pais) {console.log(`El ${equipo} juega de color ${color} en condición de ${condicion} en ${pais}`);}

// Loop(s)

for (var i = 0; i < equipos.length; i++) 

for (var j = 0; j < colores.length; j++) 

for (var k = 0; k < condicion.length; k++) 

for (var l = 0; l < pais.length; l++) 

{crearCombinacion(equipos[i], colores[j], condicion[k], pais[l])}




