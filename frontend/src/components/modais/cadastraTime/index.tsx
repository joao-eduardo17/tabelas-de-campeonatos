import { Component } from "react";
import Botao from "../../botao";

export default class CadastraTime extends Component {
    render() {
        return (
            <>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addTime">Adicionar clube</button>
                <div className="modal" id="addTime" tabIndex={1} aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Novo Time</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Nome do Clube" aria-label="Nome do Clube" aria-describedby="basic-addon1"/>
                            </div>
                            </div>
                            <div className="modal-footer">
                                <Botao titulo="Adicionar time"/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}