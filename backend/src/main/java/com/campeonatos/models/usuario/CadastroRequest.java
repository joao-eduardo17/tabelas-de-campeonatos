package com.campeonatos.models.usuario;

public record CadastroRequest(String email, String senha, UserRole role) {
}
