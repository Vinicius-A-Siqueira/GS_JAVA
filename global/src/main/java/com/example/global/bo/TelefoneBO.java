package com.example.global.bo;

import com.example.global.model.Telefone;
import com.example.global.dao.TelefoneDAO;

public class TelefoneBO {

    private TelefoneDAO telefoneDAO;

    public TelefoneBO() {
        telefoneDAO = new TelefoneDAO();
    }

    // Método de lógica de negócio: Salvar telefone
    public void salvarTelefone(Telefone telefone) {
        if (telefone.validarTelefone()) {
            telefoneDAO.salvar(telefone);
        } else {
            throw new IllegalArgumentException("Número de telefone inválido!");
        }
    }

    // Método de lógica de negócio: Atualizar telefone
    public void atualizarTelefone(Telefone telefone) {
        if (telefone.validarTelefone()) {
            telefoneDAO.atualizar(telefone);
        } else {
            throw new IllegalArgumentException("Número de telefone inválido!");
        }
    }
}
