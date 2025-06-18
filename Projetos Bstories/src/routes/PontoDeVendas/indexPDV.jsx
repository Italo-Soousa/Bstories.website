import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../style/pages/menuInicial.css";

function IndexPDV() {
  return (
    <div className="pdv-container" style={{ backgroundColor: "#f9f9f9" }}>
      <Header />

      <main className="pdv-main">
        <section class="categorias">
          <h2>Encontre a sua dúvida aqui agora:</h2>
          <div class="container">
            <a href="../PontoDeVendas/venda/indexVenda.html" class="categoria">
              <i class="fa-solid fa-retweet"></i>
              <p>Troca</p>
            </a>
            <Link to="/Vendas" className="categoria">
              <i className="fa-solid fa-cash-register"></i>
              <p>Vendas</p>
            </Link>
            <a
              href="../Administrador/Responsabilidades/Responsabilidades.html"
              class="categoria"
            >
              <i class="fa-solid fa-id-card"></i>
              <p>Cadastro de Cliente</p>
            </a>
            <a href="../PontoDeVendas/troca/troca.html" class="categoria">
              <i class="fa-solid fa-lock"></i>
              <p>Fechamento de Caixa</p>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default IndexPDV;
