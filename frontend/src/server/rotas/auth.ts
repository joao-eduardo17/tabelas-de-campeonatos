import { api } from "../server";

const baseUrl = "/auth"

export default class Auth {
    public async login(nome: string, senha: string) {
        const response = await api.post(`${baseUrl}/login`, {
            email: nome,
            senha: senha
        })
        return response.data
    }

    public async cadastro(nome: string, senha: string, role: string) {
        const response = await api.post(`${baseUrl}/cadastro`, {
            email: nome,
            senha: senha,
            role: role
        })
        return response.data
    }
}