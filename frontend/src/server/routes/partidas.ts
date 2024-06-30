import { api } from "../server";

export default class Partidas {

    public async getPartidas() {
        const response = await api.get("/partidas")
        return response.data
    }

    public async postPartida(casa: string, fora: string, placar: string, clube_casa_id: number, clube_fora_id: number) {
        await api.post("/partida", {
            casa: casa,
            fora: fora,
            placar: placar,
            clube_casa_id: clube_casa_id,
            clube_fora_id: clube_fora_id
        })
    }

    public async putPartida(id: number, casa?: string, fora?: string, placar?: string, clube_casa_id?: number, clube_fora_id?: number) {
        if(casa) {
            await api.put(`/partida/${id}`, {
                casa: casa
            })
        }if(fora) {
            await api.put(`/partida/${id}`, {
                fora: fora
            })
        }if(placar) {
            await api.put(`/partida/${id}`, {
                placar: placar
            })
        }if(clube_casa_id) {
            await api.put(`/partida/${id}`, {
                clube_casa_id: clube_casa_id
            })
        }if(clube_fora_id) {
            await api.put(`/partida/${id}`, {
                clube_fora_id: clube_fora_id
            })
        }
    }

    public async deletePartida(id: number) {
        await api.delete(`/partida/${id}`)
    }
}