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

        const clientesTitulares = this.clientes.filter(cliente => cliente.Titular === undefined);

        if (clientesTitulares.length === 0) {
            console.log('Não há clientes titulares para listar seus dependentes.');
            return;
        }

        console.log('Clientes Titulares:');
        clientesTitulares.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.Nome}`);
        });

        const indiceTitularSelecionado = this.entrada.receberNumero('Selecione o número do cliente titular para ver seus dependentes:');
        const clienteTitularSelecionado = this.obterClienteTitularPorIndice(indiceTitularSelecionado);

        if (clienteTitularSelecionado) {
            console.log(`Dependentes do cliente titular ${clienteTitularSelecionado.Nome}:`);
            if (clienteTitularSelecionado.Dependentes.length > 0) {
                clienteTitularSelecionado.Dependentes.forEach(dependente => {
                    this.impressor = new ImpressaorCliente(dependente);
                    console.log(`- ${dependente.Nome}, Titular: ${clienteTitularSelecionado.Nome}`);
                    console.log(this.impressor.imprimir());
                });
            } else {
                console.log('Este cliente titular não possui dependentes.');
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
