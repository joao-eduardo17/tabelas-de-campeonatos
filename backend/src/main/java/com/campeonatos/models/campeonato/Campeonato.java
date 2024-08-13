package com.campeonatos.models.campeonato;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "campeonatos")
@Entity(name = "campeonatos")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Campeonato {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Setter
    private String nome;
    @Setter
    private String tipo;
    @Setter
    private boolean finalizado;
    @Setter
    private long perfilId;

    public Campeonato(CampeonatoRequest campeonato) {
        this.nome = campeonato.nome();
        this.tipo = campeonato.tipo();
        this.finalizado = campeonato.finalizado();
        this.perfilId = campeonato.perfilId();
    }
}
