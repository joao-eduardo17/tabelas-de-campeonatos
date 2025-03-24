import { useEffect, useState } from "react";
import Tabela from "../../components/tabela";
import CadastraPartida from "../../components/modais/cadastraPartida";
import ClubeTabela from "../../interfaces/clubeEstatistica";
import ordenaClubes from "../../scripts/ordenador";
import ClubeEstatistica from "../../server/rotas/clubeEstatisticas";
import { useNavigate } from "react-router-dom";

const api = new ClubeEstatistica()

export default function Campeonato() {
    const navigate = useNavigate()
    const [clubes, setClubes] = useState<ClubeTabela[]>([])

    const carregaClubes = async () => {
        const campId = JSON.parse(sessionStorage.getItem("camp") || "0")
        const clubes: ClubeTabela[] = await api.getClubeEstatisticaByCampeonato(campId)
        ordenaClubes(clubes)
        setClubes(clubes)
    }

    useEffect(() => {
        carregaClubes()
    }, [clubes])

    const titulos = ["POS", "CLUBE", "PTS", "JOGOS", "VIT", "EMP", "DER", "SG", "GP", "GC"]
    
    //clicar em um clube abre as estatisticas dele ou muda para uma tela de estatísticas
    //select deve mostrar apenas os clubes nesse campeonato
    //sistema de rodadas com inicio e encerramento automático, etc
    //verificações como adicionar partida já existente, clube jogar duas partidas na mesma rodada
    return (
        <>
            <Tabela titulos={titulos} clubes={clubes}/>
            <CadastraPartida/>
        </>
    )
}