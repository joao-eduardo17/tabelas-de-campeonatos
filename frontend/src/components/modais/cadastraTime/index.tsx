import React, { Component } from "react";

interface Props {
    onClubesUpdated: () => void;
}

export default class CadastraTime extends Component<Props> {
    adicionaClube = (clube: string) => {
        const clubes = JSON.parse(sessionStorage.getItem("clubes") || "[]");
        clubes.push(clube);
        sessionStorage.setItem("clubes", JSON.stringify(clubes));
        this.props.onClubesUpdated();
    };

    render() {
        return (
            <>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addTime"
                >
                    Adicionar clube
                </button>
                <div
                    className="modal"
                    id="addTime"
                    tabIndex={-1}
                    aria-labelledby="modalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Novo Clube</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome do Clube" aria-label="Nome do Clube" aria-describedby="basic-addon1" id="clubeInput" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => {const clube = (document.getElementById("clubeInput") as HTMLInputElement)
                                    if(clube.value && clube.value.replaceAll(/[a-z]|[A-Z]|[0-9]/g, "a") === "a".repeat(clube.value.length)) this.adicionaClube(clube.value);
                                        //console.log(clube.value.replaceAll(/[a-z]|[A-Z]|[0-9]/g, "a") === "a".repeat(clube.value.length))
                                        clube.value = ""
                                    }} data-bs-dismiss="modal">
                                    Adicionar clube
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
