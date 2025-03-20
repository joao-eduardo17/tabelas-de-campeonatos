import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input";
import CadastraTime from "../../components/modais/cadastraTime";
import Lista from "../../components/listas/lista";
import Botao from "../../components/botao";
import Swal from "sweetalert2";
import Clubes from "../../server/rotas/clubes";
import Campeonatos from "../../server/rotas/campeonatos";
import Estatisticas from "../../server/rotas/estatisticas";

const clube = new Clubes()
const campeonato = new Campeonatos()
const estatistica = new Estatisticas()

export default function CriacaoCampeonato() {
    const nomeCampRef = useRef<HTMLInputElement>(null);
    const [clubes, setClubes] = useState<string[]>(() => {
        return JSON.parse(sessionStorage.getItem("clubes") || "[]");
    });

    const navigate = useNavigate();

    const handleClubesUpdated = () => {
        setClubes(JSON.parse(sessionStorage.getItem("clubes") || "[]"));
    };

    useEffect(() => sessionStorage.setItem("clubes", "[]"), [])

    async function createCamp() {
        try {
            const camp = nomeCampRef.current?.value || "";

            if (!camp || "") {
                Swal.fire({ title: "Alerta", text: "Preencha o nome do campeonato", icon: "warning"})
                return;
            }

            const clubes = JSON.parse(sessionStorage.getItem("clubes") || "[]");
            const perfilId = JSON.parse(sessionStorage.getItem("perfil") || "0")

            if(clubes.length < 2) {
                Swal.fire({ title: "Alerta", text: "O campeonato precisa ter pelo menos 2 clubes", icon: "warning"})
                return;
            }

            //Colocar em um try catch (erro 403)
            if(perfilId === "0" || perfilId === null) {
                Swal.fire({ title: "Erro", text: "Erro na seção do usuário, retornando à página login", icon: "error"})
                navigate("/login")
                return;
            }

            const campId = await campeonato.postCampeonato(camp, "Campeonato", false, perfilId)

            clubes.forEach(async (c: string) => {
                const clubeId = await clube.postClube(c, campId, new Date())
                estatistica.postEstatistica(campId, clubeId)
            })

            sessionStorage.setItem("camp", campId)

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
            <Input tipo="text" placeholder="Nome do campeonato" titulo="Nome do Campeonato" referencia={nomeCampRef} />
            <Botao titulo="Criar campeonato" onClick={createCamp}/>
        </>
    );
}
