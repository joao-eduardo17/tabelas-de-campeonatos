import { api } from "../server";

export default class Campeonatos {

    public async getCampeonatos() {
        const response = await api.get("/campeonatos")
        return response.data
    }

    public async postCampeonato(nome: string, tipo: string, perfil_id: number) {
        await api.post("/campeonato", {
            nome: nome,
            tipo: tipo,
            perfil_id: perfil_id
        })
    }

    public async putCampeonato(id: number, nome?: string, tipo?: string, perfil_id?: number) {
        if(nome) {
            await api.put(`/campeonato/${id}`, {
                nome: nome
            })
        }if(tipo) {
            await api.put(`/campeonato/${id}`, {
                tipo: tipo
            })
        }if(perfil_id) {
            await api.put(`/campeonato/${id}`, {
                perfil_id: perfil_id
            })
        }
    }
    
    public async deleteCampeonato(id: number) {
        await api.delete(`/campeonato/${id}`)
    }
}