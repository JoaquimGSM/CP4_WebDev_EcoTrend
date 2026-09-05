import { useEffect, useState } from "react";

import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import CardProduto from "./components/CardProduto";

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function buscarProdutos() {
      const resposta = await fetch("/produtos.json");
      const dados = await resposta.json();

      setProdutos(dados);
    }

    buscarProdutos();
  }, []);

  return (
    <>
      <Cabecalho />

      <main>
        <Hero />

        <section id="produtos" className="px-8 py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Nossos produtos
            </h2>

            <p className="mt-2 text-gray-600">
              {produtos.length} produtos encontrados
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {produtos.map((produto) => (
                <CardProduto
                  key={produto.id}
                  produto={produto}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;