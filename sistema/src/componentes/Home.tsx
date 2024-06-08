import React from "react";
import { Link } from "react-router-dom";

type Props = {
    tema: string;
};

const Home: React.FC<Props> = ({ tema }) => {
    return (
        <div className="container my-5">
            <div className="text-center mb-5">
                <h1 className="mb-4">Bem-vindo à PetLovers!</h1>
                <p className="mb-4">
                    Aqui você encontra tudo o que precisa para o cuidado e bem-estar do seu pet!
                </p>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4 d-flex mb-4">
                    <div className="card h-100 w-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Banho e Tosa</h5>
                            <p className="card-text flex-grow-1">
                                Oferecemos serviços de banho e tosa para deixar seu pet limpo e bonito, além de consultas para que se mantenha saudável.
                            </p>
                            <Link to="/servicos" className="btn btn-primary mt-auto">Ver Serviços</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex mb-4">
                    <div className="card h-100 w-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Cadastrar novo serviço</h5>
                            <p className="card-text flex-grow-1">
                                Adicione novos serviços para oferecer mais opções aos nossos clientes.
                            </p>
                            <Link to="/cadastro-servicos" className="btn btn-primary mt-auto">Cadastrar serviço</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex mb-4">
                    <div className="card h-100 w-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Produtos</h5>
                            <p className="card-text flex-grow-1">
                                Encontre uma variedade de produtos para alimentação, higiene, saúde e diversão do seu pet.
                            </p>
                            <Link to="/produtos" className="btn btn-primary mt-auto">Ver Produtos</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4 d-flex mb-4">
                    <div className="card h-100 w-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Cadastrar Novo Produto</h5>
                            <p className="card-text flex-grow-1">
                                Adicione novos produtos ao nosso catálogo para melhor atender nossos clientes.
                            </p>
                            <Link to="/cadastro-produtos" className="btn btn-primary mt-auto">Cadastrar Produto</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex mb-4">
                    <div className="card h-100 w-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Cadastrar Cliente</h5>
                            <p className="card-text flex-grow-1">
                                Cadastre novos clientes para oferecer um atendimento personalizado.
                            </p>
                            <Link to="/cadastro" className="btn btn-primary mt-auto">Cadastrar Cliente</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex mb-4">
                    <div className="card h-100 w-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Cadastrar Pet</h5>
                            <p className="card-text flex-grow-1">
                                Cadastre novos pets para oferecer um atendimento personalizado.
                            </p>
                            <Link to="/cadastro-pet" className="btn btn-primary mt-auto">Cadastrar Pet</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
