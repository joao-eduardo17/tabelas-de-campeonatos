package com.campeonatos.models.clube;

import java.util.Calendar;

public record ClubeRequest(long id, String nome, Calendar dataCriacao, String imagem, long campeonatoId) {
}
