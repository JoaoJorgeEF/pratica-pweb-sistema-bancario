class Clientes {
    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente): void{
        this.clientes.push(cliente);
    }

    remover(cpf: string): void{
        const clientePesquisado = this.pesquisar(cpf);
        if(clientePesquisado){
            const indice = this.clientes.indexOf(clientePesquisado);
            if(indice > -1)
                this.clientes.splice(indice,1);
        }
    }

    listar(): Array<Cliente>{
        return this.clientes;
    }

    pesquisar(cpf: string): Cliente{
        return this.clientes.find(
            cliente => cliente.cpf === cpf
        );
    }
}