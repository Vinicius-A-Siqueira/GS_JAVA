import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.imageContainer}>
                <Image
                    src="/images/logo.png"
                    alt="Logo da Empresa"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <ul className={styles.navLinks}>
                <li><Link href="/">Início</Link></li>
                <li><Link href="/services">Serviços</Link></li>
                <li><Link href="/contato">Contato</Link></li>
                <li><Link href="/orcamento">Orçamento</Link></li>
                {/* Link para a página de login */}
                <li><Link href="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
