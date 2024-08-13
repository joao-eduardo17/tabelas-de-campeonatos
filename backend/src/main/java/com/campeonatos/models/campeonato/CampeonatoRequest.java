package com.campeonatos.models.campeonato;

public record CampeonatoRequest(String nome, String tipo, boolean finalizado, long perfilId) {
}
