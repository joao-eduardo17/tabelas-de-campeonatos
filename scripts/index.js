const mudaModo = document.querySelector("#switch")
const temas = {
    claro: {
        corBackground: "#FFF",
        corPrimeiroPlano: "#FFF",
        corTextoPrimario: "#262626",
        corTextoSecundario: "#ACACAC"
    },
    escuro: {
        corBackground: "#000",
        corPrimeiroPlano: "#363636",
        corTextoPrimario: "#EEE",
        corTextoSecundario: "#A7A6A6"
    }
};

class Clube {
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

class ClubeController {
    #clubes
    #cabecalhoTabela

    constructor(clubes){
        this.#clubes = clubes
        this.#cabecalhoTabela = document.querySelector('#corpoTabela')
    }

    adicionaClube(clube){
        this.#clubes.push(clube)
    }

    renderizaClubes(){
        this.#clubes.forEach(clube => {
            const tr = document.createElement('tr')
            this.#cabecalhoTabela.appendChild(tr)
            console.log(clube)
            for(const chave in clube){
                const td = document.createElement('td')
                td.innerHTML = clube[chave]
                tr.appendChild(td)
            }
        });
    }
}

function setaTema(novoTema){
    const corTemas = temas[novoTema]
    Object.keys(corTemas).map(function(key) {
        html.style.setProperty(`--${key}`, corTemas[key])
    })
}

console.log("OPA")

const clube = new Clube("Corinthians", 72, 38, 20, 12, 6, 120, 30, 90)
const controller = new ClubeController([clube])
controller.renderizaClubes()