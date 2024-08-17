import { Component } from "react";
import Input from "../../../components/input";
// import Swal from "sweetalert2";
import Usuarios from "../../../server/rotas/usuarios";

const usuario = new Usuarios()

export default class CadastroUsuario extends Component {
    // public nomeRef = createRef();
    // public emailRef = createRef();
    // public senhaRef = createRef();

    componentDidMount(): void {
        usuario.getUsuarios()
    }

    // public async cadastraUsuario() {
    //     usuario.postUsuario(this.nomeRef.toString(), this.emailRef.toString(), this.senhaRef.toString())
    //     Swal.fire({
    //         title: "Cadastro concluído",
    //         text: "O usuário foi cadastrado com sucesso",
    //         icon: "success"
    //       });
    // }
    
    render() {
        return(
            <>
                <div className="container">
                    <Input tipo="text" placeholder="Nome do usuário" titulo="Nome" />
                    <Input tipo="text" placeholder="Email do usuário" titulo="@" />
                    <Input tipo="password" placeholder="Senha do usuário" titulo="Senha" />
                    <Input tipo="password" placeholder="Repita sua senha" titulo="Senha" />
                    <button type="button" className="btn btn-success">Cadastrar</button>
                </div>
            </>
        )
    }
}