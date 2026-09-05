function App() {
  return (
    <>
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-5">
        <h1 className="text-2xl font-bold text-green-700">
          EcoTrend
        </h1>

        <nav className="flex gap-8 font-medium">
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

          <a
            href="#carrinho"
            className="transition hover:text-green-700"
          >
            Carrinho
          </a>
        </nav>
      </header>
    </>
  );
}

export default App;