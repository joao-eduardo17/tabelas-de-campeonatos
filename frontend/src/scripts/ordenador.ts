import ClubeTabela from "../interfaces/clubeTabela";
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

function ordenaPartidas(a: Estatistica | ClubeTabela, b: Estatistica | ClubeTabela) {
    if(a.partidas > b.partidas) return -1
    else if(a.partidas < b.partidas) return 1
    else return 0
}

function ordenaPontos(a: Estatistica | ClubeTabela, b: Estatistica | ClubeTabela) {
    if(a.pontos > b.pontos) return -1
    else if(a.pontos < b.pontos) return 1
    else return 0
}

function ordenaVitorias(a: Estatistica | ClubeTabela, b: Estatistica | ClubeTabela) {
    if(a.vitorias > b.vitorias) return -1
    else if(a.vitorias < b.vitorias) return 1
    else return 0
}

function ordenaEmpates(a: Estatistica | ClubeTabela, b: Estatistica | ClubeTabela) {
    if(a.empates > b.empates) return -1
    else if(a.empates < b.empates) return 1
    else return 0
}

function ordenaDerrotas(a: Estatistica | ClubeTabela, b: Estatistica | ClubeTabela) {
    if(a.derrotas < b.derrotas) return -1
    else if(a.derrotas > b.derrotas) return 1
    else return 0
}

function ordenaGolsPro(a: Estatistica | ClubeTabela, b: Estatistica | ClubeTabela) {
    if(a.golsPro > b.golsPro) return -1
    else if(a.golsPro < b.golsPro) return 1
    else return 0
}

function ordenaGolsContra(a: Estatistica | ClubeTabela, b: Estatistica | ClubeTabela) {
    if(a.golsContra < b.golsContra) return -1
    else if(a.golsContra > b.golsContra) return 1
    else return 0
}

function ordenaSaldoGols(a: Estatistica | ClubeTabela, b: Estatistica | ClubeTabela) {
    if(a.saldoGols > b.saldoGols) return -1
    else if(a.saldoGols < b.saldoGols) return 1
    else return 0
}
