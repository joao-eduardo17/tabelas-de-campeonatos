import { api } from "../server";

export default class Clubes {

    public async getClubes() {
        const response = await api.get("/clubes")
        return response.data
    }
    
    public async postClube(nome: string, campeonato_id: number) {
        await api.post("/clube", {
            nome: nome,
            campeonato_id: campeonato_id
        })
    }
    
    public async putClube(id: number, nome?: string, pontos?: number, partidas?: number, vitorias?: number, empates?: number, derrotas?: number, golsPro?: number, golsContra?: number, saldoGols?: number, campeonato_id?: number){
        if(nome) {
            await api.put(`/clube/${id}`, {
                nome: nome
            })
        }if(pontos) {
            await api.put(`/clube/${id}`, {
                pontos: pontos
            })
        }if(partidas) {
            await api.put(`/clube/${id}`, {
                partidas: partidas
            })
        }if(vitorias) {
            await api.put(`/clube/${id}`, {
                vitorias: vitorias
            })
        }if(empates) {
            await api.put(`/clube/${id}`, {
                empates: empates
            })
        }if(derrotas) {
            await api.put(`/clube/${id}`, {
                derrotas: derrotas
            })
        }if(golsPro) {
            await api.put(`/clube/${id}`, {
                golsPro: golsPro
            })
        }if(golsContra) {
            await api.put(`/clube/${id}`, {
                golsContra: golsContra
            })
        }if(saldoGols) {
            await api.put(`/clube/${id}`, {
                saldoGols: saldoGols
            })
        }if(campeonato_id) {
            await api.put(`/clube/${id}`, {
                campeonato_id: campeonato_id
            })
        }
    }

    public async deleteClube(id: number) {
        await api.delete(`/clube/${id}`)
    }
}