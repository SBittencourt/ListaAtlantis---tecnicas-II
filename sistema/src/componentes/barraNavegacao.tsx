import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {
    tema: string;
    botoes: string[];
    seletorView: (novaTela: string, evento: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

const BarraNavegacao: React.FC<Props> = ({ tema, botoes, seletorView }) => {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <nav
            className="navbar navbar-expand-lg"
            data-bs-theme="light"
            style={{ backgroundColor: tema, marginBottom: 10 }}
        >
            <div className="container-fluid">
                <Link to="/home" className="navbar-brand mb-0 h1">
                    <img src="../imagens/atlantis_icon.png" alt="atlantis logo" style={{ height: '60px' }} />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${menuAberto ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav">
                        {botoes.map((valor) => (
                            <li key={valor} className="nav-item">
                                <Link
                                    to={valor === 'Home' ? '/home' : `/${valor.toLowerCase()}`}
                                    className="nav-link"
                                    onClick={(e) => {
                                        seletorView(valor, e);
                                        toggleMenu();
                                    }}
                                >
                                    {valor}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="ml-auto">
                    <Link to="/" className="navbar-brand">
                        <img src="../imagens/logout.png" alt="Logout Icon" style={{ height: '30px' }} />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default BarraNavegacao;
