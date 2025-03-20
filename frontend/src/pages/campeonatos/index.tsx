import { useNavigate } from "react-router-dom";
import ListaCamps from "../../components/listas/listaCamps";
import { useEffect, useState } from "react";
import Campeonato from "../../interfaces/campeonato";
import Camps from "../../server/rotas/campeonatos";
import Botao from "../../components/botao";

const camp = new Camps()

export default function Campeonatos() {
    const navigate = useNavigate();
    const [camps, setCamps] = useState<Campeonato[]>([])

    const carregaCamps = async() => {
        const id = sessionStorage.getItem("perfil")
        if(id !== null) {
            const c = await camp.getCampeonatoByPerfil(parseInt(id))
            setCamps(c)
        }
    }

    useEffect(() => {
        carregaCamps()
    }, [])

    return (
        <>
            <Botao titulo="Novo campeonato" onClick={() => {navigate("/criacao-campeonato")}} />
            <ListaCamps titulo="Campeonatos" itens={camps} /> 
            {/* Botão de criar campeonatos direciona para a tela criacao-campeonato */}
        </>
    );
}
