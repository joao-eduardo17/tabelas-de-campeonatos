package com.campeonatos.models;

public class Partida {
    private String casa;
    private String fora;
    private String placar;

    public Partida(String casa, String fora, String placar){
        this.casa = casa;
        this.fora = fora;
        this.placar = placar;
    }

    public String getCasa() {
        return this.casa;
    }

    public String getFora() {
        return this.fora;
    }

    public String getPlacar() {
        return this.placar;
    }
}
