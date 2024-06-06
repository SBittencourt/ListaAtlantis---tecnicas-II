import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class ExcluirClienteTitular extends Processo {
    processar(): void {
        console.clear();
        console.log('Iniciando a exclusão de um cliente titular...');

        console.log('Clientes Titulares:');
        Armazem.InstanciaUnica.Clientes.forEach((cliente, index) => {
            if (cliente.Titular === undefined) {
                console.log(`${index + 1}. ${cliente.Nome}`);
            }
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
        let clientesTitulares: Cliente[] = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular === undefined);
        return clientesTitulares[indice - 1];
    }
}
