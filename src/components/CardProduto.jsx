function CardProduto({ produto }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <span className="text-sm font-medium text-green-700">
          {produto.categoria}
        </span>

        <h3 className="mt-2 text-xl font-semibold text-gray-900">
          {produto.nome}
        </h3>

        <p className="mt-3 text-lg font-bold text-gray-900">
          R$ {produto.preco.toFixed(2).replace(".", ",")}
        </p>

        <button className="mt-5 w-full rounded-lg bg-green-700 px-4 py-3 font-semibold text-white transition hover:bg-green-800">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default CardProduto;