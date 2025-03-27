package com.campeonatos.views.clubesCampRodada;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "vw_clubes_camp_rodada")
@Entity(name = "vw_clubes_camp_rodada")
@IdClass(ClubeRodadaId.class)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@EqualsAndHashCode(of = "id")
public class ClubesCampRodada {
    @Id
    private long id;
    @Id
    private long rodadaId;
    @Setter
    private String nome;
    @Setter
    private long campeonatoId;

    public ClubesCampRodada(ClubesCampRodadaRequest clubesCampRodada) {
        this.nome = clubesCampRodada.nome();
        this.campeonatoId = clubesCampRodada.campeonatoId();
    }
}
