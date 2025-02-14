'use client'

import { Header, Main, Footer, Title, CopyRight } from './styled';

const Home = () => {
  return (
    <>
    <header>
      <h1>Home</h1>
    </header>
      <Header>
        <Title>Projeto PP</Title>
      </Header>
      <Main>
        <h2>Bem-vindo ao Projeto PP!</h2>
        <p>Iniciando as boas praticas em um projeto modelo.</p>
      </Main>
      <Footer>
        <CopyRight>Desenvolvido por Diego Santos \|/ Site Projeto PP</CopyRight>
      </Footer>
    </>
  );
}

export default Home;
