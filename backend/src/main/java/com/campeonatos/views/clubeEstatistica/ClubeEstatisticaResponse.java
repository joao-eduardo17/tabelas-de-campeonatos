package com.campeonatos.views.clubeEstatistica;


public record ClubeEstatisticaResponse(long id, String nome, String imagem, int pontos, int partidas, int vitorias, int empates, int derrotas, int golsPro, int golsContra, int saldoGols) {
    public ClubeEstatisticaResponse(ClubeEstatistica clubeEstatistica){
        this(clubeEstatistica.getId(), clubeEstatistica.getNome(), clubeEstatistica.getImagem(), clubeEstatistica.getPontos(), clubeEstatistica.getPartidas(), clubeEstatistica.getVitorias(), clubeEstatistica.getEmpates(), clubeEstatistica.getDerrotas(), clubeEstatistica.getGolsPro(), clubeEstatistica.getGolsContra(), clubeEstatistica.getSaldoGols());
    }
}
