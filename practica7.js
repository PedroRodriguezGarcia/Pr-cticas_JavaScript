// Array con notas
let notas = [4, 6, 8, 3, 9];

// Contadores
let aprobados = 0;
let suspensos = 0;

// Recorrer el array
for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 5) {
    console.log("Nota " + notas[i] + ": Aprobado");
    aprobados++; 
  } else {
    console.log("Nota " + notas[i] + ": Suspenso");
    suspensos++; 
  }
}

// Mostrar totales
console.log("Númeri de aprobados:"+ aprobados);
console.log("Número de suspensos:"+ suspensos);
