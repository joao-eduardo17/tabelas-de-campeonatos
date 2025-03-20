import Swal from "sweetalert2";
import Perfis from "../../../server/rotas/perfis";

interface Props {
    onPerfisUpdated: () => void
    identificador: number
}

const perfis = new Perfis()

export default function CadastraPerfil(props: Props) {
    const adicionaPerfil = (perfil: string) => {
        perfis.postPerfis(perfil, props.identificador)
        props.onPerfisUpdated()
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addPerfil"
            >
                Adicionar perfil
            </button>
            <div
                className="modal"
                id="addPerfil"
                tabIndex={-1}
                aria-labelledby="modalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Novo Perfil</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Nome do Perfil" aria-label="Nome do Perfil" aria-describedby="basic-addon1" id="perfilInput" />
                            </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => {const perfil = (document.getElementById("perfilInput") as HTMLInputElement)
                                if(perfil.value && perfil.value.replaceAll(/[a-z]|[A-Z]|[0-9]/g, "a") === "a".repeat(perfil.value.length)) {
                                    adicionaPerfil(perfil.value);
                                    perfil.value = ""
                                } else 
                                    Swal.fire({title: "Erro", text: "O seu nome de perfil está fora dos padrões", icon: "warning"})
                                }} data-bs-dismiss="modal">
                                Adicionar perfil
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
