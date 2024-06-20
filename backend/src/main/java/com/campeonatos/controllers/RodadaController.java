package main.java.com.campeonatos.controllers;

import java.util.ArrayList;

import com.campeonatos.models.Partida;

public class RodadaController {
    private ArrayList<Rodada> rodadas;

    public RodadaController(ArrayList<Rodada> rodadas) {
        this.rodadas = rodadas;
    }

    public void adicionaRodada(ArrayList<Partida> rodada) {
        this.rodadas.add(rodada);
    }

    public ArrayList<Rodada> getRodada() {
        return this.rodada;
    }
}
