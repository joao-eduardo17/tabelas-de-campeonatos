import { api } from "../server";

const url = "/rodada"

export default class Rodadas {

    public async getRodadas() {
        const response = await api.get(`${url}/rodadas`)
        return response.data
    }

    public async getRodadaByCampeonato(id: number) {
        const response = await api.get(`${url}/rodadaByCampeonatoId/${id}`)
        return response.data
    }

    public async getOneRodada(id: number) {
        const response = await api.get(`${url}/rodadaId/${id}`)
        return response.data
    }

    public async postRodada(numero: number, campeonato_id: number) {
        await api.post(`${url}/rodada`, {
            numero: numero,
            campeonato_id: campeonato_id
        })
    }

    //Arrumar argumentos
    public async putRodada(id: number, numero?: number, campeonato_id?: number) {
        if(numero) {
            await api.put(`${url}/rodada/${id}`, {
                numero: numero
            })
        }if(campeonato_id) {
            await api.put(`${url}/rodada/${id}`, {
                campeonato_id: campeonato_id
            })
        }
    }

    public async deleteRodada(id: number) {
        await api.delete(`${url}/rodada/${id}`)
    }
}