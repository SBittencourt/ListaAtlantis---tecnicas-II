import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";
import Hospedagem from "../modelos/hospedagem";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private acomodacoes: Acomodacao[] = []
    private hospedagens: Hospedagem[] = [] // Adicionando hospedagens
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

    public get Hospedagens() {
        return this.hospedagens;
    }

    public adicionarHospedagem(hospedagem: Hospedagem): void {
        this.hospedagens.push(hospedagem);
    }

    public removerHospedagem(hospedagem: Hospedagem): void {
        this.hospedagens = this.hospedagens.filter(h => h !== hospedagem);
    }
}
