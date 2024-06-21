import { Component } from "react";

type Props = {
    paginas: string[]
    mudaTela: Function
}

export default class Navbar extends Component<Props> {
    render() {
        const font = {
            color: "white",
            marginBottom: 0
        }

        return (
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand h1" href="#" style={font} onClick={(e) => this.props.mudaTela("Home", e)}>
                        <i className='bx bxs-home'></i>
                        Home
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {this.props.paginas.map((pagina, index) => (
                                index > 0 ? (
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#" style={font} onClick={(e) => this.props.mudaTela(pagina, e)}>{pagina}</a>
                                        </li>
                                ) : <></>
                            ))}
                        </ul>
                    </div> 
                </div>
            </nav>
        )
    }
}
