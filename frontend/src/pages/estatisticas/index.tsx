import { Component } from "react";
import Clube from "../../interfaces/clube";
import Partida from "../../interfaces/partida";
import CardEstatisticas from "../../components/cards/cardEstatisticas";
import ListaPartida from "../../components/listas/listaPartidas";
import ClubeTabela from "../../interfaces/clubeTabela";

type Props = {
    clube: ClubeTabela
    historico: Partida[]
}

export default class Estatisticas extends Component<Props> {
    render() {
        return (
            <>
                <CardEstatisticas infos={this.props.clube}/>

                <ListaPartida titulo="Histórico de partidas" partidas={this.props.historico}/>
            </>
        )
    }
}