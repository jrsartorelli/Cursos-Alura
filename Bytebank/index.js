import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 88822233309);

const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(500);

const conta2 = new ContaCorrente(1002, cliente2);
conta1.transferir(200, conta2);

console.log(conta1);
console.log(conta1.cliente);
console.log(conta1.cliente.cpf);
console.log(conta1.saldo);

console.log(conta2);
console.log(conta2.cliente);
console.log(conta2.saldo);

console.log(ContaCorrente.numeroDeContas);
