package com.campeonatos.models.perfil;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "perfis")
@Entity(name = "perfis")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Perfil {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Setter
    private String nome;
    @Setter
    private long usuarioId;

    public Perfil(PerfilRequest perfil) {
        this.nome = perfil.nome();
        this.usuarioId = perfil.usuarioId();
    }
}
