import { api } from "../server";

export default class Perfis {

    public async getPerfis() {
        const response = await api.get("/perfis")
        return response.data
    }

    public async getPerfilByUsuario(id: number) {
        const response = await api.get(`/perfilByUsuarioId/${id}`)
        return response.data
    }

    public async postPerfis(nome: string, usuario_id: number) {
        await api.post("/perfil", {
            nome: nome,
            usuario_id: usuario_id
        })
    }

    public async putPerfis(id: number, nome?: string, usuario_id?: number) {
        if(nome) {
            await api.put(`/perfil/${id}`, {
                nome: nome
            })
        }if(usuario_id) {
            await api.put(`/perfil/${id}`, {
                usuario_id: usuario_id
            })
        }
    }

    public async deletePerfil(id: number) {
        await api.delete(`/perfil/${id}`)
    }
}