import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";

export default class Hospedagem {
    private acomodacao: Acomodacao;
    private titular: Cliente;
    private dataCheckIn: Date;
    private dataCheckOut: Date | null;

    constructor(acomodacao: Acomodacao, titular: Cliente, dataCheckIn: Date) {
        this.acomodacao = acomodacao;
        this.titular = titular;
        this.dataCheckIn = dataCheckIn;
        this.dataCheckOut = null;
    }

    public get Acomodacao() {
        return this.acomodacao;
    }

    public get Titular() {
        return this.titular;
    }

    public get DataCheckIn() {
        return this.dataCheckIn;
    }

    public get DataCheckOut(): Date | null {
        return this.dataCheckOut;
    }

    public set DataCheckOut(data: Date | null) {
        this.dataCheckOut = data;
    }
}
