package com.campeonatos.controllers;

import com.campeonatos.models.rodada.Rodada;
import com.campeonatos.models.rodada.RodadaRepository;
import com.campeonatos.models.rodada.RodadaRequest;
import com.campeonatos.models.rodada.RodadaResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RodadaController {
    @Autowired
    private RodadaRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/rodada")
    public void adicionaRodada(@RequestBody RodadaRequest rodada) {
        Rodada rodadaData = new Rodada(rodada);
        repository.save(rodadaData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/rodadas")
    public List<RodadaResponse> getRodadas() {
        List<RodadaResponse> rodadas = repository.findAll().stream().map(RodadaResponse::new).toList();
        return rodadas;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/rodadaByCampeonatoId/{id}")
    public List<RodadaResponse> getRodadasByCampeonatoId(@PathVariable("id") long campeonatoId) {
        List<RodadaResponse> rodadas = repository.findByCampeonatoId(campeonatoId).stream().map(RodadaResponse::new).toList();
        return rodadas;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/rodadaId/{id}")
    public Rodada getRodada(@PathVariable("id") long rodadaId) {
        Rodada rodada = repository.findById(rodadaId).get();
        return rodada;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/rodada/{id}")
    public void alteraRodada(@RequestBody RodadaRequest rodada, @PathVariable("id") long campeonatoId) {
        Rodada rodadaData = repository.findById(campeonatoId).get();
        rodadaData.setNumero(rodada.numero());
        rodadaData.setCampeonatoId(rodada.campeonatoId());

        repository.save(rodadaData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/rodada/{id}")
    public void apagaRodada(@PathVariable("id") long campeonatoId) {
        repository.deleteById(campeonatoId);
    }
}
