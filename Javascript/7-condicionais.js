console.log(`Trabalhando com condicionais e operadores lógicos`);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`);

const idadeComprador = 16;
const estaAcompanhada  = false;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); // removendo item
} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log(listaDeDestinos);
