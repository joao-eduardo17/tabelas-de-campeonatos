package com.campeonatos.models.perfil;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PerfilRepository extends JpaRepository<Perfil, Long> {
    List<Perfil> findByUsuarioId(Long usuarioId);
}
