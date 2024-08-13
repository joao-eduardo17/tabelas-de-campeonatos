package com.campeonatos.models.estatistica;

public record EstatisticaRequest(long id, int pontos, int partidas, int vitorias, int empates, int derrotas, int golsPro, int golsContra, int saldoGols, long campeonatoId, long clubeId) {
}
