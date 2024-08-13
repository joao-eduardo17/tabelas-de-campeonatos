package com.campeonatos.models.partida;

public record PartidaRequest(int placarCasa, int placarFora, long rodadaId, long clubeCasaId, long clubeForaId) {
}
