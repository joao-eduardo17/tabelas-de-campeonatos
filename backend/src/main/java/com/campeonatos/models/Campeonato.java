package com.campeonatos.models;

import lombok.Getter;

@Getter
public class Campeonato {
    private long id;
    private String nome;
    private String tipo;

    public Campeonato(long id, String nome, String tipo) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
    }
}
