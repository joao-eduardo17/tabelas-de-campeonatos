import { Component, createRef, RefObject } from "react";
import Input from "../../../components/input";
import Auth from "../../../server/rotas/auth";
import Swal from "sweetalert2";

const auth = new Auth()

export default class LoginUsuario extends Component {
    public loginRef: RefObject<HTMLInputElement>
    private senhaRef: RefObject<HTMLInputElement>

    constructor(props: any) {
        super(props)
        this.loginRef = createRef<HTMLInputElement>()
        this.senhaRef = createRef<HTMLInputElement>()
        this.logaUsuario = this.logaUsuario.bind(this)
        // this.state = {
        //     tela: "login"
        // }
    }

    public async logaUsuario() {
        try {
            const login = this.loginRef.current?.value || ""
            const senha = this.senhaRef.current?.value || ""

            if(!login || !senha) {
                Swal.fire({
                    title: "Erro",
                    text: "Existe um campo não preenchido",
                    icon: "warning"
                })
                return
            }
            
            const token = await auth.login(login, senha)
            console.log(token.token)
            sessionStorage.setItem("authentication", token.token)

            // for(let i = 0; i < usuarios.length; i++) {
            //     if((usuarios[i]['nome'] === login && usuarios[i]['senha'] === senha) || (usuarios[i]['email'] === login && usuarios[i]['senha'] === senha)) {
            //         Swal.fire({
            //             title: "Login",
            //             text: "Login feito com sucesso",
            //             icon: "success"
            //         })
            //         break
            //     }
            // }
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "Erro",
                text: `O usuário não foi cadastrado por conta de um erro: ${error}`,
                icon: "error"
              })
        }
    }

    render() {
        return(
            <>
                <div className="container">
                    <Input tipo="text" placeholder="Nome/email" titulo="Login" referencia={this.loginRef} />
                    <Input tipo="password" placeholder="Senha do usuário" titulo="Senha" referencia={this.senhaRef} />
                    <button type="button" className="btn btn-success" onClick={this.logaUsuario}>Logar</button>
                </div>
                <section>
                    <p>Ainda não tem uma conta?<span>NÃO É PROBLEMA MEU</span></p>
                </section>
            </>
        )
    }
}