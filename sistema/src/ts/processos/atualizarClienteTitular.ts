import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./submenus/cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class AtualizarClienteTitular extends Processo {
    processar(): void {
        console.clear();
        console.log('Iniciando a atualização de um cliente titular...');

        const clientesTitulares = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular === undefined);

        if (clientesTitulares.length === 0) {
            console.log('Não há clientes titulares para atualizar.');
            return;
        }

        console.log('Clientes Titulares:');
        clientesTitulares.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.Nome}`);
        });

        const indiceClienteSelecionado = this.entrada.receberNumero('Selecione o número do cliente titular a ser atualizado:');
        const clienteSelecionado = this.obterClienteTitularPorIndice(indiceClienteSelecionado);

        if (clienteSelecionado) {
            console.log('Atualizando informações do cliente titular...');

            let nome = this.entrada.receberTexto(`Nome atual: ${clienteSelecionado.Nome}. Novo nome (pressione enter para manter o mesmo):`);
            if (nome) clienteSelecionado.Nome = nome;

            let nomeSocial = this.entrada.receberTexto(`Nome social atual: ${clienteSelecionado.NomeSocial}. Novo nome social (pressione enter para manter o mesmo):`);
            if (nomeSocial) clienteSelecionado.NomeSocial = nomeSocial;

            let dataNascimentoTexto = this.entrada.receberTexto(`Data de nascimento atual: ${clienteSelecionado.DataNascimento.toLocaleDateString()}. Nova data de nascimento (pressione enter para manter a mesma):`);
            if (dataNascimentoTexto) {
                let novaDataNascimento = new Date(dataNascimentoTexto);
                if (!isNaN(novaDataNascimento.getTime())) {
                    clienteSelecionado.DataNascimento = novaDataNascimento;
                } else {
                    console.log('Data de nascimento inválida. Mantendo a data de nascimento atual.');
                }
            }

            this.processo = new CadastroEnderecoTitular(clienteSelecionado);
            this.processo.processar();

            this.processo = new CadastrarDocumentosCliente(clienteSelecionado);
            this.processo.processar();

            console.log('Dependentes do cliente titular selecionado:');
            if (clienteSelecionado.Dependentes.length > 0) {
                clienteSelecionado.Dependentes.forEach((dependente, index) => {
                    console.log(`${index + 1}. ${dependente.Nome}`);
                });

                const removerDependentes = this.entrada.receberTexto('Deseja remover algum dependente? (s/n):');
                if (removerDependentes.toLowerCase() === 's') {
                    const indicesDependentes = this.entrada.receberTexto('Digite os números dos dependentes a serem removidos, separados por vírgula:');
                    const indices = indicesDependentes.split(',').map(num => parseInt(num.trim(), 10));

                    indices.forEach(indice => {
                        const dependente = clienteSelecionado.Dependentes[indice - 1];
                        if (dependente) {
                            clienteSelecionado.removerDependente(dependente);
                        }
                    });

                    console.log('Dependentes removidos com sucesso.');
                }
            } else {
                console.log('Este cliente titular não possui dependentes.');
            }

            console.log('Atualização do cliente titular concluída.');
        } else {
            console.log('Cliente titular selecionado inválido.');
        }
    }

    private obterClienteTitularPorIndice(indice: number): Cliente | undefined {
        const clientesTitulares = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular === undefined);
        return clientesTitulares[indice - 1];
    }
}
