package com.campeonatos.models.clube;

public record ClubeResponse(long id, String nome, int pontos, int partidas, int vitorias, int empates, int derrotas, int golsPro, int golsContra, int saldoGols, long campeonatoId) {
    public ClubeResponse(Clube clube){
        this(clube.getId(), clube.getNome(), clube.getPontos(), clube.getPartidas(), clube.getVitorias(), clube.getEmpates(), clube.getDerrotas(), clube.getGolsPro(), clube.getGolsContra(), clube.getSaldoGols(), clube.getCampeonatoId());
    }
}
