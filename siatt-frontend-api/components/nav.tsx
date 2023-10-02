export enum Papel {
  EngenheiroChefe = "EngenheiroChefe",
  LiderDeProjeto = "LiderDeProjeto",
}

export interface NavProps {
  papel: Papel
}

export default function Nav( props: NavProps ){
  if ( props.papel == Papel.EngenheiroChefe) {
    return(
      <nav>
        <h3>M1</h3>
        <ul>
          <li><a href="/projetos">Projetos</a></li>
          <li><a href="/estatisticas">Estatísticas</a></li>
        </ul>
      </nav>
    )
  } else if (props.papel == Papel.LiderDeProjeto) {
    return(
      <nav>
        <h3>M1</h3>
        <ul>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Sair</a></li>
        </ul>
      </nav>
    )
  }
 
}