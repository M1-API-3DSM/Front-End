import '../../public/css/estatisticas.css'
import Head from 'next/head'
import Nav, {NavProps, Papel} from '../../components/nav'
import Footer from '../../components/footer'
import { GetServerSideProps } from 'next'

export default function Estatisticas({ nav }: { nav: NavProps }) {
  return(
    <>
      <Head>
        <title>Estatisticas</title>
      </Head>
      <Nav {...nav} />
      <h1>Estatisticas</h1>
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const nav: NavProps = {papel: Papel.EngenheiroChefe}
  return {
    props: {
      nav
    },
  };
}