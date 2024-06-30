import { api } from "../server";

export default class Usuarios {

    public async getUsuarios() {
        const response = await api.get("/usuarios")
        return response.data
    }

    public async postUsuario(nome: string, email: string, senha: string) {
        const response = await api.post("/usuario", {
            nome: nome,
            email: email,
            senha: senha
        })
    }

    public async putUsuario() {
        return
    }

    public async deleteUsuario(id: number) {
        const response = await api.delete(`/usuario/${id}`)
    }
}