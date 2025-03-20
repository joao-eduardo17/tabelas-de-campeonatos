import { useEffect, useState } from "react";
import CadastraPerfil from "../../components/modais/cadastraPerfil";
import Perfil from "../../interfaces/perfil";
import Perfs from "../../server/rotas/perfis";
import { getUserFromToken } from "../../scripts/decoder";
import Usuarios from "../../server/rotas/usuarios";
import ListaPerfis from "../../components/listas/listaPerfis";

const perfil = new Perfs()
const usuario = new Usuarios()

export default function Perfis() {
    const [perfis, setPerfis] = useState<Perfil[]>([]);
    const [usuarioId, setUsuarioId] = useState<number>(0)

    const handlePerfisUpdated = async () => {
        if(usuarioId !== 0) {
            await carregaPerfis()
        }
    }

    const carregaPerfis = async() => {
        const email = getUserFromToken().sub
        const id = await usuario.getIdByEmail(email)
        setUsuarioId(id)
        const p = await perfil.getPerfilByUsuario(id)
        setPerfis(p)
    }

    useEffect(() => {
        carregaPerfis()
    }, [])
    

    return (
        <>
            <CadastraPerfil identificador={usuarioId} onPerfisUpdated={handlePerfisUpdated} />
            <ListaPerfis titulo="Perfis" itens={perfis} />
        </>
    );
}