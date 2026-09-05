import { useEffect, useState } from "react";

import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import CardProduto from "./components/CardProduto";
import Carrinho from "./components/Carrinho";
import Loading from "./components/Loading";

function App() {
  const [produtos, setProdutos] = useState([]);

  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState("Todos");

  const [precoMaximo, setPrecoMaximo] =
    useState("Todos");

  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");

    return carrinhoSalvo
      ? JSON.parse(carrinhoSalvo)
      : [];
  });

  const [carrinhoAberto, setCarrinhoAberto] =
    useState(false);

  const [carregando, setCarregando] =
    useState(true);

  const [erro, setErro] =
    useState("");

  useEffect(() => {
    async function buscarProdutos() {
      try {
        setCarregando(true);
        setErro("");

        const resposta = await fetch("/produtos.json");

        if (!resposta.ok) {
          throw new Error(
            "Não foi possível carregar os produtos."
          );
        }

        const dados = await resposta.json();

        setProdutos(dados);
      } catch (erro) {
        setErro(erro.message);
      } finally {
        setCarregando(false);
      }
    }

    buscarProdutos();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "carrinho",
      JSON.stringify(carrinho)
    );
  }, [carrinho]);

  function adicionarAoCarrinho(produto) {
    const produtoExiste = carrinho.find(
      (item) => item.id === produto.id
    );

    if (produtoExiste) {
      const carrinhoAtualizado = carrinho.map(
        (item) =>
          item.id === produto.id
            ? {
                ...item,
                quantidade: item.quantidade + 1,
              }
            : item
      );

      setCarrinho(carrinhoAtualizado);
    } else {
      const novoProduto = {
        ...produto,
        quantidade: 1,
      };

      setCarrinho([
        ...carrinho,
        novoProduto,
      ]);
    }
  }

  function removerDoCarrinho(id) {
    const carrinhoAtualizado = carrinho.filter(
      (produto) => produto.id !== id
    );

    setCarrinho(carrinhoAtualizado);
  }

  function finalizarCompra() {
    return new Promise((resolve) => {
      setTimeout(() => {
        setCarrinho([]);

        resolve(
          "Compra realizada com sucesso!"
        );
      }, 2000);
    });
  }

  const produtosFiltrados = produtos.filter(
    (produto) => {
      const correspondeCategoria =
        categoriaSelecionada === "Todos" ||
        produto.categoria === categoriaSelecionada;

      const correspondePreco =
        precoMaximo === "Todos" ||
        produto.preco <= Number(precoMaximo);

      return (
        correspondeCategoria &&
        correspondePreco
      );
    }
  );

  const quantidadeCarrinho = carrinho.reduce(
    (total, produto) =>
      total + produto.quantidade,
    0
  );

  return (
    <>
      <Cabecalho
        quantidadeCarrinho={quantidadeCarrinho}
        abrirCarrinho={() =>
          setCarrinhoAberto(true)
        }
      />

      <main>
        <Hero />

        <section
          id="produtos"
          className="px-8 py-16"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Nossos produtos
            </h2>

            {carregando ? (
              <Loading />
            ) : erro ? (
              <div className="mt-8 rounded-lg bg-red-50 p-4 text-red-700">
                {erro}
              </div>
            ) : (
              <>
                <p className="mt-2 text-gray-600">
                  {produtosFiltrados.length} produtos encontrados
                </p>

                <div className="mt-6 flex flex-wrap gap-6">
                  <div>
                    <p className="mb-2 font-semibold text-gray-700">
                      Categoria
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() =>
                          setCategoriaSelecionada("Todos")
                        }
                        className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-green-700 hover:text-white"
                      >
                        Todos
                      </button>

                      <button
                        onClick={() =>
                          setCategoriaSelecionada("Roupas")
                        }
                        className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-green-700 hover:text-white"
                      >
                        Roupas
                      </button>

                      <button
                        onClick={() =>
                          setCategoriaSelecionada("Beleza")
                        }
                        className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-green-700 hover:text-white"
                      >
                        Beleza
                      </button>

                      <button
                        onClick={() =>
                          setCategoriaSelecionada("Casa")
                        }
                        className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-green-700 hover:text-white"
                      >
                        Casa
                      </button>

                      <button
                        onClick={() =>
                          setCategoriaSelecionada("Tecnologia")
                        }
                        className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-green-700 hover:text-white"
                      >
                        Tecnologia
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 font-semibold text-gray-700">
                      Preço máximo
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() =>
                          setPrecoMaximo("Todos")
                        }
                        className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-green-700 hover:text-white"
                      >
                        Todos
                      </button>

                      <button
                        onClick={() =>
                          setPrecoMaximo("50")
                        }
                        className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-green-700 hover:text-white"
                      >
                        Até R$ 50
                      </button>

                      <button
                        onClick={() =>
                          setPrecoMaximo("100")
                        }
                        className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-green-700 hover:text-white"
                      >
                        Até R$ 100
                      </button>

                      <button
                        onClick={() =>
                          setPrecoMaximo("150")
                        }
                        className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-green-700 hover:text-white"
                      >
                        Até R$ 150
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {produtosFiltrados.map(
                    (produto) => (
                      <CardProduto
                        key={produto.id}
                        produto={produto}
                        adicionarAoCarrinho={
                          adicionarAoCarrinho
                        }
                      />
                    )
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      {carrinhoAberto && (
        <Carrinho
          carrinho={carrinho}
          removerDoCarrinho={
            removerDoCarrinho
          }
          fecharCarrinho={() =>
            setCarrinhoAberto(false)
          }
          finalizarCompra={
            finalizarCompra
          }
        />
      )}
    </>
  );
}

export default App;