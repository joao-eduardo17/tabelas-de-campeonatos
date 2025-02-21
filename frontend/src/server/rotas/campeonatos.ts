import { api } from "../server";

const url = "/campeonato"

export default class Campeonatos {

    public async getCampeonatos() {
        const response = await api.get(`${url}/campeonatos`)
        return response.data
    }
    
    public async getCampeonatoByPerfil(id: number) {
        const response = await api.get(`${url}/campeonatoByPerfilId/${id}`)
        return response.data
    }

    public async getOneCampeonato(id: number) {
        const response = await api.get(`${url}/campeonatoId/${id}`)
        return response.data
    }

    public async postCampeonato(nome: string, tipo: string, finalizado: boolean, perfil_id: number) {
        await api.post(`${url}/campeonato`, {
            nome: nome,
            tipo: tipo,
            finalizado: finalizado,
            perfil_id: perfil_id
        })
    }

    public async putCampeonato(id: number, nome?: string, tipo?: string, finalizado?: boolean, perfil_id?: number) {
        if(nome) {
            await api.put(`${url}/campeonato/${id}`, {
                nome: nome
            })
        }if(tipo) {
            await api.put(`${url}/campeonato/${id}`, {
                tipo: tipo
            })
        }if(finalizado) {
            await api.put(`${url}/campeonatos${id}`, {
                finalizado: finalizado
            })
        }if(perfil_id) {
            await api.put(`${url}/campeonato/${id}`, {
                perfil_id: perfil_id
            })
        }
    }
    
    public async deleteCampeonato(id: number) {
        await api.delete(`${url}/campeonato/${id}`)
    }
}