function Cabecalho({ quantidadeCarrinho, abrirCarrinho }) {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-5">
      <h1 className="flex items-center gap-2 text-2xl font-bold text-green-700">
        <i className="fa-solid fa-leaf"></i>
        EcoTrend
      </h1>

      <nav className="flex items-center gap-8 font-medium">
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