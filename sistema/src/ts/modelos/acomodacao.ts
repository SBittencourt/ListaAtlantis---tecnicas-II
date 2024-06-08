import { NomeAcomodacao } from "../enumeracoes/NomeAcomadacao";
import Hospedagem from "./hospedagem";

export default class Acomodacao {
    private nomeAcomadacao: NomeAcomodacao;
    private camaSolteiro: number;
    private camaCasal: number;
    private suite: number;
    private climatizacao: boolean;
    private garagem: number;
    private hospedagem: Hospedagem | null;

    constructor(nomeAcomadacao: NomeAcomodacao, camaSolteiro: number, camaCasal: number,
        suite: number, climatizacao: boolean, garagem: number) {
        this.nomeAcomadacao = nomeAcomadacao;
        this.camaSolteiro = camaSolteiro;
        this.camaCasal = camaCasal;
        this.suite = suite;
        this.climatizacao = climatizacao;
        this.garagem = garagem;
        this.hospedagem = null; // Inicialmente não há hospedagem associada
    }

    public get NomeAcomadacao() { return this.nomeAcomadacao; }
    public get CamaSolteiro() { return this.camaSolteiro; }
    public get CamaCasal() { return this.camaCasal; }
    public get Suite() { return this.suite; }
    public get Climatizacao() { return this.climatizacao; }
    public get Garagem() { return this.garagem; }
    public get Hospedagem() { return this.hospedagem; }

    // Método para associar uma hospedagem à acomodação
    public associarHospedagem(hospedagem: Hospedagem): void {
        this.hospedagem = hospedagem;
    }

    // Método para desassociar uma hospedagem da acomodação
    public desassociarHospedagem(): void {
        this.hospedagem = null;
    }

    // Método para verificar se a acomodação está ocupada
    public estaOcupada(): boolean {
        return this.hospedagem !== null;
    }
}
