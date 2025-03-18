import { Component } from "react";
import Perfis from "../../../interfaces/perfil";


type Props = {
    itens: Perfis[]
    titulo: string
}

export default class ListaComId extends Component<Props> {
    
    render() {

        return (
            <>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-dark h5" key={0}>{this.props.titulo}</li>
                    {this.props.itens.map((item, index) => (
                        index % 2 === 0 ? (
                        <li className="list-group-item" key={item.id}>{item.nome}</li>
                        ) : (
                            <li className="list-group-item list-group-item-secondary" key={item.id}>{item.nome}</li>
                        )
                    ))}
                </ul>
            </>
        )
    }
}