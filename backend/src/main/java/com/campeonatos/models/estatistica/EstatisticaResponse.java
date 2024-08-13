package com.campeonatos.models.estatistica;

public record EstatisticaResponse(long id, int pontos, int partidas, int vitorias, int empates, int derrotas, int golsPro, int golsContra, int saldoGols, long campeonatoId, long clubeId) {
    public EstatisticaResponse(Estatistica estatistica){
        this(estatistica.getId(), estatistica.getPontos(), estatistica.getPartidas(), estatistica.getVitorias(), estatistica.getEmpates(), estatistica.getDerrotas(), estatistica.getGolsPro(), estatistica.getGolsContra(), estatistica.getSaldoGols(), estatistica.getCampeonatoId(), estatistica.getClubeId());
    }
}
