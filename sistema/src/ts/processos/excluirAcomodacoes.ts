import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Entrada from "../io/entrada";
import Acomodacao from "../modelos/acomodacao";

export default class ExcluirAcomodacao extends Processo {
    private acomodacoes: Acomodacao[];

    constructor() {
        super();
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando o processo de exclusão de acomodação...');
        console.log('-------------------------------------------------');

        if (this.acomodacoes.length === 0) {
            console.log('Não há acomodações disponíveis para exclusão.');
            return;
        }

        console.log('Acomodações disponíveis para exclusão:');
        console.log('--------------------------------------');
        this.acomodacoes.forEach((acomodacao, index) => {
            console.log(`${index + 1}. ID: ${index}, Tipo: ${acomodacao.NomeAcomadacao}`);
        });
        console.log('--------------------------------------');

        const entrada = new Entrada();
        const numeroAcomodacao = entrada.receberNumero('Digite o número da acomodação que deseja excluir: ');

        if (numeroAcomodacao < 1 || numeroAcomodacao > this.acomodacoes.length) {
            console.log('Número de acomodação inválido.');
            return;
        }

        const acomodacaoExcluir = this.acomodacoes[numeroAcomodacao];
        this.acomodacoes.splice(numeroAcomodacao - 1, 1);

        console.log(`Acomodação ${acomodacaoExcluir.NomeAcomadacao} excluída com sucesso.`);
    }
}
