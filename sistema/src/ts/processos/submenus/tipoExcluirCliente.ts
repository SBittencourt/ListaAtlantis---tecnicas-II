import Processo from "../../abstracoes/processo";
import ExcluirClienteTitular from "../excluirClienteTitular";
import CadastroClienteTitular from "../cadastroClienteTitular";
import MenuTipoExcluirCliente from "../../menus/menuTipoExcluirCliente";

export default class TipoExcluirCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoExcluirCliente()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new ExcluirClienteTitular()
                this.processo.processar()
                break;

            case 2:
                this.processo = new CadastroClienteTitular()
                this.processo.processar()
                break;

            default:
                console.log('Opção não entendida :(')
        }
    }
}
