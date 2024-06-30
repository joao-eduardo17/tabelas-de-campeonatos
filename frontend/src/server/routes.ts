import { api } from "./server";

// CRUD USUÁRIOS
export async function getUsuarios() {
    const response = await api.get("/usuarios")
    return response.data
}

// COLOCAR COMO PARAMETRO DA FUNÇÃO????
export async function postUsuario() {

}
// export const postUsuario = async(nome: string, email: string, senha: string) => {
//     const response = await api.post("/usuario", {
//         nome: nome,
//         email: email,
//         senha: senha
//     })
// }

export const putUsuario = async() => {

}

// get plural 
// post normal
// put del normal/id