import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./submenus/cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class AtualizarClienteDependente extends Processo {
    processar(): void {
        console.clear();
        console.log('Iniciando a atualização de um cliente dependente...');

        const clientesDependentes = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular !== undefined);

        if (clientesDependentes.length === 0) {
            console.log('Não há clientes dependentes para atualizar.');
            return;
        }

        console.log('Clientes Dependentes:');
        clientesDependentes.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.Nome}`);
        });

        const indiceClienteSelecionado = this.entrada.receberNumero('Selecione o número do cliente dependente a ser atualizado:');
        const clienteSelecionado = this.obterClienteDependentePorIndice(indiceClienteSelecionado);

        if (clienteSelecionado) {
            console.log('Atualizando informações do cliente dependente...');

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

            console.log('Atualização do cliente dependente concluída.');
        } else {
            console.log('Cliente dependente selecionado inválido.');
        }
    }

    private obterClienteDependentePorIndice(indice: number): Cliente | undefined {
        const clientesDependentes = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular !== undefined);
        return clientesDependentes[indice - 1];
    }
}
