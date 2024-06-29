package com.campeonatos.models.partida;

public record PartidaRequest(String casa, String fora, String placar, long rodadaId, long clubeCasaId, long clubeForaId) {
}
