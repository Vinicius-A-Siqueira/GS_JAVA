package com.example.global.model;

import javax.persistence.*;

@Entity
public class Telefone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTelefone;

    private String nrDdi;
    private String nrDdd;
    private String nrTelefone;
    private String tpTelefone;
    private String stTelefone;

    @ManyToOne
    @JoinColumn(name = "tbl_usuariov1_id_usuario", nullable = false)
    private User user; // Relacionamento com a classe User

    // Construtores
    public Telefone() {
    }

    public Telefone(String nrDdi, String nrDdd, String nrTelefone, String tpTelefone, String stTelefone, User user) {
        this.nrDdi = nrDdi;
        this.nrDdd = nrDdd;
        this.nrTelefone = nrTelefone;
        this.tpTelefone = tpTelefone;
        this.stTelefone = stTelefone;
        this.user = user;
    }

    // Getters e Setters
    public Long getIdTelefone() {
        return idTelefone;
    }

    public void setIdTelefone(Long idTelefone) {
        this.idTelefone = idTelefone;
    }

    public String getNrDdi() {
        return nrDdi;
    }

    public void setNrDdi(String nrDdi) {
        this.nrDdi = nrDdi;
    }

    public String getNrDdd() {
        return nrDdd;
    }

    public void setNrDdd(String nrDdd) {
        this.nrDdd = nrDdd;
    }

    public String getNrTelefone() {
        return nrTelefone;
    }

    public void setNrTelefone(String nrTelefone) {
        this.nrTelefone = nrTelefone;
    }

    public String getTpTelefone() {
        return tpTelefone;
    }

    public void setTpTelefone(String tpTelefone) {
        this.tpTelefone = tpTelefone;
    }

    public String getStTelefone() {
        return stTelefone;
    }

    public void setStTelefone(String stTelefone) {
        this.stTelefone = stTelefone;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
