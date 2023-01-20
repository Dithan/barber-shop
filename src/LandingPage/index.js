import React, { useState } from 'react';

const LandingPage = () => {
  const [tema, setTema] = useState('modo-claro');
  const [imgButton, setImgButton] = useState('./assets/moon.png');

  const mudarTema = () => {
    if (tema == 'modo-claro') {
      setImgButton('./assets/sun.png');
      setTema('modo-escuro');
    } else if (tema == 'modo-escuro') {
      setImgButton('./assets/moon.png');
      setTema('modo-claro');
    }
  };

  return (
    <div className={tema}>
      <header>
        <div className="header">
          <picture className="logo">
            <img src="./assets/barbearia-logo.png" alt="Barber Shop Logo" />
          </picture>

          <button onClick={mudarTema}>
            <picture>
              <img src={imgButton} alt="Tema de cores" />
            </picture>
            {tema == 'modo-claro' ? 'Dark' : 'Light'}
          </button>
        </div>
      </header>

      <section className="banner"></section>

      <main>
        <div className="textos">
          <h1>Bem-vindo a Barber Shop</h1>
          <p>
            <strong>
              Nossa barbearia sempre oferece profissionais de qualidade e
              estamos prontos para lidar com suas maiores expectativas.
            </strong>
          </p>
          <p>
            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma
            equipe premiada que demonstrou o talento de mestres barbeiros em
            vários concursos de estilo. Deixe nosso barbeiro ser seu estilista
            pessoal e você nunca ficará desapontado.
          </p>

          <p className="assinatura">S. Kelly</p>
        </div>
      </main>

      <footer>
        <div className="footer">
          <p>
            © 2023 - Barber Shop - Todos os direitos reservados - Code by{' '}
            <a href="https://dithan.github.io" target="_blank">
              Thiago Rocha
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
