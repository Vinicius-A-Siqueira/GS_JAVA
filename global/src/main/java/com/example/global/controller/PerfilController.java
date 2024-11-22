package com.example.global.controller;

import com.example.global.model.Perfil;
import com.example.global.service.PerfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/perfis")
public class PerfilController {

    @Autowired
    private PerfilService perfilService;

    // Endpoint para listar todos os perfis
    @GetMapping
    public List<Perfil> getAllPerfis() {
        return perfilService.getAllPerfis();
    }

    // Endpoint para buscar perfil pelo nome
    @GetMapping("/{nome}")
    public Perfil getPerfilByNome(@PathVariable String nome) {
        return perfilService.getPerfilByNome(nome);
    }

    // Endpoint para criar um novo perfil
    @PostMapping
    public Perfil createPerfil(@RequestBody Perfil perfil) {
        return perfilService.createPerfil(perfil);
    }

    // Endpoint para atualizar perfil
    @PutMapping("/{id}")
    public Perfil updatePerfil(@PathVariable Long id, @RequestBody Perfil perfil) {
        return perfilService.updatePerfil(id, perfil);
    }

    // Endpoint para deletar perfil
    @DeleteMapping("/{id}")
    public void deletePerfil(@PathVariable Long id) {
        perfilService.deletePerfil(id);
    }
}
