function Cabecalho({ quantidadeCarrinho, abrirCarrinho }) {
  return (
    <header className="border-b border-line px-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-4 gap-y-1 py-4 sm:py-5">
        <h1 className="font-editorial text-3xl tracking-[-0.05em] sm:text-4xl">EcoTrend<span className="text-olive">.</span></h1>
        <nav aria-label="Navegação principal" className="flex items-center gap-4 text-sm sm:gap-8">
          <a href="#inicio" className="hidden py-2 underline-offset-8 hover:underline sm:block">Início</a>
          <a href="#produtos" className="py-2 underline-offset-8 hover:underline">Produtos</a>
          <button onClick={abrirCarrinho} className="flex min-h-11 items-center gap-2 border-l border-line pl-4 underline-offset-8 hover:underline sm:pl-8">
            <i aria-hidden="true" className="fa-solid fa-bag-shopping text-sm" />
            Carrinho <span className="tabular-nums">({quantidadeCarrinho})</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
export default Cabecalho;
