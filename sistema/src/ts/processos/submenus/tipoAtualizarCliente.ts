import Processo from "../../abstracoes/processo";
import MenuTipoAtualizarCliente from "../../menus/menuTipoAtualizarCliente";
import AtualizarClienteDependente from "../atualizarClienteDependente";
import AtualizarClienteTitular from "../atualizarClienteTitular";



export default class TipoAtualizarCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoAtualizarCliente()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new AtualizarClienteTitular()
                this.processo.processar()
                break;

            case 2:
                this.processo = new AtualizarClienteDependente()
                this.processo.processar()
                break;

            default:
                console.log('Opção não entendida :(')
        }
    }
}
