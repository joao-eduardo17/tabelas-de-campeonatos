package com.campeonatos.models.clube;

import java.util.Calendar;

public record ClubeResponse(long id, String nome, Calendar dataCriacao, String imagem, long campeonatoId) {
    public ClubeResponse(Clube clube){
        this(clube.getId(), clube.getNome(), clube.getDataCriacao(), clube.getImagem(), clube.getCampeonatoId());
    }
}
