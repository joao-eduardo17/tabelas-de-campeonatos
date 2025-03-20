import { api } from "../server";

const url = "/estatistica"

export default class Estatisticas {

    public async getEstatisticas() {
        const response = await api.get(`${url}/estatisticas`)
        return response.data
    }

    public async getEstatisticaByCampeonato(id: number) {
        const response = await api.get(`${url}/estatisticaByCampeonatoId/${id}`)
        return response.data
    }

    public async getEstatisticaByClube(id: number) {
        const response = await api.get(`${url}/estatisticaByClubeId/${id}`)
        return response.data
    }

    public async getOneEstatistica(id: number) {
        const response = await api.get(`${url}/estatisticaId/${id}`)
        return response.data
    }

    public async postEstatistica(campeonato_id: number, clube_id: number) {
        await api.post(`${url}/estatistica`, {
            campeonatoId: campeonato_id,
            clubeId: clube_id
        })
    }

    public async putEstatistica(id: number, pontos?: number, partidas?: number, vitorias?: number, empates?: number, derrotas?: number, golsPro?: number, golsContra?: number, saldoGols?: number, campeonato_id?: number, clube_id?: number) {
        if(pontos) {
            await api.put(`${url}/estatistica/${id}`, {
                pontos: pontos
            })
        }if(partidas) {
            await api.put(`${url}/estatistica/${id}`, {
                partidas: partidas
            })
        }if(vitorias) {
            await api.put(`${url}/estatistica/${id}`, {
                vitorias: vitorias
            })
        }if(empates) {
            await api.put(`${url}/estatistica/${id}`, {
                empates: empates
            })
        }if(derrotas) {
            await api.put(`${url}/estatistica/${id}`, {
                derrotas: derrotas
            })
        }if(golsPro) {
            await api.put(`${url}/estatistica/${id}`, {
                golsPro: golsPro
            })
        }if(golsContra) {
            await api.put(`${url}/estatistica/${id}`, {
                golsContra: golsContra
            })
        }if(saldoGols) {
            await api.put(`${url}/estatistica/${id}`, {
                saldoGols: saldoGols
            })
        }if(campeonato_id) {
            await api.put(`${url}/estatistica/${id}`, {
                campeonato_id: campeonato_id
            })
        }if(clube_id) {
            await api.put(`${url}/estatistica/${id}`, {
                clube_id: clube_id
            })
        }
    }

    public async deleteEstatistica(id: number) {
        await api.delete(`${url}/estatistica/${id}`)
    }
}