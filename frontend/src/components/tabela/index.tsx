import { Component } from "react";
import Clube from "../../interfaces/clube";

type Props = {
    titulos: string[]
    clubes: Clube[]
}

export default class Tabela extends Component<Props> {
    render() {
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                    {this.props.titulos.map((titulo, index) => (
                        <th key={index} scope="col" className="table-dark">{titulo}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {this.props.clubes.map((clube, index) => (
                        index % 2 === 0 ? (
                            <tr className="table-default">
                                <th scope="row">{index+1}°</th>
                                <td>{clube.nome}</td>
                                <td>{clube.pontos}</td>
                                <td>{clube.jogos}</td>
                                <td>{clube.vitorias}</td>
                                <td>{clube.empates}</td>
                                <td>{clube.derrotas}</td>
                                <td>{clube.gp}</td>
                                <td>{clube.gc}</td>
                                <td>{clube.sg}</td>
                            </tr>
                        ) : (
                            <tr className="table-secondary">
                                <th scope="row">{index+1}°</th>
                                <td>{clube.nome}</td>
                                <td>{clube.pontos}</td>
                                <td>{clube.jogos}</td>
                                <td>{clube.vitorias}</td>
                                <td>{clube.empates}</td>
                                <td>{clube.derrotas}</td>
                                <td>{clube.gp}</td>
                                <td>{clube.gc}</td>
                                <td>{clube.sg}</td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>
        )
    }
}