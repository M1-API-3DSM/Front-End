import Head from 'next/head';
import React from 'react';
import Nav, {Papel, NavProps} from '../../components/nav';
import Footer from '../../components/footer';
import UploadaerXlsx from '../../components/uploader_xlsx';
import '../../public/css/novoprojeto.css';


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
      <form className="conteudo">
          <div className="btnNovoProjeto">
              <label>Nome do projeto: </label><input type='text' ></input>
          </div>
          <div id="projetos">
              <UploadaerXlsx rota="/Rota_Tarefas" />
              <UploadaerXlsx rota="/Rota_Recursos" />
          </div>
          
          <button type="submit">Cadastrar</button>
      </form>
      <Footer />
    </>
  )
}

export default Projetos;