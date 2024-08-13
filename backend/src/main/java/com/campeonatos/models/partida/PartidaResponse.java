package com.campeonatos.models.partida;

public record PartidaResponse(long id, int placarCasa, int placarFora, long rodadaId, long clubeCasaId, long clubeForaId) {
    public PartidaResponse(Partida partida){
        this(partida.getId(), partida.getPlacarCasa(), partida.getPlacarFora(), partida.getRodadaId(), partida.getClubeCasaId(), partida.getClubeForaId());
    }
}
