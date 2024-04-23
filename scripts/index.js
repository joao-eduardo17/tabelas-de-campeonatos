const clubes = []
const cabecalhoTabela = document.querySelector('#corpoTabela')
// const mudaModo = document.querySelector("#switch")
// const temas = {
//     claro: {
//         corBackground: "#FFF",
//         corPrimeiroPlano: "#FFF",
//         corTextoPrimario: "#262626",
//         corTextoSecundario: "#ACACAC"
//     },
//     escuro: {
//         corBackground: "#000",
//         corPrimeiroPlano: "#363636",
//         corTextoPrimario: "#EEE",
//         corTextoSecundario: "#A7A6A6"
//     }
// };

// function setaTema(novoTema){
//     const corTemas = temas[novoTema]
//     Object.keys(corTemas).map(function(key) {
//         html.style.setProperty(`--${key}`, corTemas[key])
//     })
// }

// mudaModo.addEventListener('change', function({ target }) {
//   setaTema(target.checked ? 'claro' : 'escuro');
// });

function renderizaClubes(){
    clubes.forEach(clube => {
        const tr = document.createElement('tr')
        cabecalhoTabela.appendChild(tr)
        
        Object.keys(clube).forEach((chave) => {
            const td = document.createElement('td')
            td.id = "desc"
            td.innerHTML = clube[chave]
            tr.appendChild(td)
        });
    }
)}

function adicionaClube(nome, pts = 0, pj = 0, vit = 0, emp = 0, der = 0, gp = 0, gc = 0, sg = 0){
    const clube = {
        "Nome": nome,
        "Pontos": pts,
        "Partidas": pj,
        "Vitorias": vit,
        "Empates": emp,
        "Derrotas": der,
        "Gols-Pro": gp,
        "Gols-Contra": gc,
        "Saldo-Gols": sg
    }
    clubes.push(clube)
}

adicionaClube("Corinthians")
adicionaClube("São Paulo")
adicionaClube("Flamengo")
adicionaClube("Fluminense")
adicionaClube("Vasco")
adicionaClube("Botafogo")
adicionaClube("Grêmio")
adicionaClube("Internacional")
adicionaClube("Atlético Mineiro")
adicionaClube("Cruzeiro")
adicionaClube("Bahia")
adicionaClube("Vitória")
adicionaClube("Juventude")
adicionaClube("Criciuma")
adicionaClube("Atlético-GO")
adicionaClube("Palmeiras")
adicionaClube("Fortaleza")
adicionaClube("Athlético Paranaense")
adicionaClube("Cuiabá")
adicionaClube("Bragantino")
renderizaClubes()

//clubes.toSorted((a, b) => a.Nome.localeCompare(b.Nome))