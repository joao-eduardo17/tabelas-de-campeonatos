import { api } from "../server";

export default class Rodadas {

    public async getRodadas() {
        const response = await api.get("/rodadas")
        return response.data
    }

    public async getRodadaByCampeonato(id: number) {
        const response = await api.get(`/rodadaByCampeonatoId/${id}`)
        return response.data
    }

    public async postRodada(numero: number, campeonato_id: number) {
        await api.post("/rodada", {
            numero: numero,
            campeonato_id: campeonato_id
        })
    }

    public async putRodada(id: number, numero?: number, campeonato_id?: number) {
        if(numero) {
            await api.put(`/rodada/${id}`, {
                numero: numero
            })
        }if(campeonato_id) {
            await api.put(`/rodada/${id}`, {
                campeonato_id: campeonato_id
            })
        }
    }

    public async deleteRodada(id: number) {
        await api.delete(`/rodada/${id}`)
    }
}