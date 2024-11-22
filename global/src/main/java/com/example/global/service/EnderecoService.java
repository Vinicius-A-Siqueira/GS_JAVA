package com.example.global.service;

import com.example.global.model.Endereco;
import com.example.global.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnderecoService {

    @Autowired
    private EnderecoRepository enderecoRepository;

    public Endereco salvarEndereco(Endereco endereco) {
        if (endereco.validarCep()) {
            return enderecoRepository.save(endereco);
        } else {
            throw new IllegalArgumentException("CEP inválido!");
        }
    }

    public Endereco atualizarEndereco(Long id, Endereco endereco) {
        endereco.setIdEndereco(id);
        return enderecoRepository.save(endereco);
    }

    public void deletarEndereco(Long id) {
        enderecoRepository.deleteById(id);
    }

    public Endereco buscarEnderecoPorId(Long id) {
        return enderecoRepository.findById(id).orElse(null);
    }
}
