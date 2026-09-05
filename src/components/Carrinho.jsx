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
        className="fixed inset-0 z-40 bg-ink/55"
      ></div>

      <aside className="fixed right-0 top-0 z-50 h-dvh w-full max-w-md overflow-y-auto bg-paper p-5 shadow-2xl sm:p-8">
        <div className="flex items-center justify-between gap-3 border-b border-ink pb-5">
          <h2 className="font-editorial text-3xl text-ink">
            Seu carrinho
          </h2>

          <button
            onClick={fecharCarrinho}
            aria-label="Fechar carrinho"
            className="flex h-11 w-11 shrink-0 items-center justify-center text-3xl text-ink transition-colors hover:bg-line"
          >
            ×
          </button>
        </div>

        {mensagem && (
          <div className="mt-6 border-l-2 border-olive bg-[#e6e9da] p-4 text-sm text-ink">
            {mensagem}
          </div>
        )}

        {carrinho.length === 0 ? (
          <p className="mt-8 border-b border-line py-10 text-muted">
            Seu carrinho está vazio.
          </p>
        ) : (
          <>
            <div className="mt-6 space-y-5">
              {carrinho.map((produto) => (
                <div
                  key={produto.id}
                  className="border-b border-line pb-5"
                >
                  <div className="flex gap-4">
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                      className="h-24 w-24 shrink-0 bg-white object-contain"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-medium leading-6">
                        {produto.nome}
                      </h3>

                      <p className="mt-1 text-xs text-muted">
                        Quantidade: {produto.quantidade}
                      </p>

                      <p className="mt-2 text-sm font-semibold tabular-nums">
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
                        className="mt-1 min-h-11 text-xs text-muted underline underline-offset-4 hover:text-ink"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-ink pt-5">
              <div className="flex justify-between">
                <span className="text-xl font-medium">
                  Total
                </span>

                <span className="text-2xl font-semibold text-ink tabular-nums">
                  R${" "}
                  {totalCarrinho
                    .toFixed(2)
                    .replace(".", ",")}
                </span>
              </div>

              <button
                onClick={realizarCheckout}
                disabled={processando}
                className="mt-6 min-h-12 w-full bg-ink px-4 py-4 text-sm font-medium text-paper transition-colors hover:bg-olive disabled:cursor-not-allowed disabled:bg-muted"
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