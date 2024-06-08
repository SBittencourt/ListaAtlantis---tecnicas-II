import React, { useState } from "react";

const CadastroCliente: React.FC = () => {
    const [tipoCliente, setTipoCliente] = useState<string>('titular');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<any>({});

    const handleTipoClienteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTipoCliente(event.target.value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.id]: event.target.value
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica de validação se desejar

        // Simulação de cadastro bem-sucedido
        setShowModal(true);
    };

    return (
        <div className="container">
            <h1>Cadastro de Cliente</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="tipoCliente">Tipo de Cliente:</label>
                    <select className="form-control" id="tipoCliente" value={tipoCliente} onChange={handleTipoClienteChange}>
                        <option value="titular">Titular</option>
                        <option value="dependente">Dependente</option>
                    </select>
                </div>
                {tipoCliente === 'titular' && (
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="nome">Nome:</label>
                                <input type="text" className="form-control" id="nome" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpf">CPF:</label>
                                <input type="text" className="form-control" id="cpf" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rg">RG:</label>
                                <input type="text" className="form-control" id="rg" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telefone">Telefone:</label>
                                <input type="text" className="form-control" id="telefone" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="endereco">Endereço:</label>
                                <input type="text" className="form-control" id="endereco" onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                )}
                {tipoCliente === 'dependente' && (
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="nome">Nome do Dependente:</label>
                                <input type="text" className="form-control" id="nome" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpf">CPF do Dependente:</label>
                                <input type="text" className="form-control" id="cpf" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rg">RG do Dependente:</label>
                                <input type="text" className="form-control" id="rg" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="titular">Selecione o Titular:</label>
                                <select className="form-control" id="titular">
                                    <option value="joao">João Silva</option>
                                    <option value="maria">Maria Oliveira</option>
                                    <option value="carlos">Carlos Santos</option>
                                    <option value="ana">Ana Souza</option>
                                    <option value="fernanda">Fernanda Lima </option>
                                    <option value="roberto">Roberto Almeida</option>
                                    <option value="paula">Paula Silva</option>
                                    <option value="marcelo">Marcelo Santos</option>
                                    <option value="rafaela">Rafaela Oliveira</option>
                                    <option value="luciana">Luciana Souza</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}
                <button type="submit" className="btn btn-primary mt-3">Cadastrar</button>
            </form>
            {showModal && (
                <div className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                                <h5 className="modal-title">Cadastro Efetuado</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                O cadastro foi realizado com sucesso!
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CadastroCliente;

