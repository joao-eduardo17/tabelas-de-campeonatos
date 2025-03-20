import { useEffect, useState } from "react";
import Tabela from "../../components/tabela";
import CadastraPartida from "../../components/modais/cadastraPartida";
import ClubeTabela from "../../interfaces/clubeEstatistica";
//import ordenaClubes from "../../scripts/ordenador";
import ClubeEstatistica from "../../server/rotas/clubeEstatisticas";
import { useNavigate } from "react-router-dom";

const api = new ClubeEstatistica()

export default function Campeonato() {
    const navigate = useNavigate()
    const [clubes, setClubes] = useState<ClubeTabela[]>([])

    const carregaClubes = async () => {
        const campId = JSON.parse(sessionStorage.getItem("camp") || "0")
        const clubes: ClubeTabela[] = await api.getClubeEstatisticaByCampeonato(campId)
        //ordenaClubes() função precisa receber o type ClubeTabela (atualmente recebe estatísticas)
        setClubes(clubes)
    }

    useEffect(() => {
        carregaClubes()
    }, [clubes])

    const titulos = ["POS", "CLUBE", "PTS", "JOGOS", "VIT", "EMP", "DER", "SG", "GP", "GC"]
    
    
    return (
        <>
            <Tabela titulos={titulos} clubes={clubes}/>
            <CadastraPartida/>
        </>
    )
}