package com.campeonatos.controllers;

import com.campeonatos.models.Usuario;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("usuario")
public class UsuarioController {
    private ArrayList<Usuario> usuarios = new ArrayList<>();

    public UsuarioController(ArrayList<Usuario> usuarios) {
        this.usuarios = usuarios;
    }

    @PostMapping
    public void adicionaUsuario(@RequestBody Usuario usuario) {
        this.usuarios.add(usuario);
    }

    @GetMapping
    public ArrayList<Usuario> getUsuarios() {
        return usuarios;
    }
}
