import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Perfis from "../../../server/rotas/perfis";
import Input from "../../input";
import Perfil from "../../../interfaces/perfil";

type Props = {
    identificador: number
    usuario: number
    onPerfisUpdated: () => void
} & React.LiHTMLAttributes<HTMLLIElement>;

const perfis = new Perfis();

//Precisa de f5 pra atualizar o nome
export default function LiPerfil(props: Props) {
    const [perfil, setPerfil] = useState<Perfil | null>(null);
    const novoNomeRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [areEditing, setAreEditing] = useState(false);

    const pegaIdPerfil = () => {
        sessionStorage.setItem("perfil", JSON.stringify(props.identificador));
        navigate("/campeonatos");
    };

    const mudaPerfil = async () => {
        if(areEditing && novoNomeRef.current?.value !== null && novoNomeRef.current?.value !== undefined && novoNomeRef.current?.value !== "") {
            await perfis.putPerfis(props.identificador, novoNomeRef.current.value, props.usuario);
            props.onPerfisUpdated();
        }
    };

    const excluiPerfil = async (id: number) => {
        await perfis.deletePerfil(id);
        props.onPerfisUpdated();
    };

    const mudaBoolean = () => {
        setAreEditing((prev) => !prev);
        mudaPerfil();
    };

    return (
        <>
            {props.identificador === 0 ? (
                <li {...props}>{props.children}</li>
            ) : (
                <>
                    {areEditing ? (
                        <Input tipo="text" placeholder={perfil?.nome || ""} titulo="Editando" referencia={novoNomeRef} />
                    ) : (
                        <li {...props} onClick={pegaIdPerfil}>
                            {props.children}
                        </li>
                    )}
                    <i className="bx bxs-pencil" onClick={() => {mudaBoolean()}} />
                    <i className="bx bxs-tag-x" onClick={() => excluiPerfil(props.identificador)} />
                </>
            )}
        </>
    );
}
