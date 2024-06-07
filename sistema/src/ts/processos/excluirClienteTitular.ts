import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class ExcluirClienteTitular extends Processo {
    processar(): void {
        console.clear();
        console.log('Iniciando a exclusão de um cliente titular...');

        const clientesTitulares = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular === undefined);

        if (clientesTitulares.length === 0) {
            console.log('Não há clientes titulares para excluir.');
            return;
        }

        console.log('Clientes Titulares:');
        clientesTitulares.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.Nome}`);
        });

        const indiceClienteSelecionado = this.entrada.receberNumero('Selecione o número do cliente titular a ser excluído:');
        const clienteSelecionado = this.obterClienteTitularPorIndice(indiceClienteSelecionado);

        if (clienteSelecionado) {
            Armazem.InstanciaUnica.excluirClienteTitular(clienteSelecionado);
            console.log('Cliente titular excluído com sucesso.');
        } else {
            console.log('Cliente titular selecionado inválido.');
        }
    }

    private obterClienteTitularPorIndice(indice: number): Cliente | undefined {
        const clientesTitulares = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular === undefined);
        return clientesTitulares[indice - 1];
    }
}
