import React from "react";
import { Link } from "react-router-dom";

type Props = {
    tema: string;
};

const Home: React.FC<Props> = ({ tema }) => {
    return (
        <div className="container my-5">
            <div className="text-center mb-5">
                <h1 className="mb-4">Bem-vindo ao Atlantis Water Park!</h1>
                <p className="mb-4">
                    O melhor lugar para as suas férias e comemorações!
                </p>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4 d-flex mb-4">
                    <div className="card h-100 w-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Cadastrar novo cliente</h5>
                            <p className="card-text flex-grow-1">
                                Cadastre novos clientes titulares e dependentes
                            </p>
                            <Link to="/cadastro" className="btn btn-primary mt-auto">Cadastrar Cliente</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex mb-4">
                    <div className="card h-100 w-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Ver clientes</h5>
                            <p className="card-text flex-grow-1">
                                Visualize os clientes titulares cadastrados e seus dependentes
                            </p>
                            <Link to="/clientes" className="btn btn-primary mt-auto">Ver Clientes</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex mb-4">
                    <div className="card h-100 w-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Acomodações</h5>
                            <p className="card-text flex-grow-1">
                                Verifique nossas acomodações para garantir o melhor serviço aos nossos hóspedes
                            </p>
                            <Link to="/acomodacoes" className="btn btn-primary mt-auto">Ver Acomodações</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4 d-flex mb-4">
                    <div className="card h-100 w-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Atualizar acomodações</h5>
                            <p className="card-text flex-grow-1">
                                Mantenha nossas acomodações sempre atualizadas para nossos clientes
                            </p>
                            <Link to="/cadastro-acomodacao" className="btn btn-primary mt-auto">Atualizar Acomodações</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex mb-4">
                    <div className="card h-100 w-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Hospedagem</h5>
                            <p className="card-text flex-grow-1">
                                Gerencie os clientes hospedados e suas acomodações.
                            </p>
                            <Link to="/hospedagem" className="btn btn-primary mt-auto">Ver Hospedagem</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex mb-4">
                    <div className="card h-100 w-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Check-in</h5>
                            <p className="card-text flex-grow-1">
                                Realize o check-in dos clientes nas acomodações disponíveis.
                            </p>
                            <Link to="/check-in" className="btn btn-primary mt-auto">Realizar Check-in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
