package com.campeonatos.models.estatistica;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "estatisticas")
@Entity(name = "estatisticas")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@EqualsAndHashCode(of = "id")
public class Estatistica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
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
    @Setter
    private long clubeId;

    public Estatistica(EstatisticaRequest estatistica) {
        this.pontos = estatistica.pontos();
        this.partidas = estatistica.partidas();
        this.vitorias = estatistica.vitorias();
        this.empates = estatistica.empates();
        this.derrotas = estatistica.derrotas();
        this.golsPro = estatistica.golsPro();
        this.golsContra = estatistica.golsContra();
        this.saldoGols = estatistica.saldoGols();
        this.campeonatoId = estatistica.campeonatoId();
        this.clubeId = estatistica.clubeId();
    }
}
