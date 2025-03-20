package com.campeonatos.models.usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    List<Usuario> findByNomeOrEmail(String nome, String email);
    UserDetails findByEmail(String email);
    @Query("SELECT u.id FROM usuarios u WHERE u.email = :email")
    Long findIdByEmail(String email);
}
