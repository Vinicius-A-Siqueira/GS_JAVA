package com.example.global.controller;

import com.example.global.model.Endereco;
import com.example.global.service.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enderecos")
@CrossOrigin(origins = "*") // Permite acesso de qualquer origem
public class EnderecoController {

    @Autowired
    private EnderecoService enderecoService;

    @GetMapping("/{id}")
    public Endereco getEndereco(@PathVariable Long id) {
        return enderecoService.buscarEnderecoPorId(id);
    }

    @PostMapping
    public Endereco criarEndereco(@RequestBody Endereco endereco) {
        return enderecoService.salvarEndereco(endereco);
    }

    @PutMapping("/{id}")
    public Endereco atualizarEndereco(@PathVariable Long id, @RequestBody Endereco endereco) {
        return enderecoService.atualizarEndereco(id, endereco);
    }

    @DeleteMapping("/{id}")
    public void deletarEndereco(@PathVariable Long id) {
        enderecoService.deletarEndereco(id);
    }
}
