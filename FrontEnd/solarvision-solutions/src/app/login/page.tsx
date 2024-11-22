'use client'; // Marca a página como componente cliente

import Link from 'next/link'; // Para navegação para a página de cadastro
import React, { useState } from 'react';
import styles from './page.module.css';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>(''); // Estado para e-mail
    const [senha, setSenha] = useState<string>(''); // Estado para senha
    const [error, setError] = useState<string>(''); // Estado para erros

    // Função para lidar com a mudança no campo de e-mail
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    // Função para lidar com a mudança no campo de senha
    const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(e.target.value);
    };

    // Função para o envio do formulário
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Verifique se o e-mail e a senha estão preenchidos corretamente
        if (email && senha) {
            console.log('E-mail:', email);
            console.log('Senha:', senha);
            // Aqui você pode implementar a lógica de autenticação (chamada à API, por exemplo)
        } else {
            setError('Por favor, preencha o e-mail e a senha');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <h1>Login</h1>

                {/* Campo de E-mail */}
                <div className={styles.inputGroup}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        placeholder="Digite seu e-mail"
                    />
                </div>

                {/* Campo de Senha */}
                <div className={styles.inputGroup}>
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        value={senha}
                        onChange={handleSenhaChange}
                        required
                        placeholder="Digite sua senha"
                    />
                </div>

                {/* Exibindo erro, se houver */}
                {error && <p className={styles.error}>{error}</p>}

                {/* Botões de Entrar e Cadastrar */}
                <div className={styles.buttonGroup}>
                    <button type="submit" className={styles.submitButton}>Entrar</button>
                    {/* Usando Link diretamente sem a tag <a> */}
                    <Link href="/cadastrar" className={styles.registerLink}>Cadastrar
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
