import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Head from 'next/head';
import Nav, {Papel, NavProps} from '../../components/nav';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../../components/footer';
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next';

import '../../public/css/projetos.css'
 
export default function Projeto({ nav, id, data }: { nav: NavProps, id: number, data: any }) {
  return(
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <Nav {...nav} />
      <div className='conteudo'>
        <div id="projetos">
          {Object.keys(data).map((projeto_pai, index) =>{
            return(
              <Accordion key={index}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <h2>{projeto_pai}</h2>
                </AccordionSummary>
                <AccordionDetails>
                <ul>
                  {data[projeto_pai].map((projeto_filho: any) => (
                    <li key={projeto_filho}>
                      <a href={`/${id}/${projeto_filho}`}>
                        {projeto_filho}
                      </a>
                    </li>
                  ))}
                </ul>
                </AccordionDetails>
              </Accordion>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const nav: NavProps = {papel: Papel.EngenheiroChefe}
  const data = {
    '1.1': ['1.1.1', '1.1.2', '1.1.3'],
    '1.2': ['1.2.1', '1.2.2']
  }

  return {
    props: {
      nav,
      id,
      data
    },
  };
}