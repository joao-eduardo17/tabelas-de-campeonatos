import { Component } from "react";
import Placar from "../../placar";
import Botao from "../../botao";

export default class CadastraPartida extends Component {
    render() {
        return (
            <>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addPartida">Adicionar partida</button>
                <div className="modal" id="addPartida" tabIndex={1} aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Nova Partida</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            <div className="input-group mb-3">
                                <Placar />
                            </div>
                            </div>
                            <div className="modal-footer">
                                <Botao titulo="Adicionar partida"/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}