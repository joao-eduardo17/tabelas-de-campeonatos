import { Component } from "react";
import CadastraTime from "../../components/modais/cadastraTime";
import Lista from "../../components/lista";
import Botao from "../../components/botao";

export default class CriacaoCampeonato extends Component {
    render() {
        return (
            <>
                <CadastraTime/>
                <Lista titulo="Clubes" itens={["Corithians","Palmeiras"]}/>
                <Botao titulo="Criar campeonato"/>
            </>
        )
    }
}
