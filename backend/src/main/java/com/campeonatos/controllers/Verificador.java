//package com.campeonatos.controllers;
//
//public class Verificador {
//    private ArrayList<Rodada> rodadas;
//
//    public Verificador(ArrayList<Rodada> rodadas) {
//        this.rodadas = rodadas;
//    }
//
//    public boolean verificaPartidaRepetida(Partida partida) {
//        AtomicBoolean repetiu = new AtomicBoolean(false);
//        this.rodadas.forEach((rodada) -> {
//            rodada.getRodada().forEach((partida1) -> {
//                if(partida1.getCasa().equals(partida.getCasa()) && partida1.getFora().equals(partida.getFora())) {
//                    repetiu.set(true);
//                }
//            });
//        });
//        return repetiu.get();
//    }
//
//    public boolean verificaSeJogou(String nome) {
//        AtomicBoolean jogou = new AtomicBoolean(false);
//        this.rodadas.forEach((rodada) -> {
//            rodada.getRodada().forEach((partida) -> {
//                if(partida.getCasa().equals(nome) || partida.getFora().equals(nome)) {
//                    jogou.set(true);
//                }
//            });
//        });
//        return jogou.get();
//    }

//}
