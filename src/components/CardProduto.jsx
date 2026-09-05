function CardProduto({ produto, adicionarAoCarrinho }) {
  return (
    <article className="group flex min-w-0 flex-col">
      <div className="overflow-hidden bg-white">
        <img src={produto.imagem} alt={produto.nome} loading="lazy" className="aspect-square w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" />
      </div>
      <div className="flex flex-1 flex-col pt-4">
        <span className="text-xs text-muted">{produto.categoria}</span>
        <h3 className="mt-1 min-h-12 text-base font-medium leading-6 sm:text-lg">{produto.nome}</h3>
        <p className="mt-2 mb-4 text-base font-semibold tabular-nums">R$ {produto.preco.toFixed(2).replace(".", ",")}</p>
        <button onClick={() => adicionarAoCarrinho(produto)} className="mt-auto flex min-h-11 w-full items-center justify-between gap-2 border-y border-line py-3 text-left text-xs font-medium transition-colors hover:border-ink hover:bg-ink hover:px-3 hover:text-paper sm:text-sm">
          Adicionar ao carrinho <span aria-hidden="true" className="text-xl font-normal">+</span>
        </button>
      </div>
    </article>
  );
}
export default CardProduto;
