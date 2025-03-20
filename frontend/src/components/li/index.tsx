import { useNavigate } from "react-router-dom"

type Props = {
    identificador: number
} & React.LiHTMLAttributes<HTMLLIElement>

export default function Li(props: Props) {
    const navigate = useNavigate()
    const pegaIdPerfil = () => {
        sessionStorage.setItem("perfil", JSON.stringify(props.identificador))
        navigate("/campeonatos")
    }

    return (
    <>
        {props.identificador === 0 ? (
            <li {...props}>
                {props.children}
            </li>
            ) : (
            <li {...props} onClick={pegaIdPerfil}>
                {props.children}
            </li>
            )
        }
    </>
    )
}
