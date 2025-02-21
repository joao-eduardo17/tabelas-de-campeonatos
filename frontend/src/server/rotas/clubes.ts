import { api } from "../server";

const url = "/clube" 

export default class Clubes {

    public async getClubes() {
        const response = await api.get(`${url}/clubes`)
        return response.data
    }

    public async getClubeByCampeonato(id: number) {
        const response = await api.get(`${url}/clubeByCampeonatoId/${id}`)
        return response.data
    }

    public async getOneClube(id: number) {
        const response = await api.get(`${url}/clubeId/${id}`)
        return response.data
    }
    
    public async postClube(nome: string, campeonato_id: number, dataCriacao?: Date, imagem?: string) {
        await api.post(`${url}/clube`, {
            nome: nome,
            campeonato_id: campeonato_id,
            dataCriacao: dataCriacao,
            imagem: imagem
        })
    }
    
    public async putClube(id: number, nome?: string, campeonato_id?: number, dataCriacao?: Date, imagem?: string){
        if(nome) {
            await api.put(`${url}/clube/${id}`, {
                nome: nome
            })
        }if(campeonato_id) {
            await api.put(`${url}/clube/${id}`, {
                campeonato_id: campeonato_id
            })
        }if(dataCriacao) {
            await api.put(`${url}/clube/${id}`, {
                dataCriacao: dataCriacao
            })
        }if(imagem) {
            await api.put(`${url}/clube/${id}`, {
                imagem: imagem
            })
        }
    }

    public async deleteClube(id: number) {
        await api.delete(`${url}/clube/${id}`)
    }
}