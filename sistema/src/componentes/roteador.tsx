import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import BarraNavegacao from "./barraNavegacao";

import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroAcomodacao from "./formularioCadastroAcomodação";


import ListaCliente from "./listaClientes"; 
import ListaAcomodacoes from "./listaAcomodações";

import Home from "./Home";
import Login from "./login";

const Roteador: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <BarraNavegacao 
          tema="#e3f2fd" 
          botoes={['Home', 'Clientes', 'Acomodacao', 'Hospedagem']} 
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
              } } />} />

        <Route path="/cadastro" element={<FormularioCadastroCliente />} />
        <Route path="/cadastro-acomodacao" element={<FormularioCadastroAcomodacao />} />

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
