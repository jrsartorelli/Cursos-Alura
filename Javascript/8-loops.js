console.log(`Trabalhando com loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

const podeComprar =  idadeComprador >= 18 || estaAcompanhada == true;

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2,1); 
    temPassagemComprada = true;
} else {
    console.log("Não é maior de Idade e não posso vender");
    temPassagemComprada = false;
}

let contador = 0
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe") 
    }else{ 
        console.log("Destino não existe");
    }
    contador += 1;
} 

for(let i = 0 ; i <3 ; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        }
}
