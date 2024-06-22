package com.campeonatos.models;

import lombok.Getter;

@Getter
public class Usuario {
    private long id;
    private String nome;
    private String email;
    private String senha;

    public Usuario(long id, String nome, String email, String senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}
