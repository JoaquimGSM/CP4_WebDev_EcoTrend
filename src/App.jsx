import { useEffect, useState } from "react";

import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";

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
          <h2 className="text-3xl font-bold">
            Nossos produtos
          </h2>

          <p className="mt-2 text-gray-600">
            {produtos.length} produtos encontrados
          </p>
        </section>
      </main>
    </>
  );
}

export default App;