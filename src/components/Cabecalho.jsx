function Cabecalho({ quantidadeCarrinho, abrirCarrinho }) {
  return (
    <header className="flex flex-col gap-4 border-b border-gray-200 bg-white px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <h1 className="flex items-center gap-2 text-2xl font-bold text-green-700">
        <i className="fa-solid fa-leaf"></i>
        EcoTrend
      </h1>

      <nav className="flex flex-wrap items-center justify-center gap-4 font-medium sm:gap-8">
        <a
          href="#inicio"
          className="transition hover:text-green-700"
        >
          Início
        </a>

        <a
          href="#produtos"
          className="transition hover:text-green-700"
        >
          Produtos
        </a>

        <button
          onClick={abrirCarrinho}
          className="flex items-center gap-2 transition hover:text-green-700"
        >
          <i className="fa-solid fa-cart-shopping"></i>
          Carrinho ({quantidadeCarrinho})
        </button>
      </nav>
    </header>
  );
}

export default Cabecalho;