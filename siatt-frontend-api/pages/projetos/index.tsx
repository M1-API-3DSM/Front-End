import Head from 'next/head';
import React from 'react';
import CardProjeto, { cardProps } from '../../components/card_projeto';
import Nav, {Papel, NavProps} from '../../components/nav';
import Footer from '../../components/footer';
import { formataDataYYYYMMDD } from '../../utils/DateUtils';
import '../../public/css/projetos.css';

export async function fetchData(): Promise<cardProps[]> {
  const projetos = [
    {
      id_projeto: 1,
      nome_projeto: 'Sistema de Reconhecimento de motociclistas',
      data_entrega: formataDataYYYYMMDD(new Date()),
      progresso: 20,
    },
    {
      id_projeto: 2,
      nome_projeto: 'Sistema de Reconhecimento de motociclistas',
      data_entrega: formataDataYYYYMMDD(new Date()),
      progresso: 20,
    },
    {
      id_projeto: 3,
      nome_projeto: 'Sistema de Reconhecimento de motociclistas',
      data_entrega: formataDataYYYYMMDD(new Date()),
      progresso: 20,
    },
    {
      id_projeto: 4,
      nome_projeto: 'Sistema de Reconhecimento de motociclistas',
      data_entrega: formataDataYYYYMMDD(new Date()),
      progresso: 20,
    }
  ];

  return projetos;
}

export async function getServerSideProps() {
  const data = await fetchData();
  const nav: NavProps = {papel: Papel.EngenheiroChefe}
  return {
    props: {
      nav,
      data,
    },
  };
}

function Projetos({ nav, data } : { nav: NavProps, data: cardProps[] }) {
  return(
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <Nav {...nav} />
      <div className="conteudo">
        <input type="button" value="+ Adicionar Projeto" id="botao-projetos"></input>
        <div id="projetos">
          {data.map(((projeto, index)=> {
            return <CardProjeto key={index} {...projeto} />
          }))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projetos;