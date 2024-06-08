import React, { useState } from "react";
import { Link } from "react-router-dom";

type Dependente = {
    nome: string;
    cpf: string;
    rg: string;
};

type Cliente = {
    nome: string;
    cpf: string;
    rg: string;
    telefone: string;
    endereco: string
    dependentes: Dependente[];
};

type Props = {
    tema: string;
    seletorView: (novaTela: string, evento: Event) => void;
};

const ListaCliente: React.FC<Props> = ({ tema, seletorView }) => {
    const [clienteSelecionadoIndex, setClienteSelecionadoIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setClienteSelecionadoIndex(clienteSelecionadoIndex === index ? null : index);
    };

    const handleCadastroCliente = () => {
        seletorView('Cadastro', new Event('click'));
    };

    const handleExcluirCliente = (index: number) => {
        console.log(`Excluir cliente ${index}`);
    };

    const handleAtualizarCliente = (index: number) => {
        console.log(`Atualizar cliente ${index}`);
    };

    const handleExcluirDependente = (clienteIndex: number, dependenteIndex: number) => {
        console.log(`Excluir dependente ${dependenteIndex} do cliente ${clienteIndex}`);
    };

    const handleAtualizarDependente = (clienteIndex: number, dependenteIndex: number) => {
        console.log(`Atualizar dependente ${dependenteIndex} do cliente ${clienteIndex}`);
    };

    const clientes: Cliente[] = [
        {
            nome: "João Silva",
            cpf: "123.456.789-00",
            rg: "1234567-8",
            telefone: "(00) 1234-5678",
            endereco: "Endereço",
            dependentes: [
                { nome: "Maria Silva", cpf: "987.654.321-00", rg: "9876543-2" },
                { nome: "José Silva", cpf: "111.222.333-44", rg: "5556667-8" }
            ]
        },
        {
            nome: "Maria Oliveira",
            cpf: "234.567.890-11",
            rg: "2345678-9",
            telefone: "(00) 2345-6789",
            endereco: "Endereço",
            dependentes: [
                { nome: "Laura Oliveira", cpf: "222.333.444-55", rg: "7778889-0" }
            ]
        },
        {
            nome: "Carlos Santos",
            cpf: "345.678.901-22",
            rg: "3456789-0",
            telefone: "(00) 3456-7890",
            endereco: "Endereço",
            dependentes: [
                { nome: "Pedro Santos", cpf: "333.444.555-66", rg: "8889990-1" }
            ]
        },
        {
            nome: "Ana Souza",
            cpf: "456.789.012-33",
            rg: "4567890-1",
            telefone: "(00) 4567-8901",
            endereco: "Endereço",
            dependentes: [
                { nome: "Júlia Souza", cpf: "444.555.666-77", rg: "9990001-2" }
            ]
        },
        {
            nome: "Fernanda Lima",
            cpf: "567.890.123-44",
            rg: "5678901-2",
            telefone: "(00) 5678-9012",
            endereco: "Endereço",
            dependentes: [
                { nome: "Gabriel Lima", cpf: "555.666.777-88", rg: "4445556-7" }
            ]
        },
        {
            nome: "Roberto Almeida",
            cpf: "678.901.234-55",
            rg: "6789012-3",
            telefone: "(00) 6789-0123",
            endereco: "Endereço",
            dependentes: [
                { nome: "Eduardo Almeida", cpf: "666.777.888-99", rg: "1112223-4" },
                { nome: "Amanda Almeida", cpf: "777.888.999-00", rg: "2223334-5" }
            ]
        },
        {
            nome: "Paula Silva",
            cpf: "789.012.345-66",
            rg: "7890123-4",
            telefone: "(00) 7890-1234",
            endereco: "Endereço",
            dependentes: [
                { nome: "Lucas Silva", cpf: "888.999.000-11", rg: "3334445-6" },
                { nome: "Carla Silva", cpf: "999.000.111-22", rg: "4445556-7" }
            ]
        },
        {
            nome: "Marcelo Santos",
            cpf: "890.123.456-77",
            rg: "8901234-5",
            telefone: "(00) 8901-2345",
            endereco: "Endereço",
            dependentes: [
                { nome: "Isabela Santos", cpf: "000.111.222-33", rg: "5556667-8" },
                { nome: "Felipe Santos", cpf: "111.222.333-44", rg: "6667778-9" }
            ]
        },
        {
            nome: "Rafaela Oliveira",
            cpf: "901.234.567-88",
            rg: "9012345-6",
            telefone: "(00) 9012-3456",
            endereco: "Endereço",
            dependentes: [
                { nome: "Vinícius Oliveira", cpf: "222.333.444-55", rg: "7778889-0" },
                { nome: "Natália Oliveira", cpf: "333.444.555-66", rg: "8889990-1" }
            ]
        },
        {
            nome: "Luciana Souza",
            cpf: "012.345.678-99",
            rg: "0123456-7",
            telefone: "(00) 0123-4567",
            endereco: "Endereço",
            dependentes: [
                { nome: "Renato Souza", cpf: "444.555.666-77", rg: "9990001-2" },
                { nome: "Patrícia Souza", cpf: "555.666.777-88", rg: "0001112-3" }
            ]
        }            
        
    ];

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-start mb-3">
                <Link to="/cadastro" className="btn btn-primary" onClick={handleCadastroCliente}>Cadastrar novo cliente</Link>
            </div>
            <div className="list-group">
                {clientes.map((cliente, clienteIndex) => (
                    <div key={clienteIndex}>
                        <a
                            href="#"
                            className="list-group-item list-group-item-action"
                            onClick={() => handleClick(clienteIndex)}
                        >
                            {cliente.nome}
                        </a>
                        {clienteSelecionadoIndex === clienteIndex && (
                            <div className="card mt-3">
                                <div className="card-body">
                                    <h5 className="card-title">{cliente.nome}</h5>
                                    <p className="card-text">CPF: {cliente.cpf}</p>
                                    <p className="card-text">RG: {cliente.rg}</p>
                                    <p className="card-text">Endereço: {cliente.endereco}</p>
                                    <p className="card-text">Telefone: {cliente.telefone}</p>
                                    <p className="card-text">Dependentes:</p>
                                    <ul className="list-group">
                                        {cliente.dependentes.map((dependente, dependenteIndex) => (
                                            <li key={dependenteIndex} className="list-group-item d-flex justify-content-between align-items-center">
                                                {dependente.nome} - CPF: {dependente.cpf}, RG: {dependente.rg}
                                                <div>
                                                    <button className="btn btn-danger btn-sm ml-2" onClick={() => handleExcluirDependente(clienteIndex, dependenteIndex)}>Excluir</button>
                                                    <button className="btn btn-primary btn-sm ml-2" onClick={() => handleAtualizarDependente(clienteIndex, dependenteIndex)}>Atualizar</button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-3">
                                        <button className="btn btn-danger btn-sm ml-2" onClick={() => handleExcluirCliente(clienteIndex)}>Excluir Cliente</button>
                                        <button className="btn btn-primary btn-sm ml-2" onClick={() => handleAtualizarCliente(clienteIndex)}>Atualizar Cliente</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaCliente;
