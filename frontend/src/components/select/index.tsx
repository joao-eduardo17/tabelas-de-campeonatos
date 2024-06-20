import { Component } from "react";

type Props = {
    titulo: string
    opcoes: string[],
}

export default class Select extends Component<Props> {
    render() {
        return (
            <select className="form-select" aria-label="select">
                <option selected>{this.props.titulo}</option>
                {this.props.opcoes.map((opcao, index) => (
                    <option key={index} value={opcao.toLowerCase()}>{opcao}</option>
                ))}
            </select>
        )
    }
}