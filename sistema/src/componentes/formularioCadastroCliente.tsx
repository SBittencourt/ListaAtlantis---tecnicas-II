import React, { useState } from "react";

const CadastroCliente: React.FC = () => {
    const [tipoCliente, setTipoCliente] = useState<string>('titular');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<any>({});
    const [telefones, setTelefones] = useState<string[]>(['']);
    const [documentos, setDocumentos] = useState<{ tipo: string, numero: string, dataExpedicao: string }[]>([{ tipo: 'cpf', numero: '', dataExpedicao: '' }]);

    const handleTipoClienteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTipoCliente(event.target.value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.id]: event.target.value
        });
    };

    const handleTelefoneChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newTelefones = telefones.map((telefone, i) => (
            i === index ? event.target.value : telefone
        ));
        setTelefones(newTelefones);
    };

    const addTelefone = () => {
        setTelefones([...telefones, '']);
    };

    const removeTelefone = (index: number) => {
        setTelefones(telefones.filter((_, i) => i !== index));
    };

    const handleDocumentoChange = (index: number, field: string, value: string) => {
        const newDocumentos = documentos.map((documento, i) => (
            i === index ? { ...documento, [field]: value } : documento
        ));
        setDocumentos(newDocumentos);
    };

    const addDocumento = () => {
        setDocumentos([...documentos, { tipo: 'cpf', numero: '', dataExpedicao: '' }]);
    };

    const removeDocumento = (index: number) => {
        setDocumentos(documentos.filter((_, i) => i !== index));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
                                <label htmlFor="nomeSocial">Nome Social:</label>
                                <input type="text" className="form-control" id="nomeSocial" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dataNascimento">Data de Nascimento:</label>
                                <input type="date" className="form-control" id="dataNascimento" onChange={handleInputChange} />
                            </div>
                            {documentos.map((documento, index) => (
                                <div key={index} className="form-group">
                                    <label>Documento {index + 1}:</label>
                                    <div className="d-flex mb-2">
                                        <select
                                            className="form-control mr-2"
                                            value={documento.tipo}
                                            onChange={(e) => handleDocumentoChange(index, 'tipo', e.target.value)}
                                        >
                                            <option value="cpf">CPF</option>
                                            <option value="rg">RG</option>
                                            <option value="passaporte">Passaporte</option>
                                        </select>
                                        <input
                                            type="text"
                                            className="form-control mr-2"
                                            placeholder="Número"
                                            value={documento.numero}
                                            onChange={(e) => handleDocumentoChange(index, 'numero', e.target.value)}
                                        />
                                        <input
                                            type="date"
                                            className="form-control mr-2"
                                            placeholder="Data de Expedição"
                                            value={documento.dataExpedicao}
                                            onChange={(e) => handleDocumentoChange(index, 'dataExpedicao', e.target.value)}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => removeDocumento(index)}
                                            disabled={documentos.length === 1}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <button type="button" className="btn btn-secondary mb-2" onClick={addDocumento}>Adicionar Documento</button>
                            {telefones.map((telefone, index) => (
                                <div className="form-group" key={index}>
                                    <label htmlFor={`telefone-${index}`}>Telefone {index + 1}:</label>
                                    <div className="d-flex">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={`telefone-${index}`}
                                            value={telefone}
                                            onChange={(e) => handleTelefoneChange(index, e)}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-danger ml-2"
                                            onClick={() => removeTelefone(index)}
                                            disabled={telefones.length === 1}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <button type="button" className="btn btn-secondary mb-2" onClick={addTelefone}>Adicionar Telefone</button>
                            <div className="form-group">
                                <label htmlFor="pais">País:</label>
                                <input type="text" className="form-control" id="pais" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="estado">Estado:</label>
                                <input type="text" className="form-control" id="estado" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cidade">Cidade:</label>
                                <input type="text" className="form-control" id="cidade" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rua">Rua:</label>
                                <input type="text" className="form-control" id="rua" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cep">CEP:</label>
                                <input type="text" className="form-control" id="cep" onChange={handleInputChange} />
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
                                <label htmlFor="nomeSocial">Nome Social do Dependente:</label>
                                <input type="text" className="form-control" id="nomeSocial" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dataNascimento">Data de Nascimento do Dependente:</label>
                                <input type="date" className="form-control" id="dataNascimento" onChange={handleInputChange} />
                            </div>
                            {documentos.map((documento, index) => (
                                <div key={index} className="form-group">
                                    <label>Documento {index + 1}:</label>
                                    <div className="d-flex mb-2">
                                        <select
                                            className="form-control mr-2"
                                            value={documento.tipo}
                                            onChange={(e) => handleDocumentoChange(index, 'tipo', e.target.value)}
                                        >
                                            <option value="cpf">CPF</option>
                                            <option value="rg">RG</option>
                                            <option value="passaporte">Passaporte</option>
                                        </select>
                                        <input
                                            type="text"
                                            className="form-control mr-2"
                                            placeholder="Número"
                                            value={documento.numero}
                                            onChange={(e) => handleDocumentoChange(index, 'numero', e.target.value)}
                                        />
                                        <input
                                            type="date"
                                            className="form-control mr-2"
                                            placeholder="Data de Expedição"
                                            value={documento.dataExpedicao}
                                            onChange={(e) => handleDocumentoChange(index, 'dataExpedicao', e.target.value)}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => removeDocumento(index)}
                                            disabled={documentos.length === 1}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <button type="button" className="btn btn-secondary mb-2" onClick={addDocumento}>Adicionar Documento</button>
                            <div className="form-group">
                                <label htmlFor="titular">Selecione o Titular:</label>
                                <select className="form-control" id="titular">
                                    <option value="joao">João Silva</option>
                                    <option value="maria">Maria Oliveira</option>
                                    <option value="carlos">Carlos Santos</option>
                                    <option value="ana">Ana Souza</option>
                                    <option value="fernanda">Fernanda Lima</option>
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
