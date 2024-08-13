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
    private int placarCasa;
    @Setter
    private int placarFora;
    @Setter
    private long rodadaId;
    @Setter
    private long clubeCasaId;
    @Setter
    private long clubeForaId;

    public Partida(PartidaRequest partida){
        this.placarCasa = partida.placarCasa();
        this.placarFora = partida.placarFora();
        this.rodadaId = partida.rodadaId();
        this.clubeCasaId = partida.clubeCasaId();
        this.clubeForaId = partida.clubeForaId();
    }
}
