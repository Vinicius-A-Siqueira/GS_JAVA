import Link from 'next/link'; // Importando o Link do Next.js
import React from 'react';
import styles from './page.module.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <main className={styles.mainContent}>
        <h1>Bem-vindo à SolarVision Solutions</h1>
        <p>
          A SolarVision Solutions é a sua parceira na implementação de soluções
          sustentáveis de energia solar. Oferecemos consultoria, planejamento e
          instalação de sistemas solares para promover um futuro mais verde e
          econômico.
        </p>
        <p>
          Junte-se a nós na revolução energética e faça a sua parte para um planeta
          mais sustentável.
        </p>

        <section className={styles.benefits}>
          <h2>Benefícios da Energia Solar</h2>
          <p>
            A energia solar oferece uma série de vantagens que não apenas ajudam a reduzir os custos, mas também contribuem para um futuro mais sustentável.
          </p>
          <ul>
            <li><strong>Redução de Custos:</strong> Ao gerar sua própria energia, você reduz ou até elimina sua conta de luz.</li>
            <li><strong>Baixo Impacto Ambiental:</strong> A energia solar é uma fonte limpa e renovável, reduzindo sua pegada de carbono.</li>
            <li><strong>Investimento de Longo Prazo:</strong> Sistemas solares são altamente duráveis, com vida útil de até 25 anos ou mais.</li>
            <li><strong>Independência Energética:</strong> A energia solar permite que você reduza sua dependência da rede elétrica convencional.</li>
          </ul>
        </section>

        <section className={styles.callToAction}>
          <h2>Pronto para fazer a diferença?</h2>
          <p>
            Entre em contato com a SolarVision Solutions hoje mesmo e descubra como a energia solar pode transformar sua casa ou empresa.
          </p>

          {/* Link para a página de orçamento */}
          <Link href="/orcamento">
            <button className={styles.ctaButton}>Solicite uma Consultoria Gratuita</button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
