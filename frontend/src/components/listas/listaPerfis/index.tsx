import { useNavigate } from "react-router-dom";
import Perfil from "../../../interfaces/perfil";
import Li from "../../li/perfil";
import { useState } from "react";
import Perfis from "../../../server/rotas/perfis";

type Props = {
    itens: Perfil[]
    titulo: string
    usuario: number 
    onPerfisUpdated: () => void
}

export default function ListaPerfis(props: Props) {
    const style = {cursor: "pointer"};

    return (
        <>
            <ul className="list-group">
                <Li className="list-group-item list-group-item-dark h5" key={0} identificador={0} usuario={0} onPerfisUpdated={props.onPerfisUpdated}>{props.titulo}</Li>
                {props.itens.map((item, index) => (
                    index % 2 === 0 ? (
                        <Li className="list-group-item" key={item.id} identificador={item.id} style={style} usuario={props.usuario} onPerfisUpdated={props.onPerfisUpdated}> {item.nome} </Li>
                    ) : (
                        <Li className="list-group-item list-group-item-secondary" key={item.id} identificador={item.id} style={style} usuario={props.usuario} onPerfisUpdated={props.onPerfisUpdated}> {item.nome} </Li>
                    )
                ))}
            </ul>
        </>
    )
}
