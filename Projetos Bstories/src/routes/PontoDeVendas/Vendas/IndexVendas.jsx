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
          <main className="passo-container" style={{ backgroundColor: "#f9f9f9" }}>
                  <aside className="sidebar">
                    <h4>Processos</h4>
                    <ul>
                      <li><a href="../troca/troca.html">Como fazer uma troca?</a></li>
                      <li><a href="#">Como fazer uma devolução?</a></li>
                      <li className="active"><a href="#">Como fazer uma venda?</a></li>
                    </ul>
                  </aside>

                  <section className="passo-conteudo">
                     <h1>Como Realizar uma Venda</h1>

                    <div className="passo">
                      <p><strong>1.</strong> Acesse o campo de faturamento.</p>
                      <img src={teste} alt="Campo de faturamento" className="imagem-processo" />
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