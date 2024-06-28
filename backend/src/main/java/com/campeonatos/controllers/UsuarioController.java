package com.campeonatos.controllers;

import com.campeonatos.models.usuario.Usuario;
import com.campeonatos.models.usuario.UsuarioRepository;
import com.campeonatos.models.usuario.UsuarioRequest;
import com.campeonatos.models.usuario.UsuarioResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuarioController {
    @Autowired
    private UsuarioRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/usuario")
    public void adicionaUsuario(@RequestBody UsuarioRequest usuario) {
        Usuario usuarioData = new Usuario(usuario);
        repository.save(usuarioData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/usuarios")
    public List<UsuarioResponse> listaUsuarios() {
        List<UsuarioResponse> usuarios = repository.findAll().stream().map(UsuarioResponse::new).toList();
        return usuarios;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/usuario/{id}")
    public void alteraUsuario(@RequestBody UsuarioRequest usuario, @PathVariable("id") long usuarioId) {
        Usuario usuarioData = repository.findById(usuarioId).get();
        usuarioData.setNome(usuario.nome());
        usuarioData.setEmail(usuario.email());
        usuarioData.setSenha(usuario.senha());

        repository.save(usuarioData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/usuario/{id}")
    public void apagaUsuario(@PathVariable("id") long usuarioId) {
        repository.deleteById(usuarioId);
    }
}
