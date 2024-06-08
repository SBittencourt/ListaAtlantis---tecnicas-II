import React, { useState } from "react";
import { Link } from "react-router-dom";

const ClienteHospedado: React.FC<{ cliente: string; quarto: string; onCheckOut: () => void }> = ({ cliente, quarto, onCheckOut }) => (
    <div className="card mb-3">
        <div className="card-body">
            <h5 className="card-title">{cliente}</h5>
            <p className="card-text">Quarto: {quarto}</p>
            <button onClick={onCheckOut} className="btn btn-danger mr-2">Check-out</button>
        </div>
    </div>
);


const TelaHospedagem: React.FC = () => {
    const clientesHospedados: { cliente: string; quarto: string }[] = [
        { cliente: "João Silva", quarto: "Solteiro Simples" },
        { cliente: "Maria Oliveira", quarto: "Casal Simples" },
        { cliente: "Carlos Santos", quarto: "Solteiro Mais" },
        { cliente: "Ana Souza", quarto: "Família Super" },
    ];

    const clientesCheckOut: { cliente: string; quarto: string }[] = [
        { cliente: "Paulo Roberto", quarto: "Solteiro Mais" },
        { cliente: "Fernanda Lima", quarto: "Família Mais" },
    ];

    const [busca, setBusca] = useState<string>("");


    const filtrarClientes = (cliente: { cliente: string; quarto: string }) => {
        return cliente.cliente.toLowerCase().includes(busca.toLowerCase());
    };

    return (
        <div className="container">
            <h1 className="mb-4">Lista de Clientes Hospedados</h1>
            <div className="row">
                <div className="col-md-12 mb-4">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Buscar cliente..." value={busca} onChange={(e) => setBusca(e.target.value)} />
                        <Link to="/check-in" className="btn btn-primary">Check-in</Link>
                    </div>
                </div>
                <div className="col-md-6">
                <h2>Check-in Recente</h2>
                    {clientesHospedados
                        .filter(filtrarClientes)
                        .map((cliente, index) => (
                            <ClienteHospedado key={index} cliente={cliente.cliente} quarto={cliente.quarto} onCheckOut={() => console.log("Check-out")} />
                        ))}
                </div>
                <div className="col-md-6">
                    <h2>Check-out Recente</h2>
                    {clientesCheckOut
                        .map((cliente, index) => (
                            <div key={index} className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{cliente.cliente}</h5>
                                    <p className="card-text">Quarto: {cliente.quarto}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default TelaHospedagem;
