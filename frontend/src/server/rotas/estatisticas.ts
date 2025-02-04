import { api } from "../server";

export default class Estatisticas {

    public async getEstatisticas() {
        const response = await api.get("/estatisticas")
        return response.data
    }

    public async getEstatisticaByCampeonato(id: number) {
        const response = await api.get(`/estatisticaByCampeonatoId/${id}`)
        return response.data
    }

    public async getEstatisticaByClube(id: number) {
        const response = await api.get(`/estatisticaByClubeId/${id}`)
        return response.data
    }

    public async getOneEstatistica(id: number) {
        const response = await api.get(`/estatisticaId/${id}`)
        return response.data
    }

    public async postEstatistica(campeonato_id: number, clube_id: number) {
        await api.post("/estatisticas", {
            campeonato_id: campeonato_id,
            clube_id: clube_id
        })
    }

    public async putEstatistica(id: number, pontos?: number, partidas?: number, vitorias?: number, empates?: number, derrotas?: number, golsPro?: number, golsContra?: number, saldoGols?: number, campeonato_id?: number, clube_id?: number) {
        if(pontos) {
            await api.put(`/estatisticas/${id}`, {
                pontos: pontos
            })
        }if(partidas) {
            await api.put(`/estatisticas/${id}`, {
                partidas: partidas
            })
        }if(vitorias) {
            await api.put(`/estatisticas/${id}`, {
                vitorias: vitorias
            })
        }if(empates) {
            await api.put(`/estatisticas/${id}`, {
                empates: empates
            })
        }if(derrotas) {
            await api.put(`/estatisticas/${id}`, {
                derrotas: derrotas
            })
        }if(golsPro) {
            await api.put(`/estatisticas/${id}`, {
                golsPro: golsPro
            })
        }if(golsContra) {
            await api.put(`/estatisticas/${id}`, {
                golsContra: golsContra
            })
        }if(saldoGols) {
            await api.put(`/estatisticas/${id}`, {
                saldoGols: saldoGols
            })
        }if(campeonato_id) {
            await api.put(`/estatisticas/${id}`, {
                campeonato_id: campeonato_id
            })
        }if(clube_id) {
            await api.put(`/estatisticas/${id}`, {
                clube_id: clube_id
            })
        }
    }

    public async deleteEstatistica(id: number) {
        await api.delete(`/estatisticas/${id}`)
    }
}