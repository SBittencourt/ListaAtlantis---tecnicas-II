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
            console.log('O que deseja atualizar no cliente titular selecionado?');
            console.log('1. Informações Principais (Nome, Nome Social, Data de Nascimento)');
            console.log('2. Endereço');
            console.log('3. Documentos');
            const opcao = this.entrada.receberNumero('Digite o número da opção desejada:');

            switch (opcao) {
                case 1:
                    this.atualizarInformacoesPrincipais(clienteSelecionado);
                    break;
                case 2:
                    this.processo = new CadastroEnderecoTitular(clienteSelecionado);
                    this.processo.processar();
                    break;
                case 3:
                    this.processo = new CadastrarDocumentosCliente(clienteSelecionado);
                    this.processo.processar();
                    break;
                default:
                    console.log('Opção inválida.');
            }
        } else {
            console.log('Cliente titular selecionado inválido.');
        }
    }

    private obterClienteTitularPorIndice(indice: number): Cliente | undefined {
        const clientesTitulares = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular === undefined);
        return clientesTitulares[indice - 1];
    }

    private atualizarInformacoesPrincipais(cliente: Cliente): void {
        console.log('Atualizando informações principais do cliente titular...');
        
        let nome = this.entrada.receberTexto(`Nome atual: ${cliente.Nome}. Novo nome (pressione enter para manter o mesmo):`);
        if (nome) cliente.Nome = nome;

        let nomeSocial = this.entrada.receberTexto(`Nome social atual: ${cliente.NomeSocial}. Novo nome social (pressione enter para manter o mesmo):`);
        if (nomeSocial) cliente.NomeSocial = nomeSocial;

        let dataNascimentoTexto = this.entrada.receberTexto(`Data de nascimento atual: ${cliente.DataNascimento.toLocaleDateString()}. Nova data de nascimento (pressione enter para manter a mesma):`);
        if (dataNascimentoTexto) {
            let novaDataNascimento = new Date(dataNascimentoTexto);
            if (!isNaN(novaDataNascimento.getTime())) {
                cliente.DataNascimento = novaDataNascimento;
            } else {
                console.log('Data de nascimento inválida. Mantendo a data de nascimento atual.');
            }
        }
    }
}
