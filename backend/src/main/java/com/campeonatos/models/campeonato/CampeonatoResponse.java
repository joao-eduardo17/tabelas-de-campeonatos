package com.campeonatos.models.campeonato;

public record CampeonatoResponse(long id, String nome, String tipo, boolean finalizado, long perfilId) {
    public CampeonatoResponse(Campeonato campeonato) {
        this(campeonato.getId(), campeonato.getNome(), campeonato.getTipo(), campeonato.isFinalizado(), campeonato.getPerfilId());
    }
}
