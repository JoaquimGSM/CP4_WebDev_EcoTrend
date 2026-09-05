function App() {
  return (
    <>
      <header>
        <h1>EcoTrend</h1>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#produtos">Produtos</a>
          <a href="#carrinho">Carrinho</a>
        </nav>
      </header>

      <main>
        <section id="inicio">
          <h2>Produtos sustentáveis para um futuro melhor</h2>
          <p>
            Encontre produtos ecológicos para tornar o seu dia a dia
            mais consciente.
          </p>

          <a href="#produtos">Ver produtos</a>
        </section>

        <section id="produtos">
          <h2>Nossos produtos</h2>

          <p>Os produtos serão carregados aqui.</p>
        </section>
      </main>
    </>
  );
}

export default App;