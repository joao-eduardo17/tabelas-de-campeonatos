package com.campeonatos.views.clubesCampRodada;

import com.campeonatos.views.clubeEstatistica.ClubeEstatisticaResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("clubesRodada")
public class ClubesCampRodadaController {
    @Autowired
    private ClubesCampRodadaRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/clubes")
    public List<ClubesCampRodadaResponse> getClubesRodada() {
        List<ClubesCampRodadaResponse> clubesRodada = repository.findAll().stream().map(ClubesCampRodadaResponse::new).toList();
        return clubesRodada;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/rodadaId/{id}")
    public List<ClubesCampRodadaResponse> getClubesRodadaByRodadaId(@PathVariable("id") long rodadaId) {
        List<ClubesCampRodadaResponse> clubesRodada = repository.findByRodadaId(rodadaId);
        return clubesRodada;
    }
}
