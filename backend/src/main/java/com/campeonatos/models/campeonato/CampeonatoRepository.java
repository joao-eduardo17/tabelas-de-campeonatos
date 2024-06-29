package com.campeonatos.models.campeonato;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CampeonatoRepository extends JpaRepository<Campeonato, Long> {
    List<Campeonato> findByPerfilId(Long perfilId);
}
