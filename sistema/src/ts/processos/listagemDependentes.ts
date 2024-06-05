import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos clientes titulares e seus dependentes...')
        this.clientes.forEach(cliente => {
            if (this.ehTitular(cliente)) {
                this.impressor = new ImpressaorCliente(cliente)
                console.log(this.impressor.imprimir())

                if (cliente.Dependentes.length > 0) {
                    console.log('Dependentes:')
                    cliente.Dependentes.forEach(dependente => {
                        this.impressor = new ImpressaorCliente(dependente)
                        console.log(this.impressor.imprimir())
                    })
                } else {
                    console.log('Este titular não possui dependentes.')
                }
            }
        })
    }

    private ehTitular(cliente: Cliente): boolean {
        return cliente.Titular === undefined
    }
}
