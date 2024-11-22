'use client'; // Adicionando esta linha no início

import React, { useState } from 'react';
import styles from './page.module.css';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o formulário para um servidor ou serviço de e-mail
        console.log(formData);
        alert('Mensagem enviada com sucesso!');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div>
            <main className={styles.contactContent}>
                <h1>Entre em Contato com a SolarVision Solutions</h1>

                <section className={styles.contactFormSection}>
                    <h2>Envie sua Mensagem</h2>
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Mensagem</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>Enviar</button>
                    </form>
                </section>

                <section className={styles.contactInfoSection}>
                    <h2>Informações de Contato</h2>
                    <ul>
                        <li><strong>Telefone:</strong> +55 (11) 1234-5678</li>
                        <li><strong>E-mail:</strong> contato@solarvisionsolutions.com.br</li>
                        <li><strong>Endereço:</strong> Rua Exemplo, 123, São Paulo, SP</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default ContactPage;
