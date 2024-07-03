import { Component } from "react";
import Clube from "../../../interfaces/clube";

type Props = {
    infos: Clube
}

export default class CardEstatisticas extends Component<Props> {
    render() {
        const cardStyle = {
            margin: 20
        }

        return (
            <>
                <div className="card" style={cardStyle}>
                    <div className="card-header">
                        {`${this.props.infos.pos}° - ${this.props.infos.nome} - PTS: ${this.props.infos.pontos}`}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Estatísticas</h5>
                        <ul className="list-group">
                            <li className="list-group-item">Partidas: {this.props.infos.jogos}</li>
                            <li className="list-group-item">V: {this.props.infos.vitorias}</li>
                            <li className="list-group-item">E: {this.props.infos.empates}</li>
                            <li className="list-group-item">D: {this.props.infos.derrotas}</li>
                            <li className="list-group-item">Aproveitamento</li>
                            <li className="list-group-item">Saldo de gols: {this.props.infos.sg}</li>
                            <li className="list-group-item">Gols pro: {this.props.infos.gp}</li>
                            <li className="list-group-item">Gols feitos p/ jogo</li>
                            <li className="list-group-item">Gols contra: {this.props.infos.gc}</li>
                            <li className="list-group-item">Gols sofridos p/ jogo</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}