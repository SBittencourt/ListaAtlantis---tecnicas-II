import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./submenus/cadastrarDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
    private titular: Cliente;

    constructor(titular: Cliente) {
        super();
        this.titular = titular;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando o cadastro de um novo cliente dependente...');

        console.log('Clientes Titulares Cadastrados:');
        Armazem.InstanciaUnica.Clientes.forEach((cliente, index) => {
            if (cliente.Titular === undefined) {
                console.log(`${index + 1}. ${cliente.Nome}`);
            }
        });

        const indiceSelecionado = this.entrada.receberNumero('Selecione o número do cliente titular para associar o dependente:');
        const clienteSelecionado = this.obterClienteTitularPorIndice(indiceSelecionado);

        if (clienteSelecionado) {
            let nome = this.entrada.receberTexto('Qual o nome do novo cliente dependente?');
            let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente dependente?');
            let dataNascimento = this.entrada.receberData('Qual a data de nascimento do dependente?');
            let dependente = new Cliente(nome, nomeSocial, dataNascimento);

            dependente.Endereco = clienteSelecionado.Endereco;

            clienteSelecionado.Telefones.forEach(telefone => {
                dependente.adicionarTelefone(telefone);
            });

            this.processo = new CadastrarDocumentosCliente(dependente);
            this.processo.processar();

            clienteSelecionado.Dependentes.push(dependente);
            dependente.Titular = clienteSelecionado;

            Armazem.InstanciaUnica.Clientes.push(dependente);

            console.log('Finalizando o cadastro do cliente dependente...');
        } else {
            console.log('Cliente titular selecionado inválido. O cadastro do cliente dependente não pode ser concluído.');
        }
    }

    private obterClienteTitularPorIndice(indice: number): Cliente | undefined {
        let clientesTitulares: Cliente[] = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular === undefined);
        return clientesTitulares[indice - 1];
    }
}
