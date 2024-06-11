import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";
import CadastrarDocumentosCliente from "./submenus/cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class CadastroClienteTitular extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente...')
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')

        let telefones: Telefone[] = [];
        let adicionarTelefone = true;
 
        while (adicionarTelefone) {
            let ddd = this.entrada.receberTexto('Qual o DDD do telefone?');
            let numero = this.entrada.receberTexto('Qual o número do telefone?');
            let telefone = new Telefone(ddd, numero);

            telefones.push(telefone);

            let resposta = this.entrada.receberTexto('Deseja adicionar mais um telefone? (s/n)');
            adicionarTelefone = resposta.toLowerCase() === 's';
        }

        let cliente = new Cliente(nome, nomeSocial, dataNascimento);
        telefones.forEach(telefone => cliente.adicionarTelefone(telefone));

        this.processo = new CadastroEnderecoTitular(cliente)
        this.processo.processar()

        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(cliente)

        console.log('Finalizando o cadastro do cliente...')
    }
}
