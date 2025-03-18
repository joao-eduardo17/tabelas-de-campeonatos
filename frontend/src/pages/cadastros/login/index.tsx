import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/input";
import Auth from "../../../server/rotas/auth";
import Swal from "sweetalert2";

const auth = new Auth();

export default function LoginUsuario() {
    const loginRef = useRef<HTMLInputElement>(null);
    const senhaRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function logaUsuario() {
        try {
            const login = loginRef.current?.value || "";
            const senha = senhaRef.current?.value || "";

            if (!login || !senha) {
                Swal.fire({ title: "Erro", text: "Preencha todos os campos", icon: "warning" });
                return;
            }

            const token = await auth.login(login, senha);
            sessionStorage.setItem("authentication", token.token);

            Swal.fire({ title: "Sucesso", text: "Login realizado!", icon: "success" });

            navigate("/home");
        } catch (error) {
            console.log(error);
            Swal.fire({ title: "Erro", text: `Ocorreu um erro: ${error}`, icon: "error" });
        }
    }

    return (
        <div className="container">
            <Input tipo="text" placeholder="Nome/email" titulo="Login" referencia={loginRef} />
            <Input tipo="password" placeholder="Senha do usuário" titulo="Senha" referencia={senhaRef} />
            <button type="button" className="btn btn-success" onClick={logaUsuario}>
                Logar
            </button>
            <p>
                Ainda não tem uma conta?{" "}
                <a onClick={() => navigate("/cadastro")} style={{ cursor: "pointer", color: "blue" }}>
                    Cadastre-se aqui
                </a>
            </p>
        </div>
    );
}
