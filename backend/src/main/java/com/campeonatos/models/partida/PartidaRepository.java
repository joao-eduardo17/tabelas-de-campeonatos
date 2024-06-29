package com.campeonatos.models.partida;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PartidaRepository extends JpaRepository<Partida, Long> {
    List<Partida> findByRodadaId(long rodadaId);
    List<Partida> findByClubeCasaIdOrClubeForaId(long clubeCasaId, long clubeForaId);
}
