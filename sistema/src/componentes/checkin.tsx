import React, { useState } from "react";
import { Link } from "react-router-dom";


const AcomodacaoOption: React.FC<{ acomodacao: string }> = ({ acomodacao }) => (
  <option value={acomodacao}>{acomodacao}</option>
);


const ClienteOption: React.FC<{ cliente: string }> = ({ cliente }) => (
  <option value={cliente}>{cliente}</option>
);


const CheckIn: React.FC = () => {

  const acomodacoesDisponiveis: string[] = ["Selecione uma acomodação","Solteiro Simples", "Solteiro Mais", "Casal Simples", "Família Simples", "Família Mais", "Família Super"];
  const clientes: string[] = ["Selecione um cliente","João Silva", "Maria Oliveira", "Carlos Santos", "Ana Souza"];

  const [acomodacaoSelecionada, setAcomodacaoSelecionada] = useState<string>(acomodacoesDisponiveis[0]);
  const [clienteSelecionado, setClienteSelecionado] = useState<string>(clientes[0]);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Check-in confirmado para:", clienteSelecionado, "na acomodação:", acomodacaoSelecionada);
    setShowPopup(true); 
  };

  return (
    <div className="container">
      <h1>Check-in</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="selectAcomodacao">Selecione a Acomodação:</label>
          <select className="form-control" id="selectAcomodacao" value={acomodacaoSelecionada} onChange={(e) => setAcomodacaoSelecionada(e.target.value)}>
            {acomodacoesDisponiveis.map((acomodacao, index) => (
              <AcomodacaoOption key={index} acomodacao={acomodacao} />
            ))}
          </select>
        </div>
        <div className="form-group">
            <br></br>
          <label htmlFor="selectCliente">Selecione o Cliente:</label>
          <br></br>
          <select className="form-control" id="selectCliente" value={clienteSelecionado} onChange={(e) => setClienteSelecionado(e.target.value)}>
            {clientes.map((cliente, index) => (
              <ClienteOption key={index} cliente={cliente} />
            ))}
          </select>
          <br></br>
        </div>
        <button type="submit" className="btn btn-primary">Confirmar Check-in</button>
      </form>
      {showPopup && (
        <div className="alert alert-success mt-3" role="alert">
          Check-in realizado com sucesso!
        </div>
      )}
    </div>
  );
};

export default CheckIn;

