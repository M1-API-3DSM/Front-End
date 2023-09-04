export interface cardProps {
  nome_projeto: string,
  data_entrega: string, // dd/mm/YYYY, use a funcao dateddmmYYYY em utils
  progresso: number
}

export default function CardProjeto(props: cardProps){
  return(
    <div className="card-projeto">
          <span>{props.nome_projeto}</span>
          <span>Entrega: {props.data_entrega}</span>
          <span>Progresso: {props.progresso}%</span>
    </div>
  )
}