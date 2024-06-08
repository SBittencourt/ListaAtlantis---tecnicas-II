import React, { useState } from "react";
import { Link } from "react-router-dom";

enum NomeAcomodacao {
    SolteiroSimples = 'Solteiro Simples',
    CasalSimples = 'Casal Simples',
    FamiliaSimples = 'Familia Simples',
    FamiliaMais = 'Familia Mais',
    SolteiroMais = 'Solteiro Mais',
    FamiliaSuper = 'Familia Super'
}

const DescricoesAcomodacao = {
    [NomeAcomodacao.SolteiroSimples]: 'Acomodação simples para solteiro(a)',
    [NomeAcomodacao.CasalSimples]: 'Acomodação simples para casal',
    [NomeAcomodacao.FamiliaSimples]: 'Acomodação para família com até duas crianças',
    [NomeAcomodacao.FamiliaMais]: 'Acomodação para família com até cinco crianças',
    [NomeAcomodacao.SolteiroMais]: 'Acomodação com garagem para solteiro(a)',
    [NomeAcomodacao.FamiliaSuper]: 'Acomodação para até duas famílias, casal e três crianças cada'
};

type Acomodacao = {
    nome: NomeAcomodacao;
    descricao: string;
    especificacoes: string[];
    disponiveis: number;
    ocupadas: number;
};

type Props = {
    tema: string;
    seletorView: (novaTela: string, evento: Event) => void;
};

const ListaAcomodacoes: React.FC<Props> = ({ tema, seletorView }) => {
    const [acomodacaoSelecionadaIndex, setAcomodacaoSelecionadaIndex] = useState<number | null>(null);

    const handleClick = (acomodacaoIndex: number) => {
        if (acomodacaoSelecionadaIndex === acomodacaoIndex) {
            setAcomodacaoSelecionadaIndex(null);
        } else {
            setAcomodacaoSelecionadaIndex(acomodacaoIndex);
        }
    };

    const acomodacoes: Acomodacao[] = [
        { 
            nome: NomeAcomodacao.SolteiroSimples, 
            descricao: DescricoesAcomodacao[NomeAcomodacao.SolteiroSimples], 
            especificacoes: ["Cama solteiro: 1", "Cama casal: 0 (não possuí)", "Suíte: 1", "Climatizado: sim", "Garagem: 0 (não possuí)"],
            disponiveis: 10,
            ocupadas: 5
        },
        { 
            nome: NomeAcomodacao.SolteiroMais, 
            descricao: DescricoesAcomodacao[NomeAcomodacao.SolteiroMais], 
            especificacoes: ["Cama solteiro: 0 (não possuí)", "Cama casal: 1", "Suíte: 1", "Climatizado: sim", "Garagem: 1"],
            disponiveis: 6,
            ocupadas: 1
        },
        { 
            nome: NomeAcomodacao.CasalSimples, 
            descricao: DescricoesAcomodacao[NomeAcomodacao.CasalSimples], 
            especificacoes: ["Cama solteiro: 0 (não possuí)", "Cama casal: 1", "Suíte: 1", "Climatizado: sim", "Garagem: 1"],
            disponiveis: 5,
            ocupadas: 2
        },
        { 
            nome: NomeAcomodacao.FamiliaSimples, 
            descricao: DescricoesAcomodacao[NomeAcomodacao.FamiliaSimples], 
            especificacoes: ["Cama solteiro: 2", "Cama casal: 1", "Suíte: 1", "Climatizado: sim", "Garagem: 1"],
            disponiveis: 8,
            ocupadas: 3
        },
        { 
            nome: NomeAcomodacao.FamiliaMais, 
            descricao: DescricoesAcomodacao[NomeAcomodacao.FamiliaMais], 
            especificacoes: ["Cama solteiro: 5", "Cama casal: 1", "Suíte: 2", "Climatizado: sim", "Garagem: 2"],
            disponiveis: 12,
            ocupadas: 6
        },
        { 
            nome: NomeAcomodacao.FamiliaSuper, 
            descricao: DescricoesAcomodacao[NomeAcomodacao.FamiliaSuper], 
            especificacoes: ["Cama solteiro: 6", "Cama casal: 2", "Suíte: 3", "Climatizado: sim", "Garagem: 2"],
            disponiveis: 15,
            ocupadas: 8
        }
    ];

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-start mb-3">
                <Link to="/cadastro-acomodacao" className="btn btn-primary">Cadastrar nova acomodação</Link>
            </div>
            <div className="list-group">
                {acomodacoes.map((acomodacao, acomodacaoIndex) => (
                    <div key={acomodacaoIndex}>
                        <a
                            href="#"
                            className="list-group-item list-group-item-action"
                            onClick={() => handleClick(acomodacaoIndex)}
                            style={{ cursor: "pointer", background: tema }}
                        >
                            {acomodacao.nome}
                            {acomodacaoSelecionadaIndex === acomodacaoIndex && (
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{acomodacao.nome}</h5>
                                        <p className="card-text">{acomodacao.descricao}</p>
                                        <p>Disponíveis: {acomodacao.disponiveis}</p>
                                        <p>Ocupadas: {acomodacao.ocupadas}</p>
                                        <div className="mt-3">
                                            <h6>Especificações:</h6>
                                            <ul>
                                                {acomodacao.especificacoes.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                           
                                        </div>
                                    </div>
                                </div>
                            )}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaAcomodacoes;
