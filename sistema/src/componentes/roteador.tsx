import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import BarraNavegacao from "./barraNavegacao";

import FormularioCadastroCliente from "./formularioCadastroCliente";


import ListaCliente from "./listaClientes"; 
import ListaAcomodacoes from "./listaAcomodações";

import Home from "./Home";
import Login from "./login";
import FormularioAtualizarAcomodacao from "./formularioCadastroAcomodação";
import TelaHospedagem from "./hospedagem";
import CheckIn from "./checkin";

const Roteador: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <BarraNavegacao 
          tema="#e3f2fd" 
          botoes={['Home', 'Clientes', 'Acomodacoes', 'Hospedagem']} 
          seletorView={(novaTela: string, evento: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {}} 
        />
      )}
      <Routes>

        <Route path="/" element={<Login tema={""} />} />
        <Route path="/home" element={<Home tema={""} />} />

        <Route path="/clientes" element={<ListaCliente tema={""} seletorView={function (novaTela: string, evento: Event): void {
                  throw new Error("Function not implemented.");
              } } />} />
        <Route path="/Acomodacoes" element={<ListaAcomodacoes tema={""} seletorView={function (novaTela: string, evento: Event): void {
          throw new Error("Function not implemented.");
        } }/>} />

        <Route path="/cadastro" element={<FormularioCadastroCliente />} />
        <Route path="/cadastro-acomodacao" element={<FormularioAtualizarAcomodacao />} />

        <Route path="/hospedagem" element={<TelaHospedagem />} />
        <Route path="/check-in" element={<CheckIn />} />

      </Routes>
    </>
  );
};

const App: React.FC = () => (
  <Router>
    <Roteador />
  </Router>
);

export default App;
