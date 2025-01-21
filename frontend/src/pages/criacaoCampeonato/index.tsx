import React, { Component } from "react";
import CadastraTime from "../../components/modais/cadastraTime";
import Lista from "../../components/listas/lista";
import Botao from "../../components/botao";

interface State {
    clubes: string[];
}

export default class CriacaoCampeonato extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            clubes: JSON.parse(sessionStorage.getItem("clubes") || "[]"),
        };
    }

    handleClubesUpdated = () => {
        this.setState({
            clubes: JSON.parse(sessionStorage.getItem("clubes") || "[]"),
        });
    };

    render() {
        return (
            <>
                <CadastraTime onClubesUpdated={this.handleClubesUpdated} />
                <Lista titulo="Clubes" itens={this.state.clubes} />
                <Botao titulo="Criar campeonato" />
            </>
        );
    }
}
