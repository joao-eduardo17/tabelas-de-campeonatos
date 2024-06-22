package com.campeonatos.models;

import lombok.Getter;

@Getter
public class Perfil {
    private long id;
    private String nome;

    public Perfil(long id, String nome) {
        this.id = id;
        this.nome = nome;
    }
}
