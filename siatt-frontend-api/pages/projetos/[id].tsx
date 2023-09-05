import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next';
 
export default function Projeto({ id }: { id: number }) {
  const router = useRouter()
  return <p>Projeto: {id}</p>
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;

  return {
    props: {
      id,
    },
  };
}