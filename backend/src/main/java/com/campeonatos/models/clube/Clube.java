package com.campeonatos.models.clube;

import lombok.Getter;

@Getter
public class Clube implements Comparable<Clube>{
    private long id;
    private String nome;
    private int pontos;
    private int partidas;
    private int vitorias;
    private int empates;
    private int derrotas;
    private int golsPro;
    private int golsContra;
    private int saldoGols;

    public Clube(long id, String nome){
        this.id = id;
        this.nome = nome;
        this.pontos = 0;
        this.partidas = 0;
        this.vitorias = 0;
        this.empates = 0;
        this.derrotas = 0;
        this.golsPro = 0;
        this.golsContra = 0;
        this.saldoGols = 0;
    }

    public Clube(long id, String nome, int pontos, int partidas, int vitorias, int empates, int derrotas, int golsPro, int golsContra, int saldoGols){
        this.id = id;
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

    @Override
    public int compareTo(Clube clube){
        return this.porPontos(clube);
    }
    
    public int porPontos(Clube clube){
        if(this.getPontos() > clube.getPontos()){
            return -1;
        } else if(this.getPontos() < clube.getPontos()){
            return 1;
        } else {
            return this.porVitorias(clube);
        }
    }
    
    public int porVitorias(Clube clube){
        if(this.getVitorias() > clube.getVitorias()){
            return -1;
        } else if(this.getVitorias() < clube.getVitorias()){
            return 1;
        } else {
            return this.porSaldo(clube);
        }
    }
    
    public int porSaldo(Clube clube){
        if(this.getSaldoGols() > clube.getSaldoGols()){
            return -1;
        } else if(this.getSaldoGols() < clube.getSaldoGols()){
            return 1;
        } else {
            return this.porGp(clube);
        }
    }
    
    public int porGp(Clube clube){
        if(this.getGolsPro() > clube.getGolsPro()){
            return -1;
        } else if(this.getGolsPro() < clube.getGolsPro()){
            return 1;
        } else {
            return this.porEmpates(clube);
        }
    }
    
    public int porEmpates(Clube clube){
        if(this.getEmpates() > clube.getEmpates()){
            return -1;
        } else if(this.getEmpates() < clube.getEmpates()){
            return 1;
        } else {
            return this.porPartidas(clube);
        }
    }
    
    public int porPartidas(Clube clube){
        if(this.getPartidas() > clube.getPartidas()){
            return -1;
        } else if(this.getPartidas() < clube.getPartidas()){
            return 1;
        } else {
            return this.porGc(clube);
        }    
    }
    
    public int porGc(Clube clube){
        if(this.getGolsContra() > clube.getGolsContra()){
            return -1;
        } else if(this.getGolsContra() < clube.getGolsContra()){
            return 1;
        } else {
            return this.porDerrotas(clube);
        }
    }
    
    public int porDerrotas(Clube clube){
        if(this.getDerrotas() > clube.getDerrotas()){
            return -1;
        } else if(this.getDerrotas() < clube.getDerrotas()){
            return 1;
        } else {
            return 0;
        }
    }
}
