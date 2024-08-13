package com.campeonatos.controllers;

import java.util.List;

import com.campeonatos.models.partida.Partida;
import com.campeonatos.models.partida.PartidaRepository;
import com.campeonatos.models.partida.PartidaRequest;
import com.campeonatos.models.partida.PartidaResponse;
import com.campeonatos.models.perfil.Perfil;
import com.campeonatos.models.perfil.PerfilRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PartidaController {
    @Autowired
    private PartidaRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/partida")
    public void adicionaPartida(@RequestBody PartidaRequest partida) {
        Partida partidaData = new Partida(partida);
        repository.save(partidaData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/partidas")
    public List<PartidaResponse> getPartidas() {
        List<PartidaResponse> partidas = repository.findAll().stream().map(PartidaResponse::new).toList();
        return partidas;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/partidaByRodadaId/{id}")
    public List<PartidaResponse> getPartidasByRodadaId(@PathVariable("id") long rodadaId) {
        List<PartidaResponse> partidas = repository.findByRodadaId(rodadaId).stream().map(PartidaResponse::new).toList();
        return partidas;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/partidaByClubesId/{id}")
    public List<PartidaResponse> getPartidasByClubesId(@PathVariable("id") long clubesId) {
        List<PartidaResponse> partidas = repository.findByClubeCasaIdOrClubeForaId(clubesId, clubesId).stream().map(PartidaResponse::new).toList();
        return partidas;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/partida/{id}")
    public void alteraPartida(@RequestBody PartidaRequest partida, @PathVariable("id") long partidaId) {
        Partida partidaData = repository.findById(partidaId).get();
        partidaData.setPlacarCasa(partida.placarCasa());
        partidaData.setPlacarFora(partida.placarFora());
        partidaData.setRodadaId(partida.rodadaId());
        partidaData.setClubeCasaId(partida.clubeCasaId());
        partidaData.setClubeForaId(partida.clubeForaId());

        repository.save(partidaData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/partida/{id}")
    public void apagaPartida(@PathVariable("id") long partidaId) {
        repository.deleteById(partidaId);
    }
}
