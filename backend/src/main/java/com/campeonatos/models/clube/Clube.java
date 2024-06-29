package com.campeonatos.models.clube;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "clubes")
@Entity(name = "clubes")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@EqualsAndHashCode(of = "id")
public class Clube implements Comparable<Clube>{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Setter
    private String nome;
    @Setter
    private int pontos;
    @Setter
    private int partidas;
    @Setter
    private int vitorias;
    @Setter
    private int empates;
    @Setter
    private int derrotas;
    @Setter
    private int golsPro;
    @Setter
    private int golsContra;
    @Setter
    private int saldoGols;
    @Setter
    private long campeonatoId;

    public Clube(ClubeRequest clube){
        this.nome = clube.nome();
        this.pontos = clube.pontos();
        this.partidas = clube.partidas();
        this.vitorias = clube.vitorias();
        this.empates = clube.empates();
        this.derrotas = clube.derrotas();
        this.golsPro = clube.golsPro();
        this.golsContra = clube.golsContra();
        this.saldoGols = clube.saldoGols();
        this.campeonatoId = clube.campeonatoId();
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
