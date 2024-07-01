import { Component } from "react";

type Props = {
    tipo: string,
    // titulo: string
}

// ADICIONAR BOOTSTRAP

export default class Input extends Component<Props> {
    render() {
        return(
            <>
                <input type={this.props.tipo}></input>
            </>
        )
    }
}