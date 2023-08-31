import Head from 'next/head';
import React from 'react';
import '../public/css/projetos.css';

export default function Login() {
  return(
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <nav>
      <h3>M1</h3>
      <ul>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Estatísticas</a></li>
        <li><a href="#">Painel</a></li>
      </ul>
    </nav>
    <div className="conteudo">
      <input type="button" value="+ Adicionar Projeto" id="botao-projetos"></input>
      <div id="projetos">
        <div className="card-projeto">
          <span>Sistema de Reconhecimento de motociclistas</span>
          <span>Entrega: 27/10/2002</span>
          <span>Progresso: 0%</span>
        </div>
        <div className="card-projeto">
          <span>Sistema de Reconhecimento de motociclistas</span>
          <span>Entrega: 27/10/2002</span>
          <span>Progresso: 0%</span>
        </div>
        <div className="card-projeto">
          <span>Sistema de Reconhecimento de motociclistas</span>
          <span>Entrega: 27/10/2002</span>
          <span>Progresso: 0%</span>
        </div>
        <div className="card-projeto">
          <span>Sistema de Reconhecimento de motociclistas</span>
          <span>Entrega: 27/10/2002</span>
          <span>Progresso: 0%</span>
        </div>
        <div className="card-projeto">
          <span>Sistema de Reconhecimento de motociclistas</span>
          <span>Entrega: 27/10/2002</span>
          <span>Progresso: 0%</span>
        </div>
        <div className="card-projeto">
          <span>Sistema de Reconhecimento de motociclistas</span>
          <span>Entrega: 27/10/2002</span>
          <span>Progresso: 0%</span>
        </div>
        <div className="card-projeto">
          <span>Sistema de Reconhecimento de motociclistas</span>
          <span>Entrega: 27/10/2002</span>
          <span>Progresso: 0%</span>
        </div>
      </div>
    </div>
    <footer>
      <span>Grupo M1© • 2023 • Todos direitos reservados</span>
    </footer>    
    </>
  )
}