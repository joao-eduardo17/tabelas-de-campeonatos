package com.campeonatos.controllers;

import com.campeonatos.models.perfil.Perfil;
import com.campeonatos.models.perfil.PerfilRepository;
import com.campeonatos.models.perfil.PerfilRequest;
import com.campeonatos.models.perfil.PerfilResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PerfilController {
    @Autowired
    private PerfilRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/perfil")
    public void adicionaPerfil(@RequestBody PerfilRequest perfil) {
        Perfil perfilData = new Perfil(perfil);
        repository.save(perfilData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/perfis")
    public List<PerfilResponse> getPerfis() {
        List<PerfilResponse> perfis = repository.findAll().stream().map(PerfilResponse::new).toList();
        return perfis;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/perfil/{id}")
    public void alteraPerfil(@RequestBody PerfilRequest perfil, @PathVariable("id") long perfilId) {
        Perfil perfilData = repository.findById(perfilId).get();
        perfilData.setNome(perfil.nome());
        perfilData.setUsuarioId(perfil.usuarioId());

        repository.save(perfilData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/perfil/{id}")
    public void apagaPerfil(@PathVariable("id") long perfilId) {
        repository.deleteById(perfilId);
    }
}
