package com.campeonatos.models;

import java.util.ArrayList;

import com.campeonatos.models.Partida;
import lombok.Getter;

@Getter
public class Rodada {
    private long id;
    private int numero;
    private ArrayList<Partida> rodada;

    public Rodada(long id, int numero, ArrayList<Partida> rodada) {
        this.id = id;
        this.numero = numero;
        this.rodada = rodada;
    }
}
