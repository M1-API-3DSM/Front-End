import TituloPainel, { TituloPainelProps, PainelData, Item } from '../../components/titulo_painel_projetos';
import ProjetoPainel, {TituloProjetoPainelProps} from '../../components/projeto_painel_projetos';
import Head from 'next/head';
import Nav, {Papel, NavProps} from '../../components/nav';
import Footer from '../../components/footer';
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next';

import '../../public/css/projetos.css'
 
export default function Projeto({ nav, id, data }: { nav: NavProps, id: number, data: any}) {
  return(
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <Nav {...nav} />
      <div className='conteudo'>
        {mapItemChildren(data.itens, 0, id.toString())}
      </div>
      <Footer />
    </>
  )
}

function mapItemChildren(itens: Array<Item>, padding: number = 0, id_item_pai: string) {
  return (
    <div id="painel-projetos">
      {itens.map((item, index) => (
        <div className='container-projeto' key={index}>
          {item.itens_filhos.length !== 0 ? (
            <TituloPainel
              texto={`${item.item} ${item.nome_item}`}
              padding={padding}
            />
          ) : (
            <ProjetoPainel
              id_projeto_principal={id_item_pai}
              id={item.item}
              item={item.nome_item}
              padding={padding}
            />
          )}
          {item.itens_filhos.length !== 0 &&
            mapItemChildren(item.itens_filhos, padding + 20, item.item)}
        </div>
      ))}
    </div>
  );
}

export async function fetchData(id: string): Promise<PainelData[]> {
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

  const response = await fetch(`http://localhost:3000/projetoItem/${id}`);
  const data = response.json()
  console.log(data);
  return data;
}

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { id } = params;

  const nav: NavProps = {papel: Papel.EngenheiroChefe}
//   const data: PainelData = {
// 	"nome_projeto": "UAV",
// 	"itens": [
// 		{
// 			"item": "1",
// 			"nome_item": "UAV Design",
// 			"itens_filhos": [
// 				{
// 					"item": "1.1",
// 					"nome_item": "Air Vehicle",
// 					"itens_filhos": [
// 						{
// 							"item": "1.1.1",
// 							"nome_item": "Airframe",
// 							"itens_filhos": []
// 						},
// 						{
// 							"item": "1.1.2",
// 							"nome_item": "Propulsion",
// 							"itens_filhos": []
// 						},
// 						{
// 							"item": "1.1.3",
// 							"nome_item": "Communications",
// 							"itens_filhos": []
// 						}
// 					]
// 				},
// 				{
// 					"item": "1.2",
// 					"nome_item": "Payload",
// 					"itens_filhos": []
// 				},
// 				{
// 					"item": "1.3",
// 					"nome_item": "Ground Segment",
// 					"itens_filhos": []
// 				}
// 			]
// 		}
// 	]
// }
  const data = await fetchData(id);

  return {
    props: {
      nav,
      id,
      data
    },
  };
}