import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import "../../../style/pages/processos.css";
import teste from '../../../assets/images/teste.png';

 

function IndexVendas() {
  return (
    <div className="página">
       <Header />
       <div className="pagina-main">
          <main className="pagina-bloco">
            <aside className="sidebar-bloco">
              <h2>Processos</h2>
              <ul>
                <li><a href="../troca/troca.html">Como fazer uma troca?</a></li>
                <li><a href="#">Como fazer uma devolução?</a></li>
                <li className="active"><a href="#">Como fazer uma venda?</a></li>
              </ul>
            </aside>

            <section className="conteudo-bloco">
              <h1>Como Realizar uma Venda</h1>

              <div className="passo">
                <p><strong>1.</strong> Acesse o campo de faturamento.</p>
                <img src={teste} alt="Campo de faturamento" className="imagem-processo" />
              </div>

              <div className="passo">
                <p><strong>2.</strong> Clique na opção <strong>Venda Fácil</strong>.</p>
                <img src={teste} alt="Campo Venda Fácil" className="imagem-processo" />
              </div>

              <div className="passo">
                <p><strong>2.</strong> Clique na opção <strong>Venda Fácil</strong>.</p>
                <img src={teste} alt="Campo Venda Fácil" className="imagem-processo" />
              </div>

              <div className="passo">
                <p><strong>2.</strong> Clique na opção <strong>Venda Fácil</strong>.</p>
                <img src={teste} alt="Campo Venda Fácil" className="imagem-processo" />
              </div>

              <div className="passo">
                <p><strong>2.</strong> Clique na opção <strong>Venda Fácil</strong>.</p>
                <img src={teste} alt="Campo Venda Fácil" className="imagem-processo" />
              </div>

              <div className="passo">
                <p><strong>2.</strong> Clique na opção <strong>Venda Fácil</strong>.</p>
                <img src={teste} alt="Campo Venda Fácil" className="imagem-processo" />
              </div>

              <div className="passo">
                <p><strong>2.</strong> Clique na opção <strong>Venda Fácil</strong>.</p>
                <img src={teste} alt="Campo Venda Fácil" className="imagem-processo" />
              </div>
            </section>
          </main>
       </div>
      <Footer />
      </div>
  );
}

export default IndexVendas;