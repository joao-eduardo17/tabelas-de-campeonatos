package com.campeonatos;

import java.util.ArrayList;

import com.campeonatos.models.Clube;
import com.campeonatos.controllers.Ordenador;

public class Main {
    public static void main(String[] args) {
        ArrayList<Clube> clubes = new ArrayList<Clube>();
        clubes.add(new Clube("Corinthians", 100, 38, 31, 7, 0, 100, 5, 95));
        clubes.add(new Clube("Flamengo", 50, 38, 15, 5, 18, 40, 44, -4));
        clubes.add(new Clube("Palmeiras", 0, 38, 0, 0, 38, 0, 55, -55));
        clubes.add(new Clube("São Paulo", 50, 38, 15, 5, 18, 50, 45, 5));
        Ordenador ordenador = new Ordenador();
        ordenador.ordena(clubes);
        System.out.println(clubes.get(0).getNome());
        System.out.println(clubes.get(1).getNome());
        System.out.println(clubes.get(2).getNome());
        System.out.println(clubes.get(3).getNome());
    }
}