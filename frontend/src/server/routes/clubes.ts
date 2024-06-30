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
    
    public async putClube(){} //FAZER DEPOIS

    public async deleteClube(id: number) {
        await api.delete(`/clube/${id}`)
    }
}