import { api } from "../server";

const url = "/partida"

export default class Partidas {

    public async getPartidas() {
        const response = await api.get(`${url}/partidas`)
        return response.data
    }

    public async getPartidasByClube(id: number) {
        const response = await api.get(`${url}/partidaByClubeId/${id}`)
        return response.data
    }

    public async getPartidasByRodada(id: number) {
        const response = await api.get(`${url}/partidaByRodadaId/${id}`)
        return response.data
    }

    public async getOnePartida(id: number) {
        const response = await api.get(`${url}/partidaId/${id}`)
        return response.data
    }

    public async postPartida(casa: string, fora: string, clube_casa_id: number, clube_fora_id: number, rodada_id: number) {
        await api.post(`${url}/partida`, {
            casa: casa,
            fora: fora,
            clube_casa_id: clube_casa_id,
            clube_fora_id: clube_fora_id,
            rodada_id: rodada_id   
        })
    }

    //Arrumar argumentos
    public async putPartida(id: number, casa?: string, fora?: string, clube_casa_id?: number, clube_fora_id?: number, rodada_id?: number) {
        if(casa) {
            await api.put(`${url}/partida/${id}`, {
                casa: casa
            })
        }if(fora) {
            await api.put(`${url}/partida/${id}`, {
                fora: fora
            })
        }if(clube_casa_id) {
            await api.put(`${url}/partida/${id}`, {
                clube_casa_id: clube_casa_id
            })
        }if(clube_fora_id) {
            await api.put(`${url}/partida/${id}`, {
                clube_fora_id: clube_fora_id
            })
        }if(rodada_id) {
            await api.put(`${url}/partida/${id}`, {
                rodada_id: rodada_id
            })
        }
    }

    public async deletePartida(id: number) {
        await api.delete(`${url}/partida/${id}`)
    }
}