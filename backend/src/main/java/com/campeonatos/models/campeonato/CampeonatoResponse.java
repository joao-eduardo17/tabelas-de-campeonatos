package com.campeonatos.models.campeonato;

public record CampeonatoResponse(long id, String nome, String tipo, long perfilId) {
    public CampeonatoResponse(Campeonato campeonato) {
        this(campeonato.getId(), campeonato.getNome(), campeonato.getTipo(), campeonato.getPerfilId());
    }
}
