import { Component } from "react";
import Tabela, { Clube } from "../../components/tabela";
import CadastraPartida from "../../components/modais/cadastraPartida";

export default class Campeonato extends Component {
    render() {
        const titulos = ["POS", "CLUBE", "PTS", "JOGOS", "VIT", "EMP", "DER", "SG", "GP", "GC"]
        const clubes: Clube[] = [
            {
            nome: "Corinthians",
            pontos: 39,
            jogos: 15,
            vitorias: 12,
            empates: 3,
            derrotas: 0,
            sg: 40,
            gp: 45,
            gc: 5
            },
            {
            nome: "Palmeiras",
            pontos: 3,
            jogos: 15,
            vitorias: 0,
            empates: 3,
            derrotas: 12,
            sg: -35,
            gp: 5,
            gc: 40
            }
        ]
        
        return (
            <>
                <Tabela titulos={titulos} clubes={clubes}/>
                <CadastraPartida/>
            </>
        )
    }
}