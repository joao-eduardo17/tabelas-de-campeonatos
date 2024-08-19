package com.campeonatos.models.usuario;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    List<Usuario> findByNomeOrEmail(String nome, String email);
}
