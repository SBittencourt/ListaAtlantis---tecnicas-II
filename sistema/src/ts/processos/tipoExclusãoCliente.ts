import Processo from "../abstracoes/processo";
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente";

export default class ExclusaoTitular extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new ExclusaoTitular()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}