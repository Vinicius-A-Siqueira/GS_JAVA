package com.example.global.bo;

import com.example.global.model.Endereco;
import com.example.global.dao.EnderecoDAO;

public class EnderecoBO {

    private EnderecoDAO enderecoDAO;

    public EnderecoBO() {
        enderecoDAO = new EnderecoDAO();
    }

    // Método de lógica de negócio: Salvar endereço
    public void salvarEndereco(Endereco endereco) {
        if (endereco.validarCep()) {
            enderecoDAO.salvar(endereco);
        } else {
            throw new IllegalArgumentException("CEP inválido!");
        }
    }

    // Método de lógica de negócio: Atualizar endereço
    public void atualizarEndereco(Endereco endereco) {
        if (endereco.validarCep()) {
            enderecoDAO.atualizar(endereco);
        } else {
            throw new IllegalArgumentException("CEP inválido!");
        }
    }
}
