import Head from 'next/head';
import React from 'react';
import Nav, { Papel, NavProps } from '../../components/nav';
import Footer from '../../components/footer';
import UploadaerXlsx from '../../components/uploader_xlsx';
import InputCapture from '../../components/Inputs/input_novo_projeto';
import InputSalvarProjeto from '../../components/Inputs/input_salvar_projeto';
import '../../public/css/novoprojeto.css';

export async function getServerSideProps() {
  const nav: NavProps = { papel: Papel.EngenheiroChefe }
  return {
    props: {
      nav
    },
  };
}

function Projetos({ nav }: { nav: NavProps }) {
  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <Nav {...nav} />
     
        <div className="conteudo">
          <div className="btnNovoProjeto">
            <InputCapture rota='/teste_novoProjeto' />
          </div>
          <div id="projetos">
            <UploadaerXlsx rota="http://localhost:3000/projetoItem/criar" />
            <UploadaerXlsx rota="/Rota_Recursos" />
          </div>
        </div>
        <InputSalvarProjeto fieldsToCheck={['NomeProjeto']} redirectTo="/projetos" />

      <Footer />
    </>
  )
}

export default Projetos;