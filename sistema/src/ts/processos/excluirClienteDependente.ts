import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class ExcluirClienteDependente extends Processo {
    processar(): void {
        console.clear();
        console.log('Iniciando a exclusão de um cliente dependente...');

        const clientesDependentes = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular !== undefined);

        if (clientesDependentes.length === 0) {
            console.log('Não há clientes dependentes para excluir.');
            return;
        }

        console.log('Clientes Dependentes:');
        clientesDependentes.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.Nome}`);
        });

        const indiceClienteSelecionado = this.entrada.receberNumero('Selecione o número do cliente dependente a ser excluído:');
        const clienteSelecionado = this.obterClienteDependentePorIndice(indiceClienteSelecionado);

        if (clienteSelecionado) {
            const titular = clienteSelecionado.Titular;
            titular?.Dependentes.splice(titular.Dependentes.indexOf(clienteSelecionado), 1);
            console.log('Cliente dependente excluído com sucesso.');
        } else {
            console.log('Cliente dependente selecionado inválido.');
        }
    }

    private obterClienteDependentePorIndice(indice: number): Cliente | undefined {
        const clientesDependentes = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular !== undefined);
        return clientesDependentes[indice - 1];
    }
}
