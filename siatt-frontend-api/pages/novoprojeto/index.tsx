import Head from 'next/head';
import React from 'react';
import Nav, {Papel, NavProps} from '../../components/nav';
import Footer from '../../components/footer';
import UploadaerXlsx from '../../components/uploader_xlsx';
import '../../public/css/novoprojeto.css';
import InputCapture from '../../components/Inputs/input_novo_projeto';


export async function getServerSideProps() {
  const nav: NavProps = {papel: Papel.EngenheiroChefe}
  return {
    props: {
      nav
    },
  };
}

function Projetos({ nav} : { nav: NavProps}) {
  return(
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <Nav {...nav} />
      <div className="conteudo">
          <div className="btnNovoProjeto">
              <InputCapture rota='/teste_novoProjeto'/>
          </div>
          <div id="projetos">
              <UploadaerXlsx rota="/xlsx_tarefas" />
              <UploadaerXlsx rota="/Rota_Recursos" />
          </div>
      </div>
      <Footer />
    </>
  )
}

export default Projetos;