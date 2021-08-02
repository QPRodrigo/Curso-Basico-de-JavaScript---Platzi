var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);

console.log(frutas.length)

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

var masFrutas = frutas.push("Uvas");
console.log(masFrutas);

var ultimoFrutas= frutas.pop("Uvas");
console.log(ultimoFrutas);

var nuevaLogintud = frutas.unshift("Uvas");
console.log(nuevaLogintud)

var borrarFruta = frutas.shift("Uvas");
console.log(borrarFruta)

var nuevaLogintud = frutas.unshift("Uvas");
console.log(nuevaLogintud)

var borrarFruta = frutas.shift("Manzana");
console.log(borrarFruta)

var posicion = frutas.indexOf("Cereza");
console.log(posicion)