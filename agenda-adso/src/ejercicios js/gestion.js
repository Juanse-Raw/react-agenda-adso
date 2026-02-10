const aprendices = [
  { id: 1, nombre: "Ana", ficha: 3223874, nota: 4.2 },
  { id: 2, nombre: "Luis", ficha: 3223874, nota: 3.5 },
  { id: 3, nombre: "María", ficha: 3223875, nota: 4.8 },
];

// 1. obtenerAprobados
const obtenerAprobados = (aprendices) => {
  return aprendices.filter((aprendiz) => aprendiz.nota >= 3.0); // usamos filter para crear un nuevo array con solo los aprendices que tienen nota mayor o igual a 3.0
};

obtenerAprobados(aprendices).forEach((a) => // usamos forEach para imprimir cada aprendiz aprobado
  console.log(`Aprobado: ${a.nombre} - Nota: ${a.nota}`),
);

// 2. calcularPromedio
const calcularPromedio = (aprendices) => {
  const totalNotas = aprendices.reduce((sum, a) => sum + a.nota, 0); // usamos reduce para sumar todas las notas, comenzando con un acumulador de 0
  return totalNotas / aprendices.length;
};
console.log(`Promedio del grupo: ${calcularPromedio(aprendices).toFixed(2)}`); //usamos toFixed(2) para mostrar el promedio con 2 decimales

// 3. buscarPorNombre
const buscarPorNombre = (aprendices, nombre) => {
  return aprendices.find((a) => a.nombre.toLowerCase() === nombre.toLowerCase()); // usamos find para buscar el primer aprendiz que coincida con el nombre (ignorando mayúsculas/minúsculas)
};

console.log(buscarPorNombre(aprendices, "ana"));

// 4. obtenerNombres
const obtenerNombres = (aprendices) => {
  return aprendices.map((a) => a.nombre); // usamos map para extraer solo los nombres en un nuevo array
};
console.log(`Nombres de aprendices: ${obtenerNombres(aprendices).join(", ")}`);



