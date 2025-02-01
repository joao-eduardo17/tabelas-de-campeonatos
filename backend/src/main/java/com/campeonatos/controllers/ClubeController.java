package com.campeonatos.controllers;

import java.util.List;

import com.campeonatos.models.clube.Clube;
import com.campeonatos.models.clube.ClubeRepository;
import com.campeonatos.models.clube.ClubeRequest;
import com.campeonatos.models.clube.ClubeResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ClubeController {
    @Autowired
    private ClubeRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/clube")
    public void adicionaClube(@RequestBody ClubeRequest clube) {
        Clube clubeData = new Clube(clube);
        repository.save(clubeData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/clubes")
    public List<ClubeResponse> getClubes() {
        List<ClubeResponse> clubes = repository.findAll().stream().map(ClubeResponse::new).toList();
        return clubes;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/clubeId/{id}")
    public Clube getClube(@PathVariable("id") long clubeId) {
        Clube clube = repository.findById(clubeId).get();
        return clube;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/clube/{id}")
    public void alteraClube(@RequestBody ClubeRequest clube, @PathVariable("id") long clubeId) {
        Clube clubeData = repository.findById(clubeId).get();
        clubeData.setNome(clube.nome());
        clubeData.setDataCriacao(clube.dataCriacao());
        clubeData.setImagem(clube.imagem());

        repository.save(clubeData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/clube/{id}")
    public void apagaClube(@PathVariable("id") long clubeId) {
        repository.deleteById(clubeId);
    }
}
