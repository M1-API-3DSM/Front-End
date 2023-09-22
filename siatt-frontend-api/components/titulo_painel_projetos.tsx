export interface TituloPainelProps {
  texto: string
  padding: number
}

export interface PainelData {
  nome_projeto: string
  itens: Array<Item>
}

export interface Item {
  item: string
  nome_item: string
  itens_filhos: Array<Item> | []
}

export default function TituloPainel( props: TituloPainelProps ){
  return(
    <div className="titulo-projetos" style={{paddingLeft: props.padding}}>
    <span>
      {props.texto}
    </span>
    <hr className="linha-projetos"/>
  </div>
  )
}