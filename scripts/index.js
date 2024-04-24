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
        "Pontos": parseInt(pts),
        "Partidas": parseInt(pj),
        "Vitorias": parseInt(vit),
        "Empates": parseInt(emp),
        "Derrotas": parseInt(der),
        "Gols-Pro": parseInt(gp),
        "Gols-Contra": parseInt(gc),
        "Saldo-Gols": parseInt(sg)
    }
    clubes.push(clube)
}

function casoEmpate(clube, gp, gc) {
    clube.Partidas = parseInt(clube.Partidas) + 1
    clube.Pontos = parseInt(clube.Pontos) + 1
    clube.Empates = parseInt(clube.Empates) + 1
    clube['Gols-Pro'] = parseInt(clube['Gols-Pro']) + parseInt(gp)
    clube['Gols-Contra'] = parseInt(clube['Gols-Contra']) + parseInt(gc)
}

function casoVitoria(clube, gp, gc) {
    clube.Partidas = parseInt(clube.Partidas) + 1
    clube.Pontos = parseInt(clube.Pontos) + 3
    clube.Vitorias = parseInt(clube.Vitorias) + 1
    clube['Gols-Pro'] = parseInt(clube['Gols-Pro']) + parseInt(gp)
    clube['Gols-Contra'] = parseInt(clube['Gols-Contra']) + parseInt(gc)
    clube['Saldo-Gols'] = parseInt(clube['Saldo-Gols']) + gp - gc 
}

function casoDerrota(clube, gp, gc) {
    clube.Partidas = parseInt(clube.Partidas) + 1
    clube.Derrotas = parseInt(clube.Derrotas) + 1
    clube['Gols-Pro'] = parseInt(clube['Gols-Pro']) + parseInt(gp)
    clube['Gols-Contra'] = parseInt(clube['Gols-Contra']) + parseInt(gc)
    clube['Saldo-Gols'] = parseInt(clube['Saldo-Gols']) + gp - gc
}

function adicionaPartida(timeCasa, timeFora, placar){
    const partida = {
        "Casa": timeCasa,
        "Fora": timeFora,
        "Placar": placar
    }

    clubes.forEach((clube) => {
        if(clube.Nome === timeCasa) {
            placar = partida.Placar
            gp = placar.substring(0, placar.indexOf('X'))
            gc = placar.substring(placar.indexOf('X')+1)
            if(gp == gc) {
                casoEmpate(clube, gp, gc)
            } else if(parseInt(gp) > parseInt(gc)) {
                casoVitoria(clube, gp, gc)
            } else {
                casoDerrota(clube, gp, gc)
            }
        }
        
        if(clube.Nome === timeFora) {
            placar = partida.Placar
            gp = placar.substring(0, placar.indexOf('X'))
            gc = placar.substring(placar.indexOf('X')+1)
            if(gp == gc) {
                casoEmpate(clube, gc, gp)
            } else if(parseInt(gp) > parseInt(gc)) {
                casoDerrota(clube, gc, gp)
            } else {
                casoVitoria(clube, gc, gp)
            }
        }
    })
}

function ordenaPontos(a, b){
    if(a.Pontos > b.Pontos){
        return -1 
    } else if(a.Pontos < b.Pontos){
        return 1
    } else {
        return 0
    }
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
adicionaPartida("Corinthians", "Palmeiras", "10X0")
adicionaPartida("Cuiabá", "Vitória", "1X1")
adicionaPartida("Athlético Paranaense", "Fortaleza", "0X2")
clubes.sort(ordenaPontos)

renderizaClubes()

//clubes.sort((a, b) => a.Nome.localeCompare(b.Nome))