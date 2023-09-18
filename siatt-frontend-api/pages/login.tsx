import Head from 'next/head';
import React from 'react';
import '../public/css/login.css';

export default function Login() {
  return(
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div id="box-login">
        <h1 id="logo">M1</h1>
        <div className="form-block">
          <div className="form-field">
            <h2 className="form-label">Usuário</h2>
            <input type="text" name="usuario" className="form-input"></input>
          </div>
          <div className="form-field">
            <h2 className="form-label">Senha</h2>
            <input type="password" name="usuario" className="form-input"></input>
          </div>
        <input type="button" value="Login" className="form-submit"></input>
      </div>
      </div>
    </>
  )
}