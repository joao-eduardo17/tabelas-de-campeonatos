package com.campeonatos.views.clubeEstatistica;

public record ClubeEstatisticaRequest(long id, String nome, String imagem, int pontos, int partidas, int vitorias, int empates, int derrotas, int golsPro, int golsContra, int saldoGols) {
}
