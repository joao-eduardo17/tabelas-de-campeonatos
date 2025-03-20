type Props = {
    titulo: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Botao(props: Props) {
    return (
        <>
            <button type="button" className="btn btn-primary" {...props}>{props.titulo}</button>
        </>
    )
}