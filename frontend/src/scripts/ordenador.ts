import ClubeEstatistica from "../interfaces/clubeEstatistica";
import Estatistica from "../interfaces/estatistica";

export default function ordenaClubes(estatisticas: Estatistica[]): Estatistica[] {
    estatisticas.sort(ordenaPartidas)
    estatisticas.sort(ordenaDerrotas)
    estatisticas.sort(ordenaEmpates)
    estatisticas.sort(ordenaGolsContra)
    estatisticas.sort(ordenaGolsPro)
    estatisticas.sort(ordenaVitorias)
    estatisticas.sort(ordenaSaldoGols)
    estatisticas.sort(ordenaPontos)
    return estatisticas
}

function ordenaPartidas(a: Estatistica | ClubeEstatistica, b: Estatistica | ClubeEstatistica) {
    if(a.partidas > b.partidas) return -1
    else if(a.partidas < b.partidas) return 1
    else return 0
}

function ordenaPontos(a: Estatistica | ClubeEstatistica, b: Estatistica | ClubeEstatistica) {
    if(a.pontos > b.pontos) return -1
    else if(a.pontos < b.pontos) return 1
    else return 0
}

function ordenaVitorias(a: Estatistica | ClubeEstatistica, b: Estatistica | ClubeEstatistica) {
    if(a.vitorias > b.vitorias) return -1
    else if(a.vitorias < b.vitorias) return 1
    else return 0
}

function ordenaEmpates(a: Estatistica | ClubeEstatistica, b: Estatistica | ClubeEstatistica) {
    if(a.empates > b.empates) return -1
    else if(a.empates < b.empates) return 1
    else return 0
}

function ordenaDerrotas(a: Estatistica | ClubeEstatistica, b: Estatistica | ClubeEstatistica) {
    if(a.derrotas < b.derrotas) return -1
    else if(a.derrotas > b.derrotas) return 1
    else return 0
}

function ordenaGolsPro(a: Estatistica | ClubeEstatistica, b: Estatistica | ClubeEstatistica) {
    if(a.golsPro > b.golsPro) return -1
    else if(a.golsPro < b.golsPro) return 1
    else return 0
}

function ordenaGolsContra(a: Estatistica | ClubeEstatistica, b: Estatistica | ClubeEstatistica) {
    if(a.golsContra < b.golsContra) return -1
    else if(a.golsContra > b.golsContra) return 1
    else return 0
}

function ordenaSaldoGols(a: Estatistica | ClubeEstatistica, b: Estatistica | ClubeEstatistica) {
    if(a.saldoGols > b.saldoGols) return -1
    else if(a.saldoGols < b.saldoGols) return 1
    else return 0
}
