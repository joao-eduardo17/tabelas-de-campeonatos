package com.campeonatos.views.clubesCampRodada;

import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;
import java.util.Objects;

@AllArgsConstructor
@NoArgsConstructor
@Embeddable
@Getter
@Setter
public class ClubeRodadaId implements Serializable {
    private long id;
    private long rodadaId;

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        ClubeRodadaId that = (ClubeRodadaId) object;
        return Objects.equals(id, that.id) && Objects.equals(rodadaId, that.rodadaId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, rodadaId);
    }
}
