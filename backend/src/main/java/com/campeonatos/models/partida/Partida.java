package com.campeonatos.models.partida;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "partidas")
@Entity(name = "partidas")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@EqualsAndHashCode(of = "id")
public class Partida {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Setter
    private String casa;
    @Setter
    private String fora;
    @Setter
    private String placar;
    @Setter
    private long rodadaId;
    @Setter
    private long clubeCasaId;
    @Setter
    private long clubeForaId;

    public Partida(PartidaRequest partida){
        this.casa = partida.casa();
        this.fora = partida.fora();
        this.placar = partida.placar();
        this.rodadaId = partida.rodadaId();
        this.clubeCasaId = partida.clubeCasaId();
        this.clubeForaId = partida.clubeForaId();
    }
}
