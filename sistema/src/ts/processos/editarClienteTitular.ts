import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

export default class EditarClienteTitular extends Processo {
    constructor(private cliente: Cliente) {
        super();
    }

    processar(): void {
        console.log('Iniciando a edição do cliente...')
        
        let novoNome = this.entrada.receberTexto('Qual é o novo nome do cliente? (Deixe em branco para manter o mesmo)');
        if (novoNome !== '') {
            this.cliente.setNome(novoNome);
        }

        let novoNomeSocial = this.entrada.receberTexto('Qual é o novo nome social do cliente? (Deixe em branco para manter o mesmo)');
        if (novoNomeSocial !== '') {
            this.cliente.setNomeSocial(novoNomeSocial);
        }

        let novaDataNascimento = this.entrada.receberData('Qual é a nova data de nascimento do cliente? (Formato: YYYY-MM-DD, deixe em branco para manter a mesma)');
        if (novaDataNascimento) {
            this.cliente.setDataNascimento(novaDataNascimento);
        }

        this.processo = new CadastroEnderecoTitular(this.cliente);
        this.processo.processar();

        this.processo = new CadastrarDocumentosCliente(this.cliente);
        this.processo.processar();

        console.log('Finalizando a edição do cliente...')
    }
}
