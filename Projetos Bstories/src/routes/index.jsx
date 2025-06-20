import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../style/pages/login.css';

const usuarios = [
  { usuario: 'admin', senha: 'admin123', tipo: 'Adm.meca' },
  { usuario: 'vendas', senha: '123', tipo: 'Vendas.meca' },
  // Adicione outros usuários conforme necessário
];

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.username.value.trim().toLowerCase();
    const password = e.target.password.value.trim();

    const user = usuarios.find(
      (u) => u.usuario === username && u.senha === password
    );

    if (user) {
      localStorage.setItem('usuarioLogado', user.usuario);

      switch (user.tipo) {
        case 'Vendas.meca':
          navigate('/Ponto-De-Vendas');
          break;
        case 'ecommerce':
          navigate('/');
          break;
        case 'Adm.meca':
          navigate('/Vendas');
          break;
        case 'rh':
          navigate('/');
          break;
        default:
          alert('Tipo de usuário não reconhecido.');
      }
    } else {
      setError('Usuário ou senha inválidos.');
    }
  };

  return (
    <div className="pagina-login">
      <div className="left"></div>
      <div className="right"></div>

      <div className="login-container">
        <h2>Login</h2>
        <form id="loginForm" onSubmit={handleLogin}>
          <input type="text" id="username" name="username" placeholder="Usuário" required />
          <input type="password" id="password" name="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

      <div className="img">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default Login;
