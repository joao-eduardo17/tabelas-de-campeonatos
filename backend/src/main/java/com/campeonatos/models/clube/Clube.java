package com.campeonatos.models.clube;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

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
    private LocalDate dataCriacao;
    @Setter
    private String imagem;

    public Clube(ClubeRequest clube){
        this.nome = clube.nome();
        this.dataCriacao = clube.dataCriacao();
        this.imagem = clube.imagem();
    }

}
