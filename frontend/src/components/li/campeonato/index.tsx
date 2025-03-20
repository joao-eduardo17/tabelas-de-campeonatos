import { useNavigate } from "react-router-dom";

type Props = {
    identificador: number
} & React.LiHTMLAttributes<HTMLLIElement>

export default function LiCamp(props: Props) {
    const navigate = useNavigate()
    const pegaIdCamp = () => {
        sessionStorage.setItem("camp", JSON.stringify(props.identificador))
        navigate("/campeonato")
    }

    return (
        <>
            {props.identificador === 0 ? (
                <li {...props}>
                    {props.children}
                </li>
            ) : (
                <li {...props} onClick={pegaIdCamp}>
                    {props.children}
                </li>
                )
            }
        </>
    )
}
