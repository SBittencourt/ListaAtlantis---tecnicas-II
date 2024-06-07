import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";
import { NomeAcomodacao } from "../enumeracoes/NomeAcomadacao";

import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[];

    constructor() {
        super();
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
        this.execucao = true;
    }

    mostrarMenu(): void {
        console.log("Escolha o tipo de acomodação:");
        console.log("1 - Acomodação simples para solteiro(a)");
        console.log("2 - Acomodação simples para casal");
        console.log("3 - Acomodação para família com até duas crianças");
        console.log("4 - Acomodação para família com até cinco crianças");
        console.log("5 - Acomodação com garagem para solteiro(a)");
        console.log("6 - Acomodação para até duas famílias, casal e três crianças cada");
    }

    processar(): void {
        this.mostrarMenu();
        this.opcao = this.entrada.receberNumero('Escolha o tipo de acomodação: ');

        let diretor;

        switch (this.opcao) {
            case 1:
                diretor = new DiretorSolteiroSimples();
                break;
            case 2:
                diretor = new DiretorCasalSimples();
                break;
            case 3:
                diretor = new DiretorFamiliaSimples();
                break;
            case 4:
                diretor = new DiretorFamiliaMais();
                break;
            case 5:
                diretor = new DiretorSolteiroMais();
                break;
            case 6:
                diretor = new DiretorFamiliaSuper();
                break;
            default:
                console.log("Opção inválida");
                this.execucao = false;
                return;
        }

        this.acomodacoes.push(diretor.construir());
        console.log("Acomodação cadastrada com sucesso!");
        this.execucao = false;
    }
}
