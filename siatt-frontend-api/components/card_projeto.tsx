export interface cardProps {
  id_projeto: number
  nome_projeto: string,
  data_entrega: string,
  progresso: number
}

export default function CardProjeto(props: cardProps){
  return(
    <a href={`/projetos/${props.id_projeto}`}>
    <div className="card-projeto">
          <span>{props.nome_projeto}</span>
    </div>
    </a>
  )
}