function Carrinho({ carrinho, removerDoCarrinho }) {
  const totalCarrinho = carrinho.reduce(
    (total, produto) => total + produto.preco * produto.quantidade,
    0
  );

  return (
    <section id="carrinho" className="bg-gray-50 px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900">
          Seu carrinho
        </h2>

        {carrinho.length === 0 ? (
          <p className="mt-6 text-gray-600">
            Seu carrinho está vazio.
          </p>
        ) : (
          <>
            <div className="mt-8 space-y-4">
              {carrinho.map((produto) => (
                <div
                  key={produto.id}
                  className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                      className="h-20 w-20 rounded-lg object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {produto.nome}
                      </h3>

                      <p className="text-sm text-gray-500">
                        Quantidade: {produto.quantidade}
                      </p>

                      <p className="mt-1 font-medium">
                        R$ {produto.preco.toFixed(2).replace(".", ",")}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removerDoCarrinho(produto.id)}
                    className="rounded-lg border border-red-500 px-4 py-2 text-red-500 transition hover:bg-red-500 hover:text-white"
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-gray-300 pt-6">
              <p className="text-xl font-bold">
                Total
              </p>

              <p className="text-2xl font-bold text-green-700">
                R$ {totalCarrinho.toFixed(2).replace(".", ",")}
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Carrinho;