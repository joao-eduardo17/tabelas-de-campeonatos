import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input";
import CadastraTime from "../../components/modais/cadastraTime";
import Lista from "../../components/listas/lista";
import Botao from "../../components/botao";
import Swal from "sweetalert2";
import Clubes from "../../server/rotas/clubes";
import Campeonatos from "../../server/rotas/campeonatos";

const clube = new Clubes()
const campeonato = new Campeonatos()

export default function CriacaoCampeonato() {
    const nomeCampRef = useRef<HTMLInputElement>(null);
    const [clubes, setClubes] = useState<string[]>(() => {
        return JSON.parse(sessionStorage.getItem("clubes") || "[]");
    });
    const navigate = useNavigate();

    const handleClubesUpdated = () => {
        setClubes(JSON.parse(sessionStorage.getItem("clubes") || "[]"));
    };

    async function createCamp() {
        try {
            const camp = nomeCampRef.current?.value || "";

            if (!camp) {
                Swal.fire({ title: "Erro", text: "Preencha o nome do campeonato", icon: "warning"})
                return;
            }

            const clubes = JSON.parse(sessionStorage.getItem("clubes") || "[]");

            //campeonato.postCampeonato(camp, "Campeonato", false, 1)

            // clubes.forEach((c) => {
            //     clube.postClube()
            // })

            navigate("/campeonato");
        } catch(error) {
            console.log(error);
            Swal.fire({ title: "Erro", text: `Ocorreu um erro: ${error}`, icon: "error" });
        }
    }

    return (
        <>
            <CadastraTime onClubesUpdated={handleClubesUpdated} />
            <Lista titulo="Clubes" itens={clubes} />
            <Input tipo="text" placeholder="Nome do campeonato" titulo="Camp" referencia={nomeCampRef} />
            <Botao titulo="Criar campeonato" />
        </>
    );
}
