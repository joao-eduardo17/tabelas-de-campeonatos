package com.campeonatos.views.clubeEstatistica;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "vw_clube_estatistica")
@Entity(name = "vw_clube_estatistica")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@EqualsAndHashCode(of = "id")
public class ClubeEstatistica {
    @Id
    private long id;
    @Setter
    private String nome;
    @Setter
    private String imagem;
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

    public ClubeEstatistica(ClubeEstatisticaRequest clubeEstatistica) {
        this.nome = clubeEstatistica.nome();
        this.imagem = clubeEstatistica.imagem();
        this.pontos = clubeEstatistica.pontos();
        this.partidas = clubeEstatistica.partidas();
        this.vitorias = clubeEstatistica.vitorias();
        this.empates = clubeEstatistica.empates();
        this.derrotas = clubeEstatistica.derrotas();
        this.golsPro = clubeEstatistica.golsPro();
        this.golsContra = clubeEstatistica.golsContra();
        this.saldoGols = clubeEstatistica.saldoGols();
        this.campeonatoId = clubeEstatistica.campeonatoId();
    }
}
