class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const clientePesquisado = this.pesquisar(cpf);
        if (clientePesquisado) {
            const indice = this.clientes.indexOf(clientePesquisado);
            if (indice > -1)
                this.clientes.splice(indice, 1);
        }
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
}
