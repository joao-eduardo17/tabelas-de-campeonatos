import { Component } from "react";

type Props = {
    itens: string[]
    titulo: string
}

export default class Lista extends Component<Props> {
    render() {
        const font = {

        } 

        return (
            <>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-dark h5" key={0}>{this.props.titulo}</li>
                    {this.props.itens.map((item, index) => (
                        index % 2 === 0 ? (
                        <li className="list-group-item" key={index+1}>{item}</li>
                        ) : (
                            <li className="list-group-item list-group-item-secondary" key={index}>{item}</li>
                        )
                    ))}
                </ul>
            </>
        )
    }
}