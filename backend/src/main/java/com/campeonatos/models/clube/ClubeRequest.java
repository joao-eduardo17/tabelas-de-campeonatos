package com.campeonatos.models.clube;

import java.text.SimpleDateFormat;
import java.time.LocalDate;

public record ClubeRequest(long id, String nome, LocalDate dataCriacao, String imagem) {
}
