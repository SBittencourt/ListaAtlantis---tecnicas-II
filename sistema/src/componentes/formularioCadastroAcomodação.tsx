import React, { useState } from "react";

// Definindo enum para os nomes das acomodações
enum NomeAcomodacao {
    SolteiroSimples = "Solteiro Simples",
    SolteiroMais = "Solteiro Mais",
    CasalSimples = "Casal Simples",
    FamiliaSimples = "Família Simples",
    FamiliaMais = "Família Mais",
    FamiliaSuper = "Família Super",
}

// Definindo um tipo para as descrições das acomodações
type DescricoesAcomodacao = {
    [key in NomeAcomodacao]: string;
};

// Definindo um tipo para as especificações das acomodações
type EspecificacoesAcomodacao = {
    [key in NomeAcomodacao]: string[];
};

// Definindo uma interface para as acomodações
interface Acomodacao {
    nome: NomeAcomodacao;
    descricao: string;
    especificacoes: string[];
    disponiveis: number;
    ocupadas: number;
}

const FormularioAtualizarAcomodacao: React.FC = () => {
    // Estado para armazenar as acomodações
    const [acomodacoes, setAcomodacoes] = useState<Acomodacao[]>([
        {
            nome: NomeAcomodacao.SolteiroSimples,
            descricao: "Descrição do Solteiro Simples",
            especificacoes: ["Cama solteiro: 1", "Cama casal: 0(não possuí)", "Suíte: 1", "Climatizado: sim", "Garagem: 0(não possuí)"],
            disponiveis: 10,
            ocupadas: 5
        },
        {
            nome: NomeAcomodacao.SolteiroMais,
            descricao: "Descrição do Solteiro Mais",
            especificacoes: ["Cama solteiro: 0 (não possuí)", "Cama casal: 1", "Suíte: 1", "Climatizado: sim", "Garagem: 1"],
            disponiveis: 6,
            ocupadas: 1
        },
        {
            nome: NomeAcomodacao.CasalSimples,
            descricao: "Descrição do Casal Simples",
            especificacoes: ["Cama solteiro: 0 (não possuí)", "Cama casal: 1", "Suíte: 1", "Climatizado: sim", "Garagem: 1"],
            disponiveis: 5,
            ocupadas: 2
        },
        {
            nome: NomeAcomodacao.FamiliaSimples,
            descricao: "Descrição do Família Simples",
            especificacoes: ["Cama solteiro: 2", "Cama casal: 1", "Suíte: 1", "Climatizado: sim", "Garagem: 1"],
            disponiveis: 8,
            ocupadas: 3
        },
        {
            nome: NomeAcomodacao.FamiliaMais,
            descricao: "Descrição do Família Mais",
            especificacoes: ["Cama solteiro: 5", "Cama casal: 1", "Suíte: 2", "Climatizado: sim", "Garagem: 2"],
            disponiveis: 12,
            ocupadas: 6
        },
        {
            nome: NomeAcomodacao.FamiliaSuper,
            descricao: "Descrição do Família Super",
            especificacoes: ["Cama solteiro: 6", "Cama casal: 2", "Suíte: 3", "Climatizado: sim", "Garagem: 2"],
            disponiveis: 15,
            ocupadas: 8
        }
    ]);

    // Função para aumentar a quantidade disponível de uma acomodação
    const handleIncrease = (index: number) => {
        const newAcomodacoes = [...acomodacoes];
        newAcomodacoes[index].disponiveis += 1;
        setAcomodacoes(newAcomodacoes);
    };

    // Função para diminuir a quantidade disponível de uma acomodação
    const handleDecrease = (index: number) => {
        const newAcomodacoes = [...acomodacoes];
        if (newAcomodacoes[index].disponiveis > 0) {
            newAcomodacoes[index].disponiveis -= 1;
            setAcomodacoes(newAcomodacoes);
        }
    };

    // Função para salvar uma acomodação individualmente
    const handleSave = (index: number) => {
        alert(`A acomodação ${acomodacoes[index].nome} foi atualizada com sucesso!`);
    };

    return (
        <div className="container-fluid">
            <h1>Atualizar Acomodações</h1>
            <br />
            <div className="list-group">
                {acomodacoes.map((acomodacao, index) => (
                    <div key={index} className="list-group-item">
                        <h5>{acomodacao.nome}</h5>
                        <p>{acomodacao.descricao}</p>
                        <ul>
                            {acomodacao.especificacoes.map((especificacao, i) => (
                                <li key={i}>{especificacao}</li>
                            ))}
                        </ul>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <button
                                    className="btn btn-danger btn-sm mr-2"
                                    onClick={() => handleDecrease(index)}
                                >
                                    -
                                </button>
                                <span className="mr-2">{acomodacao.disponiveis}</span>
                                <button
                                    className="btn btn-success btn-sm mr-2"
                                    onClick={() => handleIncrease(index)}
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => handleSave(index)}
                            >
                                Atualizar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormularioAtualizarAcomodacao;
