import { api } from "../server";

const url = "perfil"

export default class Perfis {

    public async getPerfis() {
        const response = await api.get(`${url}/perfis`)
        return response.data
    }

    public async getPerfilByUsuario(id: number) {
        const response = await api.get(`${url}/perfilByUsuarioId/${id}`)
        return response.data
    }

    public async getOnePerfil(id: number) {
        const response = await api.get(`${url}/perfilId/${id}`)
        return response.data
    }

    public async postPerfis(nome: string, usuario_id: number) {
        await api.post(`${url}/perfil`, {
            nome: nome,
            usuarioId: usuario_id
        })
    }

    //Arrumar argumentos
    public async putPerfis(id: number, nome?: string, usuario_id?: number) {
        if(nome) {
            await api.put(`${url}/perfil/${id}`, {
                nome: nome
            })
        }if(usuario_id) {
            await api.put(`${url}/perfil/${id}`, {
                usuario_id: usuario_id
            })
        }
    }

    public async deletePerfil(id: number) {
        await api.delete(`${url}/perfil/${id}`)
    }
}