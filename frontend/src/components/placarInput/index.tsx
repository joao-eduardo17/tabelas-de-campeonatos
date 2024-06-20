import { Component } from "react";

export default class PlacarInput extends Component {
    render() {
        return (
            <>
                <input type="number" className="form-control " placeholder="0" aria-label="placarA" min={0}/>
                <span className="input-group-text">X</span>
                <input type="number" className="form-control" placeholder="0" aria-label="placarB" min={0}/>
            </>
        )
    }
}