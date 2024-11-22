
import React, { useEffect } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    imageUrl: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, imageUrl, onClose }) => {
    const handleClickOutside = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        const handleEscapeKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscapeKey);
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={handleClickOutside}>
            <div className={styles.modalContent}>
                <img src={imageUrl} alt="Imagem Ampliada" className={styles.modalImage} />
                <button className={styles.closeButton} onClick={onClose}>
                    Fechar
                </button>
            </div>
        </div>
    );
};

export default Modal;
