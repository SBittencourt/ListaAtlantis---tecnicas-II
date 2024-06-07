import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorAcomodacao from "../impressores/impressorAcomodacao";
import Acomodacao from "../modelos/acomodacao";
import { NomeAcomodacao } from "../enumeracoes/NomeAcomadacao";

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


        const quantidadePorTipo = new Map<NomeAcomodacao, number>();

        this.acomodacoes.forEach(acomodacao => {
            const tipo = acomodacao.NomeAcomadacao; 
            if (quantidadePorTipo.has(tipo)) {
                quantidadePorTipo.set(tipo, quantidadePorTipo.get(tipo)! + 1);
            } else {
                quantidadePorTipo.set(tipo, 1);
            }
        });

        quantidadePorTipo.forEach((quantidade, tipo) => {
            console.log(`${tipo}: ${quantidade} disponíveis`);
            console.log("Especificações:");
            console.log("-----------------------------------------------");
            this.acomodacoes.filter(acomodacao => acomodacao.NomeAcomadacao === tipo).forEach(acomodacao => {
                const impressor = new ImpressorAcomodacao(acomodacao);
                console.log(impressor.imprimir());
                console.log("-----------------------------------------------");
            });
        });

        if (quantidadePorTipo.size === 0) {
            console.log('Não há acomodações disponíveis no momento.');
        }
    }
}
