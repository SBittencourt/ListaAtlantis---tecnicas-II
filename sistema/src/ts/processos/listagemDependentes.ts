import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[];
    private impressor!: Impressor;

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a listagem dos clientes titulares e seus dependentes...');

        console.log('Clientes Titulares:');
        this.clientes.forEach((cliente, index) => {
            if (cliente.Titular === undefined) {
                console.log(`${index + 1}. ${cliente.Nome}`);
            }
        });

        const indiceTitularSelecionado = this.entrada.receberNumero('Selecione o número do cliente titular para ver seus dependentes:');
        const clienteTitularSelecionado = this.obterClienteTitularPorIndice(indiceTitularSelecionado);

        if (clienteTitularSelecionado) {
            console.log('Dependentes do cliente titular selecionado:');
            clienteTitularSelecionado.Dependentes.forEach(dependente => {
                this.impressor = new ImpressaorCliente(dependente);
                console.log(this.impressor.imprimir());
            });
        } else {
            console.log('Cliente titular selecionado inválido.');
        }
    }

    private obterClienteTitularPorIndice(indice: number): Cliente | undefined {
        let clientesTitulares: Cliente[] = this.clientes.filter(cliente => cliente.Titular === undefined);
        return clientesTitulares[indice - 1];
    }
}
