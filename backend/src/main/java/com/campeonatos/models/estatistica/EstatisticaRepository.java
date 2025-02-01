package com.campeonatos.models.estatistica;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EstatisticaRepository extends JpaRepository<Estatistica, Long> {
    List<Estatistica> findByCampeonatoId(Long campeonatoId);
    List<Estatistica> findByClubeId(Long clubeId);
}
