import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private acomodacoes: Acomodacao[] = []
    private constructor() { }
    
    public static get InstanciaUnica() {
        return this.instanciaUnica
    }
    public get Clientes() {
        return this.clientes
    }

    public excluirClienteTitular(cliente: Cliente): void {
        this.clientes = this.clientes.filter(c => c !== cliente);
    }

    public get Acomodacoes(){
        return this.acomodacoes
    }

}