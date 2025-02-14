"use client";

import { CopyRight, Footer, Header, Main, Title } from "@/app/home/styled";
import Link from "next/link";

const SideMenu = () => {


  const items: NavItemInterface[] = [
    { url: "/", label: "Home" },
    { url: "/stock", label: "Estoque" },
    { url: "/financial", label: "Financeiro" },
];



  return (
    <>
    <header>
      <nav className="navBar">
        <Link href="/" className="logo-marca">
          <a>Meu PDV</a>
        </Link>
      </nav>
      <ul className="nav-items">
        {items.map((item) => (
          <NavItem
            key={item.url}
            url={item.url}
            label={item.label}
          />
        ))}
      </ul>

      <h1>Home</h1>



    </header>


      {/* <Header>
        <Title>Projeto PP</Title>
      </Header>
      <Main>
        <h2>Bem-vindo ao Projeto PP!</h2>
        <p>Iniciando as boas praticas em um projeto modelo.</p>
      </Main>
      <Footer>
        <CopyRight>Desenvolvido por Diego Santos \|/ Site Projeto PP</CopyRight>
      </Footer> */}
    </>
  );
}

export default SideMenu;
