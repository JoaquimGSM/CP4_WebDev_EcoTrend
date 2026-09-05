import { useEffect, useState } from "react";

import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import CardProduto from "./components/CardProduto";
import Carrinho from "./components/Carrinho";
import Loading from "./components/Loading";
import Rodape from "./components/Rodape";

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
          className="scroll-mt-6 px-5 pt-10 pb-12 sm:px-8 sm:pt-14 lg:px-12"
        >
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-editorial text-4xl tracking-tight sm:text-5xl">
              O catálogo
            </h2>

            {carregando ? (
              <Loading />
            ) : erro ? (
              <div className="mt-8 rounded-xl bg-red-50 p-4 text-red-700">
                {erro}
              </div>
            ) : (
              <>
                <p className="mt-3 text-sm text-muted">
                  {produtosFiltrados.length} produtos encontrados
                </p>

                <div className="mt-6 flex flex-wrap items-start justify-between gap-x-10 gap-y-4 border-y border-line py-4">
                  <div>
                    <p className="mb-1 text-xs text-muted">
                      Categoria
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-1">
                      <button
                        onClick={() =>
                          setCategoriaSelecionada("Todos")
                        }
                        aria-pressed={categoriaSelecionada === "Todos"}
                        className={`min-h-11 border-b-2 py-2 text-sm transition-colors ${categoriaSelecionada === "Todos" ? "border-ink font-semibold text-ink" : "border-transparent text-muted hover:border-olive hover:text-ink"}`}
                      >
                        Todos
                      </button>

                      <button
                        onClick={() =>
                          setCategoriaSelecionada("Roupas")
                        }
                        aria-pressed={categoriaSelecionada === "Roupas"}
                        className={`min-h-11 border-b-2 py-2 text-sm transition-colors ${categoriaSelecionada === "Roupas" ? "border-ink font-semibold text-ink" : "border-transparent text-muted hover:border-olive hover:text-ink"}`}
                      >
                        Roupas
                      </button>

                      <button
                        onClick={() =>
                          setCategoriaSelecionada("Beleza")
                        }
                        aria-pressed={categoriaSelecionada === "Beleza"}
                        className={`min-h-11 border-b-2 py-2 text-sm transition-colors ${categoriaSelecionada === "Beleza" ? "border-ink font-semibold text-ink" : "border-transparent text-muted hover:border-olive hover:text-ink"}`}
                      >
                        Beleza
                      </button>

                      <button
                        onClick={() =>
                          setCategoriaSelecionada("Casa")
                        }
                        aria-pressed={categoriaSelecionada === "Casa"}
                        className={`min-h-11 border-b-2 py-2 text-sm transition-colors ${categoriaSelecionada === "Casa" ? "border-ink font-semibold text-ink" : "border-transparent text-muted hover:border-olive hover:text-ink"}`}
                      >
                        Casa
                      </button>

                      <button
                        onClick={() =>
                          setCategoriaSelecionada("Tecnologia")
                        }
                        aria-pressed={categoriaSelecionada === "Tecnologia"}
                        className={`min-h-11 border-b-2 py-2 text-sm transition-colors ${categoriaSelecionada === "Tecnologia" ? "border-ink font-semibold text-ink" : "border-transparent text-muted hover:border-olive hover:text-ink"}`}
                      >
                        Tecnologia
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="mb-1 text-xs text-muted">
                      Preço máximo
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-1">
                      <button
                        onClick={() =>
                          setPrecoMaximo("Todos")
                        }
                        aria-pressed={precoMaximo === "Todos"}
                        className={`min-h-11 border-b-2 py-2 text-sm transition-colors ${precoMaximo === "Todos" ? "border-ink font-semibold text-ink" : "border-transparent text-muted hover:border-olive hover:text-ink"}`}
                      >
                        Todos
                      </button>

                      <button
                        onClick={() =>
                          setPrecoMaximo("50")
                        }
                        aria-pressed={precoMaximo === "50"}
                        className={`min-h-11 border-b-2 py-2 text-sm transition-colors ${precoMaximo === "50" ? "border-ink font-semibold text-ink" : "border-transparent text-muted hover:border-olive hover:text-ink"}`}
                      >
                        Até R$ 50
                      </button>

                      <button
                        onClick={() =>
                          setPrecoMaximo("100")
                        }
                        aria-pressed={precoMaximo === "100"}
                        className={`min-h-11 border-b-2 py-2 text-sm transition-colors ${precoMaximo === "100" ? "border-ink font-semibold text-ink" : "border-transparent text-muted hover:border-olive hover:text-ink"}`}
                      >
                        Até R$ 100
                      </button>

                      <button
                        onClick={() =>
                          setPrecoMaximo("150")
                        }
                        aria-pressed={precoMaximo === "150"}
                        className={`min-h-11 border-b-2 py-2 text-sm transition-colors ${precoMaximo === "150" ? "border-ink font-semibold text-ink" : "border-transparent text-muted hover:border-olive hover:text-ink"}`}
                      >
                        Até R$ 150
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-12">
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

      <Rodape />

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