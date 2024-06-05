import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
    private titular: Cliente;

    constructor(titular: Cliente) {
        super();
        this.titular = titular;
    }

    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente dependente...');
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente dependente?');
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente dependente?');
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento do dependente?');
        let dependente = new Cliente(nome, nomeSocial, dataNascimento);

        dependente.Endereco = this.titular.Endereco;

        this.processo = new CadastrarDocumentosCliente(dependente);
        this.processo.processar();

        this.titular.Dependentes.push(dependente);
        dependente.Titular = this.titular;

        let armazem = Armazem.InstanciaUnica;
        armazem.Clientes.push(dependente);

        console.log('Finalizando o cadastro do cliente dependente...');
    }
}
