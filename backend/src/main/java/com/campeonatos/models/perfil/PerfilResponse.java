package com.campeonatos.models.perfil;

public record PerfilResponse(long id, String nome, long usuarioId) {
    public PerfilResponse(Perfil perfil){
        this(perfil.getId(), perfil.getNome(), perfil.getUsuarioId());
    }
}
