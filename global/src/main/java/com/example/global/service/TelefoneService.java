package com.example.global.service;

import com.example.global.model.Telefone;
import com.example.global.repository.TelefoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TelefoneService {

    @Autowired
    private TelefoneRepository telefoneRepository;

    public Telefone salvarTelefone(Telefone telefone) {
        if (telefone.validarTelefone()) {
            return telefoneRepository.save(telefone);
        } else {
            throw new IllegalArgumentException("Número de telefone inválido!");
        }
    }

    public Telefone atualizarTelefone(Long id, Telefone telefone) {
        telefone.setIdTelefone(id);
        return telefoneRepository.save(telefone);
    }

    public void deletarTelefone(Long id) {
        telefoneRepository.deleteById(id);
    }

    public Telefone buscarTelefonePorId(Long id) {
        return telefoneRepository.findById(id).orElse(null);
    }
}
