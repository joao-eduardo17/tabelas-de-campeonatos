package com.campeonatos.models.clube;

import jakarta.persistence.*;
import lombok.*;

import java.util.Calendar;

@Table(name = "clubes")
@Entity(name = "clubes")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@EqualsAndHashCode(of = "id")
public class Clube {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Setter
    private String nome;
    @Setter
    private Calendar dataCriacao;
    @Setter
    private String imagem;
    @Setter
    private long campeonatoId;

    public Clube(ClubeRequest clube){
        this.nome = clube.nome();
        this.dataCriacao = clube.dataCriacao();
        this.imagem = clube.imagem();
        this.campeonatoId = clube.campeonatoId();
    }

}
