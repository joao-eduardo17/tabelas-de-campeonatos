package com.campeonatos;

import java.lang.reflect.Array;
import java.util.ArrayList;

import com.campeonatos.controllers.ClubeController;
import com.campeonatos.models.Clube;
import com.campeonatos.models.Partida;
import com.campeonatos.models.Rodada;

import com.campeonatos.controllers.Ordenador;
import com.campeonatos.controllers.Verificador;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CampeonatosApplication {
	public static void main(String[] args) {
		Clube clubeC = new Clube("Corithians");
		Clube clubeV = new Clube("Vasco");
		ArrayList<Clube> clubes = new ArrayList<>();
		clubes.add(clubeC);
		clubes.add(clubeV);
		ClubeController clubeController = new ClubeController(clubes);
		System.out.println(clubeController.getClubes());
		SpringApplication.run(CampeonatosApplication.class, args);
	}
}
