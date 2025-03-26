package com.campeonatos.models.usuario;

public enum UserRole {
    ADMIN("ADMIN"),
    USER("USER");

    private String cargo;

    UserRole(String cargo) {
        this.cargo = cargo;
    }

    public String getCargo() {
        return cargo;
    }
}
