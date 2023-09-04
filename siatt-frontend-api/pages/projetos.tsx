import Head from 'next/head';
import React from 'react';
import CardProjeto, { cardProps } from '../components/card_projeto';
import { formataDataYYYYMMDD } from '../utils/DateUtils';
import { GetServerSideProps } from 'next';
import '../public/css/projetos.css';

export async function fetchData(): Promise<cardProps[]> {
  const projetos = [
    {
      nome_projeto: 'Sistema de Reconhecimento de motociclistas',
      data_entrega: formataDataYYYYMMDD(new Date()),
      progresso: 20,
    },
    {
      nome_projeto: 'Sistema de Reconhecimento de motociclistas',
      data_entrega: formataDataYYYYMMDD(new Date()),
      progresso: 20,
    },
    {
      nome_projeto: 'Sistema de Reconhecimento de motociclistas',
      data_entrega: formataDataYYYYMMDD(new Date()),
      progresso: 20,
    },
    {
      nome_projeto: 'Sistema de Reconhecimento de motociclistas',
      data_entrega: formataDataYYYYMMDD(new Date()),
      progresso: 20,
    }
  ];

  return projetos;
}

export async function getServerSideProps() {
  const data = await fetchData();
  return {
    props: {
      data,
    },
  };
}

function Projetos({ data } : { data: cardProps[] }) {
  return(
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <nav>
      <h3>M1</h3>
      <ul>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Estatísticas</a></li>
        <li><a href="#">Painel</a></li>
      </ul>
    </nav>
    <div className="conteudo">
      <input type="button" value="+ Adicionar Projeto" id="botao-projetos"></input>
      <div id="projetos">
        {data.map(((projeto, index)=> {
          return <CardProjeto key={index} {...projeto} />
        }))}
      </div>
    </div>
    <footer>
      <span>Grupo M1© • 2023 • Todos direitos reservados</span>
    </footer>    
    </>
  )
}

export default Projetos;