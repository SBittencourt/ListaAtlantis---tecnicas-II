import Processo from "../../abstracoes/processo";
import MenuTipoCadastroCliente from "../../menus/menuTipoCadastroCliente";
import CadastroClienteDependente from "../cadastroClienteDependente";
import CadastroClienteTitular from "../cadastroClienteTitular";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new CadastroClienteTitular()
                this.processo.processar()
                break
            case 2:
                const clientesTitulares: Cliente[] = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular === undefined);
                if (clientesTitulares.length === 0) {
                    console.log('Nenhum cliente titular cadastrado. Não é possível adicionar um dependente.');
                } else {
                    const primeiroTitular: Cliente = clientesTitulares[0];
                    this.processo = new CadastroClienteDependente(primeiroTitular);
                    this.processo.processar();
                }
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}
