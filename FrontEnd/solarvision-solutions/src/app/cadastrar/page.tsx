'use client'; // Marca a página como componente cliente

import React, { useState } from 'react';
import styles from './page.module.css';

const RegisterPage: React.FC = () => {
    const [step, setStep] = useState(1); // Controle do passo do formulário
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
        confirmarSenha: '',
        cpf: '',
        dataNascimento: '',
        sexo: '',
        estadoCivil: '',
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        cidade: '',
        bairro: '',
        estado: '',
        celular: '',
    });

    // Função para lidar com a mudança dos campos
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Função para avançar para o próximo passo
    const nextStep = () => setStep(step + 1);

    // Função para voltar para o passo anterior
    const prevStep = () => setStep(step - 1);

    // Função para o envio do formulário (final)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formulário enviado com os dados: ', formData);
        // Aqui você pode adicionar a lógica de envio do formulário para uma API ou outro destino
    };

    return (
        <div className={styles.registerContainer}>
            <form onSubmit={handleSubmit} className={styles.registerForm}>
                <h1>Cadastro</h1>

                {/* Passo 1 - Informações Pessoais */}
                {step === 1 && (
                    <>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Digite seu e-mail"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                value={formData.senha}
                                onChange={handleChange}
                                required
                                placeholder="Digite sua senha"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="confirmarSenha">Confirmar Senha</label>
                            <input
                                type="password"
                                id="confirmarSenha"
                                name="confirmarSenha"
                                value={formData.confirmarSenha}
                                onChange={handleChange}
                                required
                                placeholder="Confirme sua senha"
                            />
                        </div>
                        <div className={styles.buttonGroup}>
                            <button type="button" onClick={nextStep} className={styles.nextButton}>Próximo</button>
                        </div>
                    </>
                )}

                {/* Passo 2 - Informações de Endereço */}
                {step === 2 && (
                    <>
                        <div className={styles.inputGroup}>
                            <label htmlFor="cep">CEP</label>
                            <input
                                type="text"
                                id="cep"
                                name="cep"
                                value={formData.cep}
                                onChange={handleChange}
                                required
                                placeholder="Digite seu CEP"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="rua">Rua</label>
                            <input
                                type="text"
                                id="rua"
                                name="rua"
                                value={formData.rua}
                                onChange={handleChange}
                                required
                                placeholder="Digite sua rua"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="numero">Número</label>
                            <input
                                type="text"
                                id="numero"
                                name="numero"
                                value={formData.numero}
                                onChange={handleChange}
                                required
                                placeholder="Digite o número"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="complemento">Complemento</label>
                            <input
                                type="text"
                                id="complemento"
                                name="complemento"
                                value={formData.complemento}
                                onChange={handleChange}
                                placeholder="Digite o complemento (opcional)"
                            />
                        </div>
                        <div className={styles.buttonGroup}>
                            <button type="button" onClick={prevStep} className={styles.prevButton}>Voltar</button>
                            <button type="button" onClick={nextStep} className={styles.nextButton}>Próximo</button>
                        </div>
                    </>
                )}

                {/* Passo 3 - Informações de Contato */}
                {step === 3 && (
                    <>
                        <div className={styles.inputGroup}>
                            <label htmlFor="celular">Número de Celular</label>
                            <input
                                type="text"
                                id="celular"
                                name="celular"
                                value={formData.celular}
                                onChange={handleChange}
                                required
                                placeholder="Ex: +55 11 96764-5675"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="estadoCivil">Estado Civil</label>
                            <input
                                type="text"
                                id="estadoCivil"
                                name="estadoCivil"
                                value={formData.estadoCivil}
                                onChange={handleChange}
                                required
                                placeholder="Digite seu estado civil"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="sexo">Sexo Biológico</label>
                            <input
                                type="text"
                                id="sexo"
                                name="sexo"
                                value={formData.sexo}
                                onChange={handleChange}
                                required
                                placeholder="Digite seu sexo biológico"
                            />
                        </div>
                        <div className={styles.buttonGroup}>
                            <button type="button" onClick={prevStep} className={styles.prevButton}>Voltar</button>
                            <button type="submit" className={styles.submitButton}>Cadastrar</button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
};

export default RegisterPage;
