'use client';

import React, { useState } from 'react';
import Modal from '../components/Modal';
import styles from './Services.module.css'; // Importando os estilos

const services = [
    {
        title: 'Consultoria e Planejamento Energético',
        description: 'Oferecemos consultoria especializada para ajudar empresas e residências a entenderem suas necessidades energéticas e planejar soluções eficientes utilizando energia solar.',
        imageUrl: '/images/consultoria.jpg',  // Caminho da imagem
    },
    {
        title: 'Projeto e Design de Sistemas Solares',
        description: 'Criamos projetos personalizados de sistemas fotovoltaicos de acordo com as necessidades de cada cliente, garantindo a melhor eficiência e custo-benefício.',
        imageUrl: '/images/projeto.jpg',  // Caminho da imagem
    },
    {
        title: 'Implementação e Instalação',
        description: 'Realizamos a instalação dos sistemas solares, cuidando de todas as etapas do processo, desde a execução até a integração com a rede elétrica.',
        imageUrl: '/images/instalacao.jpg',  // Caminho da imagem
    },
    {
        title: 'Manutenção e Suporte Técnico',
        description: 'Oferecemos serviços de manutenção preventiva e corretiva para garantir que seu sistema solar continue operando com máxima eficiência.',
        imageUrl: '/images/manutencao.jpg',  // Caminho da imagem
    },
];

const ServicesPage: React.FC = () => {
    // Estado para controlar qual imagem foi clicada
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string>('');

    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
    };

    return (
        <div className={styles.servicesContainer}>
            <h1 className={styles.pageTitle}>Nossos Serviços</h1>
            <div className={styles.servicesList}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                        <img
                            src={service.imageUrl}
                            alt={service.title}
                            className={styles.serviceImage}
                            onClick={() => openModal(service.imageUrl)}  // Ao clicar na imagem, abre o modal
                        />
                        <div className={styles.serviceDetails}>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Exibe o modal quando isModalOpen for true */}
            <Modal isOpen={isModalOpen} imageUrl={selectedImage} onClose={closeModal} />
        </div>
    );
};

export default ServicesPage;
