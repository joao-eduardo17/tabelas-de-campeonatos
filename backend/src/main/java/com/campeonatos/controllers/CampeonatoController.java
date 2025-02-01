package com.campeonatos.controllers;

import com.campeonatos.models.campeonato.Campeonato;
import com.campeonatos.models.campeonato.CampeonatoRepository;
import com.campeonatos.models.campeonato.CampeonatoRequest;
import com.campeonatos.models.campeonato.CampeonatoResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CampeonatoController {
    @Autowired
    private CampeonatoRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/campeonato")
    public void adicionaCampeonato(@RequestBody CampeonatoRequest campeonato) {
        Campeonato campeonatoData = new Campeonato(campeonato);
        repository.save(campeonatoData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/campeonatos")
    public List<CampeonatoResponse> getCampeonatos() {
        List<CampeonatoResponse> campeonatos = repository.findAll().stream().map(CampeonatoResponse::new).toList();
        return campeonatos;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/campeonatoByPerfilId/{id}")
    public List<CampeonatoResponse> getCampeonatosByPerfilId(@PathVariable("id") long perfilId) {
        List<CampeonatoResponse> campeonatos = repository.findByPerfilId(perfilId).stream().map(CampeonatoResponse::new).toList();
        return campeonatos;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/campeonatoId/{id}")
    public Campeonato getCampeonato(@PathVariable("id") long campeonatoId) {
        Campeonato campeonato = repository.findById(campeonatoId).get();
        return campeonato;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/campeonato/{id}")
    public void alteraCampeonato(@RequestBody CampeonatoRequest campeonato, @PathVariable("id") long campeonatoId) {
        Campeonato campeonatoData = repository.findById(campeonatoId).get();
        campeonatoData.setNome(campeonato.nome());
        campeonatoData.setTipo(campeonato.tipo());
        campeonatoData.setFinalizado(campeonato.finalizado()    );
        campeonatoData.setPerfilId(campeonato.perfilId());
        repository.save(campeonatoData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/campeonato/{id}")
    public void apagaCampeonato(@PathVariable("id") long campeonatoId) {
        repository.deleteById(campeonatoId);
    }
}
