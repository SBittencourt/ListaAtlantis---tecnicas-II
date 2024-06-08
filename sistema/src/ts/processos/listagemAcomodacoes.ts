import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";
import { NomeAcomodacao, DescricoesAcomodacao } from "../enumeracoes/NomeAcomadacao";

export default class ListagemAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[];

    constructor() {
        super();
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a listagem das acomodações ofertadas...');
        console.log(`-------------------------------------------------`);

        const ocupadasPorTipo = new Map<NomeAcomodacao, number>();
        const disponiveisPorTipo = new Map<NomeAcomodacao, number>();

        this.acomodacoes.forEach(acomodacao => {
            const tipo = acomodacao.NomeAcomadacao;
            if (acomodacao.estaOcupada()) {
                if (ocupadasPorTipo.has(tipo)) {
                    ocupadasPorTipo.set(tipo, ocupadasPorTipo.get(tipo)! + 1);
                } else {
                    ocupadasPorTipo.set(tipo, 1);
                }
            } else {
                if (disponiveisPorTipo.has(tipo)) {
                    disponiveisPorTipo.set(tipo, disponiveisPorTipo.get(tipo)! + 1);
                } else {
                    disponiveisPorTipo.set(tipo, 1);
                }
            }
        });

        console.log(`Detalhes de cada tipo de acomodação:`);
        console.log(`-------------------------------------------------`);

        disponiveisPorTipo.forEach((quantidade, tipo) => {
            console.log(`${tipo}`);
            console.log(` `);
            console.log(`Disponíveis: ${quantidade}`);
            console.log(`Ocupadas: ${ocupadasPorTipo.get(tipo) || 0}`);
            console.log(`Descrição: ${DescricoesAcomodacao[tipo]}`);
            console.log(` `);
            console.log(`Especificações:`);
            const acomodacao = this.acomodacoes.find(a => a.NomeAcomadacao === tipo);
            if (acomodacao) {
                console.log(`Cama Solteiro: ${acomodacao.CamaSolteiro}`);
                console.log(`Cama Casal: ${acomodacao.CamaCasal}`);
                console.log(`Suíte: ${acomodacao.Suite}`);
                console.log(`Climatização: ${acomodacao.Climatizacao ? 'Sim' : 'Não'}`);
                console.log(`Garagem: ${acomodacao.Garagem}`);
            }
            console.log("-----------------------------------------------");
        });

        ocupadasPorTipo.forEach((quantidade, tipo) => {
            if (!disponiveisPorTipo.has(tipo)) {
                console.log(`${tipo}`);
                console.log(` `);
                console.log(`Disponíveis: 0`);
                console.log(`Ocupadas: ${quantidade}`);
                console.log(`Descrição: ${DescricoesAcomodacao[tipo]}`);
                console.log(` `);
                console.log(`Especificações:`);
                const acomodacao = this.acomodacoes.find(a => a.NomeAcomadacao === tipo);
                if (acomodacao) {
                    console.log(`Cama Solteiro: ${acomodacao.CamaSolteiro}`);
                    console.log(`Cama Casal: ${acomodacao.CamaCasal}`);
                    console.log(`Suíte: ${acomodacao.Suite}`);
                    console.log(`Climatização: ${acomodacao.Climatizacao ? 'Sim' : 'Não'}`);
                    console.log(`Garagem: ${acomodacao.Garagem}`);
                }
                console.log("-----------------------------------------------");
            }
        });

        console.log(`-------------------------------------------------`);
        if (this.acomodacoes.length === 0) {
            console.log('Não há acomodações disponíveis no momento.');
        }
        console.log(`-------------------------------------------------`);
    }
}
