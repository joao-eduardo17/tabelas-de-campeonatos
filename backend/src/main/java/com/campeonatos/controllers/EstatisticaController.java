package com.campeonatos.controllers;

import com.campeonatos.models.estatistica.Estatistica;
import com.campeonatos.models.estatistica.EstatisticaRepository;
import com.campeonatos.models.estatistica.EstatisticaRequest;
import com.campeonatos.models.estatistica.EstatisticaResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("estatistica")
public class EstatisticaController {
    @Autowired
    private EstatisticaRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/estatistica")
    public long adicionaEstatistica(@RequestBody EstatisticaRequest estatistica) {
        Estatistica estatisticaData = new Estatistica(estatistica);
        repository.save(estatisticaData);
        return estatisticaData.getId();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/estatisticas")
    public List<EstatisticaResponse> getEstatisticas() {
        List<EstatisticaResponse> estatisticas = repository.findAll().stream().map(EstatisticaResponse::new).toList();
        return estatisticas;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/estatisticaByCampeonatoId/{id}")
    public List<EstatisticaResponse> getEstatisticaByCampeonatoId(@PathVariable("id") long campeonatoId) {
        List<EstatisticaResponse> estatisticas = repository.findByCampeonatoId(campeonatoId).stream().map(EstatisticaResponse::new).toList();
        return estatisticas;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/estatisticaByClubeId/{id}")
    public List<EstatisticaResponse> getEstatisticaByClubeId(@PathVariable("id") long clubeId) {
        List<EstatisticaResponse> estatisticas = repository.findByClubeId(clubeId).stream().map(EstatisticaResponse::new).toList();
        return estatisticas;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/estatisticaId/{id}")
    public Estatistica getEstatistica(@PathVariable("id") long estatisticaId) {
        Estatistica estatistica = repository.findById(estatisticaId).get();
        return estatistica;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/estatistica/{id}")
    public void alteraEstatistica(@RequestBody EstatisticaRequest estatistica, @PathVariable("id") long estatisticaId) {
        Estatistica estatisticaData = repository.findById(estatisticaId).get();
        estatisticaData.setPontos(estatistica.pontos());
        estatisticaData.setPartidas(estatistica.partidas());
        estatisticaData.setVitorias(estatistica.vitorias());
        estatisticaData.setEmpates(estatistica.empates());
        estatisticaData.setDerrotas(estatistica.derrotas());
        estatisticaData.setGolsPro(estatistica.golsPro());
        estatisticaData.setGolsContra(estatistica.golsContra());
        estatisticaData.setSaldoGols(estatistica.saldoGols());
        estatisticaData.setCampeonatoId(estatistica.campeonatoId());
        estatisticaData.setClubeId(estatistica.clubeId());
        repository.save(estatisticaData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/estatistica/{id}")
    public void apagaEstatistica(@PathVariable("id") long estatisticaId) {repository.deleteById(estatisticaId); }
}
