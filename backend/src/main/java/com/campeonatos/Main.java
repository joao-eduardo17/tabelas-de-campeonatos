package com.campeonatos;

import java.util.ArrayList;

import com.campeonatos.models.Clube;
import com.campeonatos.models.Partida;

import main.java.com.campeonatos.models.Rodada;

import com.campeonatos.controllers.Ordenador;
import com.campeonatos.controllers.Verificador;

public class Main {
    public static void main(String[] args) {
        ArrayList<Clube> clubes = new ArrayList<Clube>();
        clubes.add(new Clube("Corinthians", 100, 38, 31, 7, 0, 100, 5, 95));
        clubes.add(new Clube("Flamengo", 50, 38, 15, 5, 18, 40, 44, -4));
        clubes.add(new Clube("Palmeiras", 0, 38, 0, 0, 38, 0, 55, -55));
        clubes.add(new Clube("São Paulo", 50, 38, 15, 5, 18, 50, 45, 5));
        Ordenador ordenador = new Ordenador();
        ArrayList<Partida> partidas1 = new ArrayList<Partida>();
        ArrayList<Partida> partidas2 = new ArrayList<Partida>();
        Partida partida1 = new Partida("Corinthians", "Palmeiras", "7X1");
        Partida partida2 = new Partida("Vasco", "Flamengo", "5X0");
        Partida partida3 = new Partida("Corinthians", "Flamengo", "7X1");
        Partida partida4 = new Partida("Vasco", "Palmeiras", "5X0");
        partidas1.add(partida1);
        partidas1.add(partida2);
        partidas2.add(partida3);
        partidas2.add(partida4);
        Rodada rodada1 = new Rodada(partidas1);
        Rodada rodada2 = new Rodada(partidas2);
        ArrayList<Rodada> rodadas = new ArrayList<Rodada>();
        rodadas.add(rodada1);
        rodadas.add(rodada2);
        Verificador verificador = new Verificador(rodadas);
        verificador.verificaSeJogou("Corinthians");
        verificador.verificaSeJogou("Vasco");
        verificador.verificaSeJogou("Santos");
        verificador.verificaPartidaRepetida(partida4);
        verificador.verificaPartidaRepetida(new Partida("Flamengo", "Corinthians", "0X1"));
        ordenador.ordena(clubes);
        System.out.println(clubes.get(0).getNome());
        System.out.println(clubes.get(1).getNome());
        System.out.println(clubes.get(2).getNome());
        System.out.println(clubes.get(3).getNome());
    }
}