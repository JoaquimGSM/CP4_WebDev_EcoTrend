function Cabecalho({ quantidadeCarrinho }) {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-5">
      <h1 className="text-2xl font-bold text-green-700">
        EcoTrend
      </h1>

      <nav className="flex items-center gap-8 font-medium">
        <a href="#inicio" className="transition hover:text-green-700">
          Início
        </a>

        <a href="#produtos" className="transition hover:text-green-700">
          Produtos
        </a>

        <a href="#carrinho" className="transition hover:text-green-700">
          Carrinho ({quantidadeCarrinho})
        </a>
      </nav>
    </header>
  );
}

export default Cabecalho;