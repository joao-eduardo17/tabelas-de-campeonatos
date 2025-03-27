package com.campeonatos.views.clubesCampRodada;

public record ClubesCampRodadaResponse(long id, long rodadaId, String nome, long campeonatoId) {
    public ClubesCampRodadaResponse(ClubesCampRodada clubesCampRodada) {
        this(clubesCampRodada.getId(), clubesCampRodada.getRodadaId(), clubesCampRodada.getNome(), clubesCampRodada.getCampeonatoId());
    }
}
