package com.campeonatos.controllers;

import java.util.ArrayList;

import com.campeonatos.models.Partida;

import main.java.com.campeonatos.models.Rodada;

public class Verificador {
    private ArrayList<Rodada> rodadas;

    public Verificador(ArrayList<Rodada> rodadas) {
        this.rodadas = rodadas;
    }

    public boolean verificaPartidaRepetida(Partida partida) {
        Boolean repetiu = false;
        this.rodadas.forEach((rodada) -> {
            rodada.getRodada().forEach((partida1) -> {
                if(partida1.getCasa().equals(partida.getCasa()) && partida1.getFora().equals(partida.getFora())) {
                    repetiu.set(true);
                }
            });
        });
        return repetiu.getBoolean();
    }

    public boolean verificaSeJogou(String nome) {
        Boolean jogou = false;
        this.rodadas.forEach((rodada) -> {
            rodada.getRodada().forEach((partida) -> {
                if(partida.getCasa().equals(nome) || partida.getFora().equals(nome)) {
                    jogou.set(true);
                }
            });
        });
        return jogou.getBoolean();
    }

}
