import { api } from "../server"

const url = "/tabela"

export default class ClubeEstatistica {

    public async getClubeEstatisticas() {
        const response = await api.get(`${url}/tabelas`)
        return response.data
    }

    public async getClubeEstatisticaByCampeonato(id: number) {
        const response = await api.get(`${url}/tabelaByCampeonatoId/${id}`)
        return response.data
    }

    public async getOneClubeEstatistica(id: number) {
        const response = await api.get(`${url}/tabelaId/${id}`)
        return response.data
    }
}