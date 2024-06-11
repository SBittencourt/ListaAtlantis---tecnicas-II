import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Entrada from "../io/entrada";
import Acomodacao from "../modelos/acomodacao";
import Hospedagem from "../modelos/hospedagem";
import Cliente from "../modelos/cliente";

export default class ControleHospedagem extends Processo {
    private hospedagens: Hospedagem[];
    private acomodacoes: Acomodacao[];
    private clientes: Cliente[];

    constructor() {
        super();
        this.hospedagens = Armazem.InstanciaUnica.Hospedagens || [];
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
        this.clientes = Armazem.InstanciaUnica.Clientes || [];
        this.execucao = true;
    }

    mostrarMenu(): void {
        console.log("Controle de Hospedagem:");
        console.log("1 - Check-in");
        console.log("2 - Check-out");
        console.log("3 - Listar hospedagens atuais");
        console.log("4 - Sair");
    }

    processar(): void {
        while (this.execucao) {
            this.mostrarMenu();
            this.opcao = this.entrada.receberNumero('Escolha uma opção: ');

            switch (this.opcao) {
                case 1:
                    this.checkIn();
                    break;
                case 2:
                    this.checkOut();
                    break;
                case 3:
                    this.listarHospedagens();
                    break;
                case 4:
                    this.execucao = false;
                    break;
                default:
                    console.log("Opção inválida");
                    break;
            }
        }
    }

    checkIn(): void {
        console.log("Iniciando check-in...");
        if (this.acomodacoes.length === 0) {
            console.log('Não há acomodações disponíveis para check-in.');
            return;
        }

        console.log('Acomodações disponíveis para check-in:');
        this.acomodacoes.forEach((acomodacao, index) => {
            if (!acomodacao.estaOcupada()) {
                console.log(`${index + 1}.  Tipo: ${acomodacao.NomeAcomadacao}`);
            }
        });

        if (this.acomodacoes.filter(acomodacao => !acomodacao.estaOcupada()).length === 0) {
            console.log('Todas as acomodações estão ocupadas no momento.');
            return;
        }

        const numeroAcomodacao = this.entrada.receberNumero('Escolha a acomodação: ');
        if (numeroAcomodacao < 1 || numeroAcomodacao > this.acomodacoes.length) {
            console.log('Número de acomodação inválido.');
            return;
        }

        const acomodacaoEscolhida = this.acomodacoes[numeroAcomodacao - 1];

        if (acomodacaoEscolhida.estaOcupada()) {
            console.log('Esta acomodação já está ocupada.');
            return;
        }

        console.log('Clientes titulares disponíveis para check-in:');
        const clientesTitularesDisponiveis = this.clientes.filter(cliente => cliente.isTitular());
        if (clientesTitularesDisponiveis.length === 0) {
            console.log('Não há clientes titulares disponíveis para check-in.');
            return;
        }

        clientesTitularesDisponiveis.forEach((cliente, index) => {
            console.log(`${index + 1}. Nome: ${cliente.Nome}`);
        });

        const numeroCliente = this.entrada.receberNumero('Escolha o cliente titular: ');
        if (numeroCliente < 1 || numeroCliente > clientesTitularesDisponiveis.length) {
            console.log('Número de cliente inválido.');
            return;
        }

        const clienteEscolhido = clientesTitularesDisponiveis[numeroCliente - 1];

        const dataCheckIn = new Date();

        const hospedagem = new Hospedagem(acomodacaoEscolhida, clienteEscolhido, dataCheckIn);
        this.hospedagens.push(hospedagem);

        acomodacaoEscolhida.associarHospedagem(hospedagem);

        console.log(`Check-in realizado com sucesso para o hóspede ${clienteEscolhido.Nome}.`);
    }


    checkOut(): void {
        console.log("Iniciando check-out...");
        if (this.hospedagens.length === 0) {
            console.log('Não há hospedagens atuais.');
            return;
        }

        console.log('Hospedagens atuais:');
        this.hospedagens.forEach((hospedagem, index) => {
            if (hospedagem.DataCheckOut === null) {
                console.log(`${index + 1}. Hóspede: ${hospedagem.Titular.Nome}, Acomodação: ${hospedagem.Acomodacao.NomeAcomadacao}`);
            }
        });

        const numeroHospedagem = this.entrada.receberNumero('Escolha a hospedagem para check-out: ');
        if (numeroHospedagem < 1 || numeroHospedagem > this.hospedagens.length) {
            console.log('Número de hospedagem inválido.');
            return;
        }

        const hospedagemEscolhida = this.hospedagens[numeroHospedagem - 1];
        if (hospedagemEscolhida.DataCheckOut !== null) {
            console.log('Esta hospedagem já foi finalizada.');
            return;
        }

        hospedagemEscolhida.DataCheckOut = new Date();
        console.log(`Check-out realizado com sucesso para o hóspede ${hospedagemEscolhida.Titular.Nome}.`);

        const acomodacao = hospedagemEscolhida.Acomodacao;
        if (acomodacao) {
            acomodacao.desassociarHospedagem();
        }
    }


    listarHospedagens(): void {
        console.log("Listando hospedagens atuais...");
        if (this.hospedagens.length === 0) {
            console.log('Não há hospedagens atuais.');
            return;
        }

        this.hospedagens.forEach((hospedagem, index) => {
            if (hospedagem.DataCheckOut === null) {
                console.log(`${index + 1}. Hóspede: ${hospedagem.Titular.Nome}, Acomodação: ${hospedagem.Acomodacao.NomeAcomadacao}, Check-in: ${hospedagem.DataCheckIn}`);
            }
        });
    }
}
