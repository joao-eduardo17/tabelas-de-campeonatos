package com.campeonatos.models;

public class Clube {
    private String nome;
    private int pontos;
    private int partidas;
    private int vitorias;
    private int empates;
    private int derrotas;
    private int golsPro;
    private int golsContra;
    private int saldoGols;

    public Clube(String nome, int pontos, int partidas, int vitorias, int empates, int derrotas, int golsPro, int golsContra, int saldoGols){
        this.nome = nome;
        this.pontos = pontos;
        this.partidas = partidas;
        this.vitorias = vitorias;
        this.empates = empates;
        this.derrotas = derrotas;
        this.golsPro = golsPro;
        this.golsContra = golsContra;
        this.saldoGols = saldoGols;
    }

    public String getNome() {
        return this.nome;
    }

    public int getPontos() {
        return this.pontos;
    }

    public int getPartidas() {
        return this.partidas;
    }
    
    public int getVitorias() {
        return this.vitorias;
    }
 
    public int getEmpates() {
        return this.empates;
    }
 
    public int getDerrotas() {
        return this.derrotas;
    }
 
    public int getGolsPro() {
        return this.golsPro;
    }
 
    public int getGolsContra() {
        return this.golsContra;
    }
 
    public int getSaldoGols() {
        return this.saldoGols;
    }

}
