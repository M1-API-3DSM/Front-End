import '../public/css/projetos.css'

export interface TituloProjetoPainelProps {
  id_projeto_principal: string
  id: string
  item: string
  padding: number
}

export default function ProjetoPainel ( props: TituloProjetoPainelProps) {
  return (
    <div className="titulo-projetos" style={{paddingLeft: props.padding}}>
      <span>
      • {`${props.id} ${props.item}`}
      </span>
      <a href={`/projetos/${props.id_projeto_principal}/${props.id}`} className="ver-painel">
        Ver painel
      </a>
    </div>
  )
}