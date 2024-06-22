package com.campeonatos.models;

import lombok.Getter;

@Getter
public class Partida {
    private long id;
    private String casa;
    private String fora;
    private String placar;

    public Partida(long id, String casa, String fora, String placar){
        this.id = id;
        this.casa = casa;
        this.fora = fora;
        this.placar = placar;
    }
}
