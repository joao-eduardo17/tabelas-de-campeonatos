package com.campeonatos.models.rodada;

public record RodadaResponse(long id, int numero, long campeonatoId) {
    public RodadaResponse(Rodada rodada) {
        this(rodada.getId(), rodada.getNumero(), rodada.getCampeonatoId());
    }
}
