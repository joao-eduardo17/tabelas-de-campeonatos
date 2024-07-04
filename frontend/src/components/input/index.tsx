import { Component } from "react";

type Props = {
    titulo: string,
    tipo: string,
    placeholder: string,
    referencia?: string
}

// ADICIONAR BOOTSTRAP

export default class Input extends Component<Props> {
    render() {
        return(
            <>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">{this.props.titulo}</span>
                    <input type={this.props.tipo} className="form-control" placeholder={this.props.placeholder} aria-label="Username" aria-describedby="basic-addon1" ref={this.props.referencia} />
                </div>
                {/* <input type={this.props.tipo} placeholder={this.props.placeholder} /> */}
            </>
        )
    }
}