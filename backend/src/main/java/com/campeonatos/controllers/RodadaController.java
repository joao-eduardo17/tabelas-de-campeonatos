package com.campeonatos.controllers;

import com.campeonatos.models.Rodada;

import java.util.ArrayList;

public class RodadaController {
    private ArrayList<Rodada> rodadas;

    public RodadaController(ArrayList<Rodada> rodadas) {
        this.rodadas = rodadas;
    }

    public void adicionaRodada(Rodada rodada) {
        this.rodadas.add(rodada);
    }

    public ArrayList<Rodada> getRodadas() {
        return this.rodadas;
    }
}
