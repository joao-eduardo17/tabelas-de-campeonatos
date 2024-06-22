package com.campeonatos.controllers;

import java.util.ArrayList;

import com.campeonatos.models.Partida;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("partida")
public class PartidaController {
    private ArrayList<Partida> partidas;

    public PartidaController(ArrayList<Partida> partidas) {
        this.partidas = partidas;
    }

    @PostMapping
    public void adicionaPartida(@RequestBody Partida partida) {
        this.partidas.add(partida);
    }

    @GetMapping
    public ArrayList<Partida> getPartidas() {
        return this.partidas;
    }
}
