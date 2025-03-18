/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

export default function Navbar() {
    const font = {
        color: "white",
        marginBottom: 0
    };

    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand h1" to="/home" style={font}>
                    <i className='bx bxs-home'></i>
                    Home
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/criacao-campeonato" style={font}>
                                Criação de Campeonato
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/campeonato" style={font}>
                                Campeonato
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/cadastro" style={font}>
                                Cadastro Usuário
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/estatisticas" style={font}>
                                Estatísticas
                            </Link>
                        </li>
                    </ul>
                </div> 
            </div>
        </nav>
    );
}
