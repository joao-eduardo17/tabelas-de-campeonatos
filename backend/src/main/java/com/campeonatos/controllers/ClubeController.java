package com.campeonatos.controllers;

import java.util.ArrayList;

import com.campeonatos.models.Clube;

public class ClubeController {
    private ArrayList<Clube> clubes;

    public ClubeController(ArrayList<Clube> clubes){
        this.clubes = clubes;
    }

    public void adicionaClube(Clube clube) {
        this.clubes.add(clube);
    }
    
    public ArrayList<Clube> getClubes() {
        return clubes;
    }
}
