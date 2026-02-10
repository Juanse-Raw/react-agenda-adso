const productos = [
{ nombre: "Laptop", precio: 1200000,
stock: 5 },
{ nombre: "Mouse", precio: 35000,
stock: 0 },
{ nombre: "Teclado", precio: 85000,
stock: 12 }
];

// 1. obtenerDisponibles
console.log("----Productos disponibles:-----\n")
const obtenerDisponibles = (productos) => {
  return productos.filter(p => p.stock > 0);
};
console.log("Productos disponibles:\n", obtenerDisponibles(productos));

// 2. calcularInventario
console.log("----Calcular inventario total:-----\n")

const calcularInventario = (productos) => {
  return productos.reduce((total, p) => total + (p.precio * p.stock), 0);
};
console.log("Valor total del inventario:\n", calcularInventario(productos));

// 3. aplicarDescuento 
console.log("----Aplicar descuento del 10%:-----\n")

const aplicarDescuento = (productos, porcentaje) => {
  return productos.map(p => ({
    ...p,
    precio: p.precio * (1 - porcentaje / 100)
  }));
};
console.log("Productos con descuento aplicado:\n", aplicarDescuento(productos, 10));

// 4. ordenarPorPrecio(productos) Array ordenado menor a mayor