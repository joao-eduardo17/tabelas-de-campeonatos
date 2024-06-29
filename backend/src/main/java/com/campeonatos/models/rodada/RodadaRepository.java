package com.campeonatos.models.rodada;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RodadaRepository extends JpaRepository<Rodada, Long> {
    List<Rodada> findByCampeonatoId(long campeonatoId);
}
