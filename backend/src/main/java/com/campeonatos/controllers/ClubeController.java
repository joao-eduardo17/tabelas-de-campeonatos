package com.campeonatos.controllers;

import java.util.ArrayList;

import com.campeonatos.models.Clube;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("clube")
public class ClubeController {
    private ArrayList<Clube> clubes;

    public ClubeController(ArrayList<Clube> clubes){
        this.clubes = clubes;
    }

    @PostMapping
    public void adicionaClube(@RequestBody Clube clube) {
        this.clubes.add(clube);
    }

    @GetMapping
    public ArrayList<Clube> getClubes() {
        return clubes;
    }
}
