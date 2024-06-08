import React, { useState } from "react";
import { Link } from "react-router-dom";

type Acomodacao = {
    nome: string;
    descricao: string;
};

type Props = {
    tema: string;
    seletorView: (novaTela: string, evento: Event) => void;
};

const ListaAcomodacoes: React.FC<Props> = ({ tema, seletorView }) => {
    const [acomodacaoSelecionadaIndex, setAcomodacaoSelecionadaIndex] = useState<number | null>(null);

    const handleClick = (acomodacaoIndex: number) => {
        setAcomodacaoSelecionadaIndex(acomodacaoIndex);
    };

    const acomodacoes: Acomodacao[] = [
        { nome: "Solteiro Simples", descricao: "Acomodação simples para solteiro(a)" },
        { nome: "Casal Simples", descricao: "Acomodação simples para casal" },
        { nome: "Família Simples", descricao: "Acomodação para família com até duas crianças" },
        { nome: "Família Mais", descricao: "Acomodação para família com até cinco crianças" },
        { nome: "Solteiro Mais", descricao: "Acomodação com garagem para solteiro(a)" },
        { nome: "Família Super", descricao: "Acomodação para até duas famílias, casal e três crianças cada" }
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
                                        <div className="mt-3">
                                            <button className="btn btn-danger btn-sm ml-2">Excluir</button>
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
