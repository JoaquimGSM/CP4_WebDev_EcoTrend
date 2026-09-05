import { useEffect, useState } from "react";

import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import CardProduto from "./components/CardProduto";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  useEffect(() => {
    async function buscarProdutos() {
      const resposta = await fetch("/produtos.json");
      const dados = await resposta.json();

      setProdutos(dados);
    }

    buscarProdutos();
  }, []);

  const produtosFiltrados =
    categoriaSelecionada === "Todos"
      ? produtos
      : produtos.filter(
          (produto) => produto.categoria === categoriaSelecionada
        );

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
              {produtosFiltrados.length} produtos encontrados
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setCategoriaSelecionada("Todos")}
                className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-green-700 hover:text-white"
              >
                Todos
              </button>

              <button
                onClick={() => setCategoriaSelecionada("Roupas")}
                className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-green-700 hover:text-white"
              >
                Roupas
              </button>

              <button
                onClick={() => setCategoriaSelecionada("Beleza")}
                className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-green-700 hover:text-white"
              >
                Beleza
              </button>

              <button
                onClick={() => setCategoriaSelecionada("Casa")}
                className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-green-700 hover:text-white"
              >
                Casa
              </button>

              <button
                onClick={() => setCategoriaSelecionada("Tecnologia")}
                className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-green-700 hover:text-white"
              >
                Tecnologia
              </button>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {produtosFiltrados.map((produto) => (
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