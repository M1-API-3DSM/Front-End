import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next';
 
export default function Projeto({ id, data }: { id: number, data: String[] }) {
  const router = useRouter()
  return(
    <>
    {data.map((projeto, index) =>{
      return(
        <a key={index} href={`projetos/${id}/${projeto}`}>
          {projeto}
        </a>
      )
    })}
    </>
  )
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const data = ['1.1', '1.1.1', '1.1.2', '1.1.3']

  return {
    props: {
      id,
      data
    },
  };
}