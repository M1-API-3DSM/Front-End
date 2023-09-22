import Head from 'next/head';
import React from 'react';
import CardProjeto, { cardProps } from '../../components/card_projeto';
import Nav, { Papel, NavProps } from '../../components/nav';
import Footer from '../../components/footer';
import '../../public/css/projetos.css';

export async function fetchData(): Promise<cardProps[]> {
  // const projetos = [
  //   {
  //     id_projeto: 1,
  //     nome_projeto: 'Sistema de Reconhecimento de motociclistas',
  //     data_entrega: formataDataYYYYMMDD(new Date()),
  //     progresso: 20,
  //   },
  //   {
  //     id_projeto: 2,
  //     nome_projeto: 'Sistema de Reconhecimento de motociclistas',
  //     data_entrega: formataDataYYYYMMDD(new Date()),
  //     progresso: 20,
  //   },
  //   {
  //     id_projeto: 3,
  //     nome_projeto: 'Sistema de Reconhecimento de motociclistas',
  //     data_entrega: formataDataYYYYMMDD(new Date()),
  //     progresso: 20,
  //   },
  //   {
  //     id_projeto: 4,
  //     nome_projeto: 'Sistema de Reconhecimento de motociclistas',
  //     data_entrega: formataDataYYYYMMDD(new Date()),
  //     progresso: 20,
  //   }
  // ];

  const response = await fetch("http://localhost:3000/projetos");
  const data = response.json()
  console.log(data);
  return data;
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
          {data.length != 0 ? (
            data.map((projeto, index) => {
              return <CardProjeto key={index} {...projeto} />;
            })
          ) : (
            <h3>Nenhum projeto registrado</h3>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projetos;
