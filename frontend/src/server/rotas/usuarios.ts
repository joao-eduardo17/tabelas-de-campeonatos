import { api } from "../server";

export default class Usuarios {

    public async getUsuarios() {
        const response = await api.get("/usuarios")
        return response.data
    }

    public async postUsuario(nome: string, email: string, senha: string) {
        await api.post("/usuario", {
            nome: nome,
            email: email,
            senha: senha
        })
        // console.log("DEU CERTO?")
    }

    public async putUsuario(id: number, nome?: string, email?: string, senha?: string) {
        if(nome) {
            await api.put(`/usuario/${id}`, {
                nome: nome
            })
        }if(email) {
            await api.put(`/usuario/${id}`, {
                email: email
            })
        }if(senha) {
            await api.put(`/usuario/${id}`, {
                senha: senha
            })
        }
    }

    public async deleteUsuario(id: number) {
        await api.delete(`/usuario/${id}`)
    }
}