package com.campeonatos.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

import com.campeonatos.models.Clube;

public class Ordenador {
    public ArrayList<Clube> ordena(ArrayList<Clube> clubes){
        Collections.sort(clubes);
        return clubes;
    }
}
