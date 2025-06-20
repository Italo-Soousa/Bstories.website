import React from "react";
import { Link } from "react-router-dom";
import "../style/layout/Header.css"; 
import logo from "../assets/images/logo.png"

const Header = () => {
  const tipoUsuario = localStorage.getItem("usuarioLogado");

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="B.stories logo" />
      </div>
      <nav className="menu">
        <Link to="/">Início</Link>
        <Link to="/politicas">Políticas</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      {tipoUsuario && (
        <div className="usuario-info">
          <i className="fa-solid fa-user-circle"></i>
          <span>{tipoUsuario}</span>
        </div>
      )}
    </header>
  );
};

export default Header;