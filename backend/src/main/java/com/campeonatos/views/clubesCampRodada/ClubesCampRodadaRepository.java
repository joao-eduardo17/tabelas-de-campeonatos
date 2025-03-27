package com.campeonatos.views.clubesCampRodada;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClubesCampRodadaRepository extends JpaRepository<ClubesCampRodada, ClubeRodadaId> {
    //@Query("SELECT ccr.id, ccr.nome FROM vw_clubes_camp_rodada ccr WHERE ccr.rodada_id = :rodadaId")
    List<ClubesCampRodadaResponse> findByRodadaId(Long rodadaId);
}
