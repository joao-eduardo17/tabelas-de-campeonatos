import { api } from "../server";

export default class Clubes {

    public async getClubes() {
        const response = await api.get("/clubes")
        return response.data
    }

    public async getClubeByCampeonato(id: number) {
        const response = await api.get(`/clubeByCampeonatoId/${id}`)
        return response.data
    }
    
    public async postClube(nome: string, campeonato_id: number, dataCriacao?: Date, imagem?: string) {
        await api.post("/clube", {
            nome: nome,
            campeonato_id: campeonato_id,
            dataCriacao: dataCriacao,
            imagem: imagem
        })
    }
    
    public async putClube(id: number, nome?: string, campeonato_id?: number, dataCriacao?: Date, imagem?: string){
        if(nome) {
            await api.put(`/clube/${id}`, {
                nome: nome
            })
        }if(campeonato_id) {
            await api.put(`/clube/${id}`, {
                campeonato_id: campeonato_id
            })
        }if(dataCriacao) {
            await api.put(`/clube/${id}`, {
                dataCriacao: dataCriacao
            })
        }if(imagem) {
            await api.put(`/clube/${id}`, {
                imagem: imagem
            })
        }
    }

    public async deleteClube(id: number) {
        await api.delete(`/clube/${id}`)
    }
}