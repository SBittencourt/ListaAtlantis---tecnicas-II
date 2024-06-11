import Armazem from "../dominio/armazem";
import Documento from "./documento";
import Endereco from "./endereco";
import Telefone from "./telefone";

export default class Cliente {
    private nome: string;
    private nomeSocial: string;
    private dataNascimento: Date;
    private dataCadastro: Date;
    private telefones: Telefone[] = [];
    private endereco!: Endereco;
    private documentos: Documento[] = [];
    private dependentes: Cliente[] = [];
    private titular!: Cliente;

    constructor(nome: string, nomeSocial: string, dataNascimento: Date) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.dataNascimento = dataNascimento;
        this.dataCadastro = new Date();
    }

    public get Nome() { return this.nome; }
    public get NomeSocial() { return this.nomeSocial; }
    public get DataNascimento() { return this.dataNascimento; }
    public get DataCadastro() { return this.dataCadastro; }
    public get Telefones() { return this.telefones; }
    public get Endereco() { return this.endereco; }
    public get Documentos() { return this.documentos; }
    public get Dependentes() { return this.dependentes; }
    public get Titular() { return this.titular; }

    public set Endereco(endereco: Endereco) { this.endereco = endereco; }
    public set Titular(titular: Cliente) { this.titular = titular; }

    public set Nome(nome: string) { this.nome = nome; }
    public set NomeSocial(nomeSocial: string) { this.nomeSocial = nomeSocial; }
    public set DataNascimento(dataNascimento: Date) { this.dataNascimento = dataNascimento; }

    public adicionarDependente(dependente: Cliente) { this.dependentes.push(dependente); }
    public removerDependente(dependente: Cliente) {
        this.dependentes = this.dependentes.filter(dep => dep !== dependente);
    }

    public adicionarTelefone(telefone: Telefone) {
        if (!this.telefones.some(tel => tel.Ddd === telefone.Ddd && tel.Numero === telefone.Numero)) {
            this.telefones.push(telefone);
        }
    }

    public removerTelefone(telefone: Telefone) {
        this.telefones = this.telefones.filter(tel => tel.Ddd !== telefone.Ddd || tel.Numero !== telefone.Numero);
    }

    estaHospedado(): boolean {
        return Armazem.InstanciaUnica.Hospedagens.some(hospedagem => hospedagem.Titular === this && hospedagem.DataCheckOut === null);
    }

    isTitular(): boolean {
        return !this.titular; 
    }
}