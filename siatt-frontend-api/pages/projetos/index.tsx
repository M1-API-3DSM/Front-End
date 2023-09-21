import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import CardProjeto, { cardProps } from '../../components/card_projeto';
import Nav, { Papel, NavProps } from '../../components/nav';
import Footer from '../../components/footer';
import '../../public/css/projetos.css';

export async function fetchData(): Promise<cardProps[]> {
  try {
    const response = await fetch('http://localhost:3000/projetoItem'); // Substitua 'URL_DO_SEU_BACKEND' pela URL real do seu endpoint de GET.
    if (!response.ok) {
      throw new Error('Erro ao buscar dados do servidor');
    }
    const data = await response.json();
    return data; // Assumindo que seus dados são retornados como um array de objetos semelhantes a cardProps.
  } catch (error) {
    console.error('Erro ao buscar dados do servidor:', error);
    return [];
  }
}

export async function getServerSideProps() {
  const data = await fetchData();
  const nav: NavProps = { papel: Papel.EngenheiroChefe }
  return {
    props: {
      nav,
      data,
    },
  };
}

function Projetos({ nav, data }: { nav: NavProps, data: cardProps[] }) {
  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <Nav {...nav} />
      <div className="conteudo">
        <a href='/novoprojeto' id="botao-projetos">+ Adicionar Projeto</a>
        <div id="projetos">
          {data.map(((projeto, index) => {
            return <CardProjeto key={index} {...projeto} />
          }))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projetos;
