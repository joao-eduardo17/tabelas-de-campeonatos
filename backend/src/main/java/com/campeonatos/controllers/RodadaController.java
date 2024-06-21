package com.campeonatos.controllers;

import com.campeonatos.models.*;

import java.util.ArrayList;

public class RodadaController {
    private ArrayList<main.java.com.campeonatos.models.Rodada> rodadas;

    public RodadaController(ArrayList<main.java.com.campeonatos.models.Rodada> rodadas) {
        this.rodadas = rodadas;
    }

    public void adicionaRodada(main.java.com.campeonatos.models.Rodada rodada) {
        this.rodadas.add(rodada);
    }

    public ArrayList<main.java.com.campeonatos.models.Rodada> getRodadas() {
        return this.rodadas;
    }
}
