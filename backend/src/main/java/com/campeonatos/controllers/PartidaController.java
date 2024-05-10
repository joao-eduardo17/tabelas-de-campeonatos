package com.campeonatos.controllers;

import java.util.ArrayList;

import com.campeonatos.models.Partida;

public class PartidaController {
    private ArrayList<Partida> partidas;

    public PartidaController(ArrayList<Partida> partidas) {
        this.partidas = partidas;
    }
     
    public void adicionaPartida(Partida partida) {
        this.partidas.add(partida);
    }

    public ArrayList<Partida> getPartidas() {
        return this.partidas;
    }
}
