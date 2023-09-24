import Head from 'next/head';
import { useState } from 'react'; 
import { useRouter } from 'next/router'; 
import Cookies from 'js-cookie';
import '../public/css/login.css';

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [authorized, setAuthorized] = useState(true);
  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/user/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        Cookies.set('key', data.key, { path: '/', sameSite: 'Strict'});
        Cookies.set('role', data.role, { path: '/', sameSite: 'Strict'});
        
        window.location.href = '/projetos';
      } else {
        setAuthorized(false);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div id="box-login">
        <h1 id="logo">M1</h1>
        <div className="form-block">
          {authorized ? null : (
            <p className="error-message">Acesso não autorizado, cheque suas credenciais.</p>
          )}
          <div className="form-field">
            <h2 className="form-label">Usuário</h2>
            <input
              type="text"
              name="username"
              className="form-input"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <h2 className="form-label">Senha</h2>
            <input
              type="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <input
            type="button"
            value="Login"
            className="form-submit"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}
