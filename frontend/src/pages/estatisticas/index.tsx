import { Component } from "react";

interface Clube {
    pos: number
    nome: string
    pontos: number
    jogos: number
    vitorias: number
    empates : number
    derrotas: number
    sg: number
    gp: number
    gc: number
}

interface Partida {
    casa: string
    fora: string
    placar: string
}

type Props = {
    clube: Clube
    historico: Partida[]
}

export default class Estatisticas extends Component<Props> {
    render() {
        return (
            <>
                <p>{this.props.clube.pos}</p>
                <p>{this.props.clube.nome}</p>
                <p>{this.props.clube.pontos}</p>
                <p>{this.props.clube.jogos}</p>
                <p>{this.props.clube.vitorias}</p>
                <p>{this.props.clube.empates}</p>
                <p>{this.props.clube.derrotas}</p>

                <ul className="list-group">
                    {this.props.historico.map((partida, index) => (
                        index % 2 === 0 ? (
                        <li className="list-group-item" key={index}>{partida.casa} {partida.placar} {partida.fora}</li>
                    ) : (
                        <li className="list-group-item list-group-item-secondary" key={index}>{partida.casa} {partida.placar} {partida.fora}</li>
                    )
                ))}
                </ul>
            </>
        )
    }
}