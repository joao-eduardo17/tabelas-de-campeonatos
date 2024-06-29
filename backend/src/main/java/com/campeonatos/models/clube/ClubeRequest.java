package com.campeonatos.models.clube;

public record ClubeRequest(long id, String nome, int pontos, int partidas, int vitorias, int empates, int derrotas, int golsPro, int golsContra, int saldoGols, long campeonatoId) {
}
