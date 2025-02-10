package com.campeonatos.views.clubeEstatistica;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClubeEstatisticaRepository extends JpaRepository<ClubeEstatistica, Long> {
    List<ClubeEstatistica> findByCampeonatoId(Long campeonatoId);
}
