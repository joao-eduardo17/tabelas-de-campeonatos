import { api } from "../server";

const url = "/usuario"

export default class Usuarios {

    public async getUsuarios() {
        const response = await api.get(`${url}/usuarios`)
        return response.data
    }

    public async getOneUsuario(id: number) {
        const response = await api.get(`${url}/usuarioId/${id}`)
        return response.data
    }

    public async postUsuario(nome: string, email: string, senha: string) {
        await api.post(`${url}/usuario`, {
            nome: nome,
            email: email,
            senha: senha
        })
    }

    //Arrumar argumentos
    public async putUsuario(id: number, nome?: string, email?: string, senha?: string) {
        if(nome) {
            await api.put(`${url}/usuario/${id}`, {
                nome: nome
            })
        }if(email) {
            await api.put(`${url}/usuario/${id}`, {
                email: email
            })
        }if(senha) {
            await api.put(`${url}/usuario/${id}`, {
                senha: senha
            })
        }
    }

    public async deleteUsuario(id: number) {
        await api.delete(`${url}/usuario/${id}`)
    }
}