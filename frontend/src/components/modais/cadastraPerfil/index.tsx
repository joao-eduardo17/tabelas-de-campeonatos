import React, { Component } from "react";
import Perfis from "../../../server/rotas/perfis";

interface Props {
    onClubesUpdated: () => void;
}

const perfis = new Perfis()

export default class CadastraPerfil extends Component<Props> {
    adicionaPerfil = (perfil: string) => {
        perfis.postPerfis(perfil, 1) //Pegar o id
        this.props.onClubesUpdated();
    };

    render() {
        return (
            <>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addPerfil"
                >
                    Adicionar perfil
                </button>
                <div
                    className="modal"
                    id="addPerfil"
                    tabIndex={-1}
                    aria-labelledby="modalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Novo Perfil</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome do Perfil" aria-label="Nome do Perfil" aria-describedby="basic-addon1" id="perfilInput" />
                                </div>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => {const perfil = (document.getElementById("perfilInput") as HTMLInputElement)
                                    if(perfil.value && perfil.value.replaceAll(/[a-z]|[A-Z]|[0-9]/g, "a") === "a".repeat(perfil.value.length)) this.adicionaPerfil(perfil.value);
                                        //console.log(perfil.value.replaceAll(/[a-z]|[A-Z]|[0-9]/g, "a") === "a".repeat(perfil.value.length))
                                        perfil.value = ""
                                    }} data-bs-dismiss="modal">
                                    Adicionar perfil
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
