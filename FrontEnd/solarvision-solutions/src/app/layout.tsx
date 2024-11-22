import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt">
      <head>
        <title>SolarVision Solutions</title>
        <meta name="description" content="Soluções Sustentáveis de Energia Solar" />
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
        {/* Barra de navegação fixa no topo */}
        <Navbar />

        {/* Conteúdo dinâmico da página */}
        <main style={{ flexGrow: 1, padding: '2rem' }}>
          {children}
        </main>

        {/* Rodapé */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
