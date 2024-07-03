import { Component } from "react";
import Partida from "../../../interfaces/partida";

type Props = {
    titulo: string
    partidas: Partida[]
}

export default class ListaPartida extends Component<Props> {
    render() {
        const listStyle = { 
            margin: 20
        }

        return (
            <>
                <ul className="list-group" style={listStyle}>
                    <li className="list-group-item list-group-item-dark h5" key={0}>{this.props.titulo}</li>
                    {this.props.partidas.map((item, index) => (
                        index % 2 === 0 ? (
                        <li className="list-group-item" key={index+1}>{item.casa} {item.placar} {item.fora}</li>
                        ) : (
                            <li className="list-group-item list-group-item-secondary" key={index+1}>{item.casa} {item.placar} {item.fora}</li>
                        )
                    ))}
                </ul>
            </>
        )
    }
}