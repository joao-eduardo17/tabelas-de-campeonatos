package main.java.com.campeonatos.models;

import java.util.ArrayList;

import com.campeonatos.models.Partida;

public class Rodada {
    private ArrayList<Partida> rodada;

    public Rodada(ArrayList<Partida> rodada) {
        this.rodada = rodada;
    }

    public ArrayList<Partida> getRodada() {
        return this.rodada;
    }
    // public 
//         cria Rodada
//         get Rodada = get partidas
//     rodada = lista partidas    
}
