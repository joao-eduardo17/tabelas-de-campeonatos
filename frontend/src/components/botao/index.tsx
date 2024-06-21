import { Component } from "react";

type Props = {
    titulo: string
}

export default class Botao extends Component<Props> {
    render() {
        return (
            <>
                <button type="button" className="btn btn-primary">{this.props.titulo}</button>
            </>
        )
    }
}