package com.campeonatos.models.rodada;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "rodadas")
@Entity(name = "rodadas")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Rodada {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Setter
    private int numero;
    @Setter
    private long campeonatoId;

    public Rodada(RodadaRequest rodada) {
        this.numero = rodada.numero();
        this.campeonatoId = rodada.campeonatoId();
    }
}
