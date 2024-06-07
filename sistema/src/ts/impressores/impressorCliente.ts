import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";

export default class ImpressorCliente implements Impressor {
    private cliente: Cliente;
    private impressor!: Impressor;

    constructor(cliente: Cliente) {
        this.cliente = cliente;
    }

    imprimir(): string {
        let impressao = `----------------------------\n`
            + ` \n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}\n`
            + ` \n`;

        this.impressor = new ImpressorEndereco(this.cliente.Endereco);
        impressao = impressao + `${this.impressor.imprimir()}\n`;

        this.impressor = new ImpressorDocumentos(this.cliente.Documentos);
        impressao = impressao + `${this.impressor.imprimir()}\n`;

        impressao = impressao + `| Telefones:\n`;
        this.cliente.Telefones.forEach(telefone => {
            impressao += `| - DDD: ${telefone.Ddd}, Número: ${telefone.Numero}\n`;
        });

        impressao = impressao + `\n----------------------------`;
        return impressao;
    }
}
