import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemTitulares extends Processo {
    private clientes: Cliente[];
    private impressor!: Impressor;

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a listagem dos clientes titulares e seus dependentes...');

        if (this.clientes.length === 0) {
            console.log('Não há titulares cadastrados.');
        } else {
            let numeroCliente = 1;
            let titularesEncontrados = false;

            this.clientes.forEach(cliente => {
                if (this.ehTitular(cliente)) {
                    titularesEncontrados = true;
                    console.log(`Cliente Titular ${numeroCliente}:`);
                    this.impressor = new ImpressaorCliente(cliente);
                    console.log(this.impressor.imprimir());

                    if (cliente.Dependentes.length > 0) {
                        cliente.Dependentes.forEach(dependente => {
                            console.log(`Dependente ${numeroCliente}.${cliente.Dependentes.indexOf(dependente) + 1}:`);
                            this.impressor = new ImpressaorCliente(dependente);
                            console.log(this.impressor.imprimir());
                        });
                    } else {
                        console.log('   - Este titular não possui dependentes.');
                    }

                    numeroCliente++;
                }
            });

            if (!titularesEncontrados) {
                console.log('Não há titulares cadastrados.');
            }
        }
    }

    private ehTitular(cliente: Cliente): boolean {
        return cliente.Titular === undefined;
    }
}
