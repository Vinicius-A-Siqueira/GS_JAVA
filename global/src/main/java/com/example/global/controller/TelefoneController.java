package com.example.global.controller;

import com.example.global.model.Telefone;
import com.example.global.service.TelefoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/telefones")
@CrossOrigin(origins = "*") // Permite acesso de qualquer origem
public class TelefoneController {

    @Autowired
    private TelefoneService telefoneService;

    @GetMapping("/{id}")
    public Telefone getTelefone(@PathVariable Long id) {
        return telefoneService.buscarTelefonePorId(id);
    }

    @PostMapping
    public Telefone criarTelefone(@RequestBody Telefone telefone) {
        return telefoneService.salvarTelefone(telefone);
    }

    @PutMapping("/{id}")
    public Telefone atualizarTelefone(@PathVariable Long id, @RequestBody Telefone telefone) {
        return telefoneService.atualizarTelefone(id, telefone);
    }

    @DeleteMapping("/{id}")
    public void deletarTelefone(@PathVariable Long id) {
        telefoneService.deletarTelefone(id);
    }
}
