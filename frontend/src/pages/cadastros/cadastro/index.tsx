import { Component, createRef, RefObject } from "react";
import Input from "../../../components/input";
import Swal from "sweetalert2";
import Auth from "../../../server/rotas/auth";

const auth = new Auth()

export default class CadastroUsuario extends Component {
    public nomeRef: RefObject<HTMLInputElement>
    public emailRef: RefObject<HTMLInputElement>
    public senhaRef: RefObject<HTMLInputElement>
    public confSenhaRef: RefObject<HTMLInputElement>

    constructor(props: any) {
        super(props)
        this.nomeRef = createRef<HTMLInputElement>()
        this.emailRef = createRef<HTMLInputElement>()
        this.senhaRef = createRef<HTMLInputElement>()
        this.confSenhaRef = createRef<HTMLInputElement>()
        this.cadastraUsuario = this.cadastraUsuario.bind(this)
    }
    
    // componentDidMount(): void {
        
    // }
    
    public async cadastraUsuario() { // Fazer verificação se o usuário colocou um email já existente
        try {
            const nome = this.nomeRef.current?.value || ""
            const email = this.emailRef.current?.value || ""
            const senha = this.senhaRef.current?.value || ""
            const confSenha = this.confSenhaRef.current?.value || ""

            if(!nome || !email || !senha || !confSenha) {
                Swal.fire({
                    title: "Erro",
                    text: "Existe um campo não preenchido",
                    icon: "warning"
                })
                return
            }

            if(senha === confSenha) {
                auth.cadastro(email, senha, "USER")
                Swal.fire({
                    title: "Cadastro concluído",
                    text: "O usuário foi cadastrado com sucesso",
                    icon: "success"
                })
            } else {
                Swal.fire({
                    title: "Erro",
                    text: "As senhas não batem",
                    icon: "warning"
                })
            }
        } catch (error) {
            //Melhorar o retorno do erro para o usuário
            console.log(error)
            Swal.fire({
                title: "Erro",
                text: `O usuário não foi cadastrado por conta de um erro: ${error}`,
                icon: "error"
              })
        } finally { // Não sei se deveria ter o finally
            if (this.nomeRef.current) this.nomeRef.current.value = ""
            if (this.emailRef.current) this.emailRef.current.value = ""
            if (this.senhaRef.current) this.senhaRef.current.value = ""
            if (this.confSenhaRef.current) this.confSenhaRef.current.value = ""
        }
    }
    
    render() {
        return(
            <>
                <div className="container">
                    <Input tipo="text" placeholder="Nome do usuário" titulo="Nome" referencia={this.nomeRef} />
                    <Input tipo="text" placeholder="Email do usuário" titulo="@" referencia={this.emailRef} />
                    <Input tipo="password" placeholder="Senha do usuário" titulo="Senha" referencia={this.senhaRef} />
                    <Input tipo="password" placeholder="Repita sua senha" titulo="Senha" referencia={this.confSenhaRef} />
                    <button type="button" className="btn btn-success" onClick={this.cadastraUsuario}>Cadastrar</button>
                </div>
            </>
        )
    }
}