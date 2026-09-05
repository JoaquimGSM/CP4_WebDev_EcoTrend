import { useState } from "react";

function Carrinho({
  carrinho,
  removerDoCarrinho,
  fecharCarrinho,
  finalizarCompra,
}) {
  const [processando, setProcessando] =
    useState(false);

  const [mensagem, setMensagem] =
    useState("");

  const totalCarrinho = carrinho.reduce(
    (total, produto) =>
      total + produto.preco * produto.quantidade,
    0
  );

  async function realizarCheckout() {
    try {
      setProcessando(true);
      setMensagem("");

      const resultado = await finalizarCompra();

      setMensagem(resultado);
    } catch {
      setMensagem(
        "Ocorreu um erro ao finalizar a compra."
      );
    } finally {
      setProcessando(false);
    }
  }

  return (
    <>
      <div
        onClick={fecharCarrinho}
        className="fixed inset-0 z-40 bg-black/40"
      ></div>

      <aside className="fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Seu carrinho
          </h2>

          <button
            onClick={fecharCarrinho}
            className="text-2xl text-gray-500 hover:text-gray-900"
          >
            ×
          </button>
        </div>

        {mensagem && (
          <div className="mt-6 rounded-lg bg-green-50 p-4 text-green-700">
            {mensagem}
          </div>
        )}

        {carrinho.length === 0 ? (
          <p className="mt-8 text-gray-600">
            Seu carrinho está vazio.
          </p>
        ) : (
          <>
            <div className="mt-8 space-y-4">
              {carrinho.map((produto) => (
                <div
                  key={produto.id}
                  className="rounded-xl border border-gray-200 p-4"
                >
                  <div className="flex gap-4">
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                      className="h-20 w-20 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold">
                        {produto.nome}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Quantidade: {produto.quantidade}
                      </p>

                      <p className="mt-1 font-medium">
                        R${" "}
                        {(
                          produto.preco *
                          produto.quantidade
                        )
                          .toFixed(2)
                          .replace(".", ",")}
                      </p>

                      <button
                        onClick={() =>
                          removerDoCarrinho(produto.id)
                        }
                        className="mt-3 text-sm font-medium text-red-500 hover:text-red-700"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="flex justify-between">
                <span className="text-xl font-bold">
                  Total
                </span>

                <span className="text-xl font-bold text-green-700">
                  R${" "}
                  {totalCarrinho
                    .toFixed(2)
                    .replace(".", ",")}
                </span>
              </div>

              <button
                onClick={realizarCheckout}
                disabled={processando}
                className="mt-6 w-full rounded-lg bg-green-700 px-4 py-3 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                {processando
                  ? "Processando..."
                  : "Finalizar compra"}
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default Carrinho;