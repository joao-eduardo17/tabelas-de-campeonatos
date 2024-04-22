export default class ClubeController {
    #clubes
    #cabecalhoTabela = document.querySelectorAll('#corpoTabela')

    constructor(clubes){
        this.#clubes = clubes
    }

    adicionaClube(clube){
        this.clubes.push(clube)
    }

    renderizaClubes(){
        clubes.forEach(clube => {
            const tr = document.createElement('tr')
            this.#cabecalhoTabela.appendChild(tr)

            for(const chave in clube){
                const td = document.createElement('td')
                td.innerHTML = clube[chave]
                tr.appendChild(td)
            }
        });
    }
}