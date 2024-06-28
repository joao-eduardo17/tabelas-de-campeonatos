package com.campeonatos.controllers;

import java.util.ArrayList;
import java.util.Collections;

import com.campeonatos.models.clube.Clube;

public class Ordenador {
    public ArrayList<Clube> ordena(ArrayList<Clube> clubes){
        Collections.sort(clubes);
        return clubes;
    }
}
