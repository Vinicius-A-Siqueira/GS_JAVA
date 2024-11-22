package com.example.global.service;

import com.example.global.model.Perfil;
import com.example.global.repository.PerfilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PerfilService {

    @Autowired
    private PerfilRepository perfilRepository;

    // Buscar todos os perfis
    public List<Perfil> getAllPerfis() {
        return perfilRepository.findAll();
    }

    // Buscar um perfil pelo nome
    public Perfil getPerfilByNome(String nome) {
        return perfilRepository.findByNome(nome);
    }

    // Criar um novo perfil
    public Perfil createPerfil(Perfil perfil) {
        return perfilRepository.save(perfil);
    }

    // Atualizar um perfil
    public Perfil updatePerfil(Long id, Perfil perfil) {
        Perfil existingPerfil = perfilRepository.findById(id).orElseThrow(() -> new RuntimeException("Perfil não encontrado"));
        existingPerfil.setNome(perfil.getNome());
        return perfilRepository.save(existingPerfil);
    }

    // Deletar um perfil
    public void deletePerfil(Long id) {
        perfilRepository.deleteById(id);
    }
}
