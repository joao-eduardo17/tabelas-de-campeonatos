package com.campeonatos.models.partida;

public record PartidaResponse(long id, String casa, String fora, String placar, long rodadaId, long clubeCasaId, long clubeForaId) {
    public PartidaResponse(Partida partida){
        this(partida.getId(), partida.getCasa(), partida.getFora(), partida.getPlacar(), partida.getRodadaId(), partida.getClubeCasaId(), partida.getClubeForaId());
    }
}
