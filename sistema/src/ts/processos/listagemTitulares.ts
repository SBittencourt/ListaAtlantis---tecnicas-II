import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Cliente from "../modelos/cliente";

export default class ListagemTitulares extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a listagem dos clientes titulares e seus dependentes...');

        if (this.clientes.length === 0) {
            console.log('Não há titulares cadastrados.');
            return;
        }

        console.log('Clientes Titulares:');
        this.clientes.forEach((cliente, index) => {
            if (cliente.Titular === undefined) {
                console.log(`${index + 1}. ${cliente.Nome}`);
            }
        });

        const indiceSelecionado = this.entrada.receberNumero('Selecione o número do cliente titular para ver seus detalhes:');
        const clienteSelecionado = this.obterClienteTitularPorIndice(indiceSelecionado);

        if (clienteSelecionado) {
            console.log(`Detalhes do Cliente Titular ${indiceSelecionado}:`);
            const impressor = new ImpressaorCliente(clienteSelecionado);
            console.log(impressor.imprimir());

            if (clienteSelecionado.Dependentes.length > 0) {
                console.log('Dependentes:');
                clienteSelecionado.Dependentes.forEach(dependente => {
                    const impressorDependente = new ImpressaorCliente(dependente);
                    console.log(impressorDependente.imprimir());
                });
            } else {
                console.log('Este titular não possui dependentes.');
            }
        } else {
            console.log('Cliente titular selecionado inválido.');
        }
    }

    private obterClienteTitularPorIndice(indice: number): Cliente | undefined {
        const clientesTitulares = this.clientes.filter(cliente => cliente.Titular === undefined);
        return clientesTitulares[indice - 1];
    }
}
