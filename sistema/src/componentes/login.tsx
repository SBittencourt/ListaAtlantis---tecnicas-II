import React from "react";

type Props = {
    tema: string;
}

const Login: React.FC<Props> = ({ tema }) => {
    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        
        window.location.href = "/home";
    };

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: tema }}>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <div className="text-center mb-4">
                            <img src="../imagens/atlantis_logo2.png" alt="Logo" className="img-fluid" style={{ maxWidth: '300px' }} />
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Digite seu email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Senha</label>
                                <input type="password" className="form-control" id="password" placeholder="Digite sua senha" required />
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
