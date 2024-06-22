package com.campeonatos.controllers;

import com.campeonatos.models.Perfil;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("perfil")
public class PerfilController {
    private ArrayList<Perfil> perfis = new ArrayList<>();

    public PerfilController(ArrayList<Perfil> perfis) {
        this.perfis = perfis;
    }

    @PostMapping
    public void adicionaPerfil(@RequestBody Perfil perfil) {
        this.perfis.add(perfil);
    }

    @GetMapping
    public ArrayList<Perfil> getPerfis() {
        return perfis;
    }
}
