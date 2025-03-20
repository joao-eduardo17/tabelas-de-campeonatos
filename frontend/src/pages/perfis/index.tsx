import { useEffect, useState } from "react";
import CadastraPerfil from "../../components/modais/cadastraPerfil";
import Perfil from "../../interfaces/perfil";
import Perfs from "../../server/rotas/perfis";
import { getUserFromToken } from "../../scripts/decoder";
import Usuarios from "../../server/rotas/usuarios";
import ListaComId from "../../components/listas/listaId";

const perfil = new Perfs()
const usuario = new Usuarios()

export default function Perfis() {
    const [perfis, setPerfis] = useState<Perfil[]>([]);
    
    const carregaPerfis = async() => {
        const email = getUserFromToken().sub
        const id = await usuario.getIdByEmail(email)
        const p = await perfil.getPerfilByUsuario(id)
        setPerfis(p)
    }

    useEffect(() => {
        carregaPerfis()
    }, [])
    

    return (
        <>
            <CadastraPerfil onClubesUpdated={() => {}}/>
            <ListaComId titulo="Perfis" itens={perfis} />
        </>
    );
}