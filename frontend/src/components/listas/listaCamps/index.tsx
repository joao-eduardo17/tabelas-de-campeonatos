import Campeonato from "../../../interfaces/campeonato";
import Li from "../../li/campeonato";

type Props = {
    itens: Campeonato[]
    titulo: string
}

export default function ListaCamps(props: Props) {
    const style = {cursor: "pointer"}
    return (
        <>
            <ul className="list-group">
                <Li className="list-group-item list-group-item-dark h5" key={0} identificador={0}>{props.titulo}</Li>
                {props.itens.map((item, index) => (
                    index % 2 === 0 ? (
                        <Li className="list-group-item" key={item.id} identificador={item.id} style={style}>{item.nome}</Li>
                    ) : (
                        <Li className="list-group-item list-group-item-secondary" key={item.id} identificador={item.id} style={style}>{item.nome}</Li>
                    )
                ))}
            </ul>
        </>
    )
}
