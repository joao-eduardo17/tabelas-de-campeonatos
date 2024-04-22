export default class Clube {
    #nome
    #pontos
    #partidas
    #vitorias
    #empates
    #derrotas
    #golsPro
    #golsContra
    #saldoGols

    constructor(nome, pontos, partidas, vitorias, empates, derrotas, golsPro, golsContra, saldoGols) {
        this.#nome = nome
        this.#pontos = pontos
        this.#partidas = partidas
        this.#vitorias = vitorias
        this.#empates = empates
        this.#derrotas = derrotas
        this.#golsPro = golsPro
        this.#golsContra = golsContra
        this.#saldoGols = saldoGols
    }
    
    get nome() {
        return this.#nome
    }

    get pontos() {
        return this.#pontos
    }

    get partidas() {
        return this.#partidas
    }

    get vitorias() {
        return this.#vitorias
    }

    get empates() {
        return this.#empates
    }

    get derrotas() {
        return this.#derrotas
    }

    get golsPro() {
        return this.#golsPro
    }

    get golsContra() {
        return this.#golsContra
    }

    get saldoGols() {
        return this.#saldoGols
    }
}