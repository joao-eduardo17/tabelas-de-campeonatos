import { api } from "../server"

export default class ClubeEstatistica {

    public async getClubeEstatisticas() {
        const response = await api.get("/tabelas")
        return response.data
    }

    public async getClubeEstatisticaByCampeonato(id: number) {
        const response = await api.get(`/tabelaByCampeonatoId/${id}`)
        return response.data
    }

    public async getOneClubeEstatistica(id: number) {
        const response = await api.get(`/tabelaId/${id}`)
        return response.data
    }
}