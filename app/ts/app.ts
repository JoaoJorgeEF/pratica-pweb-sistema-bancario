let contaController = new ContaController();
let clienteController = new ClienteController();

contaController.listar();
clienteController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

const clientes = new Clientes();
clientes.inserir(new Cliente("João", "78429038429", c1));
clientes.inserir(new Cliente("Carlos", "88192831919", c1));
clientes.inserir(new Cliente("Pedro", "74718731923", c1));

console.log(clientes.listar());

clientes.remover("88192831919");

console.log(clientes.listar());

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);


