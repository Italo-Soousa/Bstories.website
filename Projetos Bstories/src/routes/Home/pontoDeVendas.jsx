import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../style/pages/menuInicial.css";

const PontoDeVendas = () => {
  return (
    <div className="pdv-container" style={{ backgroundColor: "#f9f9f9" }}>
      <Header />

      <main className="pdv-main">
        <section className="categorias">
          <h2>Encontre a sua dúvida aqui agora:</h2>
          <div className="container">
            <Link to="/Processos PDV" className="categoria">
              <i className="fa-solid fa-cash-register"></i>
              <p>Ponto de Vendas</p>
            </Link>
            <a href="../../estoque.html" className="categoria">
              <i className="fa-solid fa-chart-line"></i>
              <p>Relatórios</p>
            </a>
            <a
              href="../Administrador/Responsabilidades/Responsabilidades.html"
              className="categoria"
            >
              <i className="fa-solid fa-user-check"></i>
              <p>Responsabilidades por Funcionario</p>
            </a>
            <a href="../PontoDeVendas/troca/troca.html" className="categoria">
              <i className="fa-solid fa-clipboard-check"></i>
              <p>Processos de Mercadoria</p>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PontoDeVendas;
