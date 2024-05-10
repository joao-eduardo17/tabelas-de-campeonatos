package com.campeonatos.controllers;

import java.util.ArrayList;

import com.campeonatos.models.Clube;

public class Ordenador {
    public ArrayList<Clube> Ordena(ArrayList<Clube> clubes){
        clubes.sort(); //ver como funfa em java
    }

    public Number porPartida(Clube clubeA, Clube clubeB){
        if(clubeA.getPartidas() > clubeB.getPartidas()){
            return -1;
        } else if(clubeA.getPartidas() < clubeB.getPartidas()){
            return 1;
        } else {
            return 0;
        }
    }
    
    public Number porPontos(Clube clubeA, Clube clubeB){
        if(clubeA.getPontos() > clubeB.getPontos()){
            return -1;
        } else if(clubeA.getPontos() < clubeB.getPontos()){
            return 1;
        } else {
            return 0;
        }
    }
    
    public Number porVitorias(Clube clubeA, Clube clubeB){
        if(clubeA.getVitorias() > clubeB.getVitorias()){
            return -1;
        } else if(clubeA.getVitorias() < clubeB.getVitorias()){
            return 1;
        } else {
            return 0;
        }
    }
    
    public Number porEmpates(Clube clubeA, Clube clubeB){
        if(clubeA.getEmpates() > clubeB.getEmpates()){
            return -1;
        } else if(clubeA.getEmpates() < clubeB.getEmpates()){
            return 1;
        } else {
            return 0;
        }
    }
    
    public Number porDerrotas(Clube clubeA, Clube clubeB){
        if(clubeA.getDerrotas() > clubeB.getDerrotas()){
            return -1;
        } else if(clubeA.getDerrotas() < clubeB.getDerrotas()){
            return 1;
        } else {
            return 0;
        }
    }
    
    public Number porGp(Clube clubeA, Clube clubeB){
        if(clubeA.getGolsPro() > clubeB.getGolsPro()){
            return -1;
        } else if(clubeA.getGolsPro() < clubeB.getGolsPro()){
            return 1;
        } else {
            return 0;
        }
    }
    
    public Number porGc(Clube clubeA, Clube clubeB){
        if(clubeA.getGolsContra() > clubeB.getGolsContra()){
            return -1;
        } else if(clubeA.getGolsContra() < clubeB.getGolsContra()){
            return 1;
        } else {
            return 0;
        }
    }
    
    public Number porSaldo(Clube clubeA, Clube clubeB){
        if(clubeA.getSaldoGols() > clubeB.getSaldoGols()){
            return -1;
        } else if(clubeA.getSaldoGols() < clubeB.getSaldoGols()){
            return 1;
        } else {
            return 0;
        }
    }
}
