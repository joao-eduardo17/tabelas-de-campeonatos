package com.campeonatos.views.clubeEstatistica;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("tabela")
public class ClubeEstatisticaController {
    @Autowired
    private
    ClubeEstatisticaRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/tabelas")
    public List<ClubeEstatisticaResponse> getClubeEstatisticas() {
        List<ClubeEstatisticaResponse> tabelas = repository.findAll().stream().map(ClubeEstatisticaResponse::new).toList();
        return tabelas;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/tabelaByCampeonatoId/{id}")
    public List<ClubeEstatisticaResponse> getClubeEstatisticaByCampeonatoId(@PathVariable("id") long campeonatoId) {
        List<ClubeEstatisticaResponse> tabelas = repository.findByCampeonatoId(campeonatoId).stream().map(ClubeEstatisticaResponse::new).toList();
        return tabelas;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/tabelaId/{id}")
    public ClubeEstatistica getClubeEstatistica(@PathVariable("id") long clubeEstatisticaId) {
        ClubeEstatistica tabela = repository.findById(clubeEstatisticaId).get();
        return tabela;
    }
}
