import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class ExcluirClienteDependente extends Processo {
    processar(): void {
        console.clear();
        console.log('Iniciando a exclusão de um cliente dependente...');

        const clientesTitulares = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular === undefined);

        if (clientesTitulares.length === 0) {
            console.log('Não há clientes titulares cadastrados.');
            return;
        }

        console.log('Clientes Titulares:');
        clientesTitulares.forEach((clienteTitular, index) => {
            console.log(`${index + 1}. ${clienteTitular.Nome}`);
            if (clienteTitular.Dependentes.length > 0) {
                console.log('   Dependentes:');
                clienteTitular.Dependentes.forEach((dependente, idx) => {
                    console.log(`      ${index + 1}.${idx + 1}. ${dependente.Nome}`);
                });
            } else {
                console.log('   - Este titular não possui dependentes.');
            }
        });

        const indiceTitularSelecionado = this.entrada.receberNumero('Selecione o número do cliente titular para exibir os dependentes e escolher qual excluir:');
        const clienteTitularSelecionado = this.obterClienteTitularPorIndice(indiceTitularSelecionado);

        if (clienteTitularSelecionado) {
            const indiceDependenteSelecionado = this.entrada.receberNumero('Selecione o número do dependente a ser excluído:');
            const dependenteSelecionado = clienteTitularSelecionado.Dependentes[indiceDependenteSelecionado - 1];
            
            if (dependenteSelecionado) {
                clienteTitularSelecionado.Dependentes.splice(indiceDependenteSelecionado - 1, 1);
                console.log('Cliente dependente excluído com sucesso.');
            } else {
                console.log('Dependente selecionado inválido.');
            }
        } else {
            console.log('Cliente titular selecionado inválido.');
        }
    }

    private obterClienteTitularPorIndice(indice: number): Cliente | undefined {
        const clientesTitulares = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular === undefined);
        return clientesTitulares[indice - 1];
    }
}
