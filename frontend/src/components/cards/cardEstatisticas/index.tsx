import { Component } from "react";
import Estatistica from "../../../interfaces/estatistica";
import ClubeTabela from "../../../interfaces/clubeTabela";

type Props = {
    infos: ClubeTabela
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
                        {/*${this.props.infos.pos}*/`Arrumar posição° - ${this.props.infos.nome} - PTS: ${this.props.infos.pontos}`}
                        Arrumar a questão da posição
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Estatísticas</h5>
                        <ul className="list-group">
                            <li className="list-group-item">Partidas: {this.props.infos.partidas}</li>
                            <li className="list-group-item">V: {this.props.infos.vitorias}</li>
                            <li className="list-group-item">E: {this.props.infos.empates}</li>
                            <li className="list-group-item">D: {this.props.infos.derrotas}</li>
                            <li className="list-group-item">Aproveitamento</li>
                            <li className="list-group-item">Saldo de gols: {this.props.infos.saldoGols}</li>
                            <li className="list-group-item">Gols pro: {this.props.infos.golsPro}</li>
                            <li className="list-group-item">Gols feitos p/ jogo</li>
                            <li className="list-group-item">Gols contra: {this.props.infos.golsContra}</li>
                            <li className="list-group-item">Gols sofridos p/ jogo</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}