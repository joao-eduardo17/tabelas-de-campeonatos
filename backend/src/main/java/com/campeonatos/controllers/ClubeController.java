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
    @GetMapping("/clubeByCampeonatoId/{id}")
    public List<ClubeResponse> getClubesByCampeonatoId(@PathVariable("id") long campeonatoId) {
        List<ClubeResponse> clubes = repository.findByCampeonatoId(campeonatoId).stream().map(ClubeResponse::new).toList();
        return clubes;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/clube/{id}")
    public void alteraClube(@RequestBody ClubeRequest clube, @PathVariable("id") long clubeId) {
        Clube clubeData = repository.findById(clubeId).get();
        clubeData.setNome(clube.nome());
        clubeData.setPontos(clube.pontos());
        clubeData.setPartidas(clube.partidas());
        clubeData.setVitorias(clube.vitorias());
        clubeData.setEmpates(clube.empates());
        clubeData.setDerrotas(clube.derrotas());
        clubeData.setGolsPro(clube.golsPro());
        clubeData.setGolsContra(clube.golsContra());
        clubeData.setSaldoGols(clube.saldoGols());
        clubeData.setCampeonatoId(clube.campeonatoId());

        repository.save(clubeData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/clube/{id}")
    public void apagaClube(@PathVariable("id") long clubeId) {
        repository.deleteById(clubeId);
    }
}
