package com.campeonatos.controllers;

import com.campeonatos.models.Campeonato;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("campeonato")
public class CampeonatoController {
    private ArrayList<Campeonato> campeonatos = new ArrayList<>();

    public CampeonatoController(ArrayList<Campeonato> campeonatos) {
        this.campeonatos = campeonatos;
    }

    @PostMapping
    public void adicionaCampeonato(@RequestBody Campeonato campeonato) {
        this.campeonatos.add(campeonato);
    }

    @GetMapping
    public ArrayList<Campeonato> getCampeonatos() {
        return campeonatos;
    }
}
