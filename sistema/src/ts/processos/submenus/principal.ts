import Processo from "../../abstracoes/processo";
import MenuPrincipal from "../../menus/menuPricipal";
import CadastroAcomodacoes from "../cadastroAcomodacoes";
import ControleHospedagem from "../controleHospedagem";
import ExcluirAcomodacao from "../excluirAcomodacoes";
import ListagemAcomodacoes from "../listagemAcomodacoes";
import TipoExcluirCliente from "./TipoExcluirCliente";
import TipoAtualizarCliente from "./tipoAtualizarCliente";
import TipoCadastroCliente from "./tipoCadastroCliente";
import TipoListagemClientes from "./tipoListagemClientes";


export default class Principal extends Processo {
    constructor() {
        super();
        this.execucao = true;
        this.menu = new MenuPrincipal();
    }

    processar(): void {
        while (this.execucao) {
            this.menu.mostrar();
            this.opcao = this.entrada.receberNumero('Qual opção desejada?');
            switch (this.opcao) {
                case 1:
                    this.processo = new TipoCadastroCliente();
                    this.processo.processar();
                    break;
                case 2:
                    this.processo = new TipoAtualizarCliente();
                    this.processo.processar();
                    break;
                case 3:
                    this.processo = new TipoListagemClientes();
                    this.processo.processar();
                    break;
                case 4:
                    this.processo = new TipoExcluirCliente();
                    this.processo.processar();
                    break;


                case 5:
                    this.processo = new CadastroAcomodacoes();
                    this.processo.processar();
                    break;
                case 6:
                    this.processo = new ListagemAcomodacoes();
                    this.processo.processar();
                    break
                case 7:
                    this.processo = new ExcluirAcomodacao();
                    this.processo.processar();
                    break
                case 8:
                    this.processo = new ControleHospedagem();
                    this.processo.processar();
                    break                    

                case 0:
                    this.execucao = false;
                    console.clear();
                    console.log("Saindo...");
                    break;
                default:
                    console.log('Opção não entendida :(');
            }
        }
    }
}
