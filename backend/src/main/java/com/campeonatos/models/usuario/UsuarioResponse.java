package com.campeonatos.models.usuario;

public record UsuarioResponse(long id, String nome, String email, String senha, UserRole role) {
    public UsuarioResponse(Usuario usuario) {
        this(usuario.getId(), usuario.getNome(), usuario.getEmail(), usuario.getSenha(), usuario.getRole());
    }
}
