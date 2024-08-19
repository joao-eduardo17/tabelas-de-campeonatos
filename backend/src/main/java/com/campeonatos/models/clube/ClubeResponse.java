package com.campeonatos.models.clube;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Calendar;

public record ClubeResponse(long id, String nome, LocalDate dataCriacao, String imagem) {
    public ClubeResponse(Clube clube){
        this(clube.getId(), clube.getNome(), clube.getDataCriacao(), clube.getImagem());
    }
}
