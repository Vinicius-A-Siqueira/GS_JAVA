package com.example.global.service;

import com.example.global.model.Perfil;
import com.example.global.model.User;
import com.example.global.repository.PerfilRepository;
import com.example.global.repository.UserRepository;
import com.example.global.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PerfilRepository perfilRepository;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    // Método para autenticação
    public String authenticate(User user) throws Exception {
        User foundUser = userRepository.findByUsername(user.getUsername());
        if (foundUser == null || !passwordEncoder.matches(user.getPassword(), foundUser.getPassword())) {
            throw new Exception("Invalid credentials");
        }
        return jwtTokenProvider.generateToken(foundUser);
    }

    // Método para registro de usuário com perfil
    public void registerUser(User user) throws Exception {
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new Exception("User already exists");
        }

        // Codificando a senha
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Atribuindo um perfil padrão (por exemplo, "USER")
        Perfil perfil = perfilRepository.findByNome("USER");
        if (perfil == null) {
            throw new Exception("Perfil 'USER' não encontrado");
        }
        Set<Perfil> perfis = new HashSet<>();
        perfis.add(perfil);
        user.setPerfis(perfis);

        userRepository.save(user);
    }
}
