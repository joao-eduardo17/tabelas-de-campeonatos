package com.campeonatos.controllers;

import com.campeonatos.models.Rodada;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("rodada")
public class RodadaController {
    private ArrayList<Rodada> rodadas;

    public RodadaController(ArrayList<Rodada> rodadas) {
        this.rodadas = rodadas;
    }

    @PostMapping
    public void adicionaRodada(@RequestBody Rodada rodada) {
        this.rodadas.add(rodada);
    }

    @GetMapping
    public ArrayList<Rodada> getRodadas() {
        return this.rodadas;
    }
}
