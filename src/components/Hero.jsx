function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-[500px] flex-col items-center justify-center bg-green-50 px-6 text-center"
    >
      <span className="mb-4 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
        Consumo consciente
      </span>

      <h2 className="max-w-3xl text-4xl font-bold text-gray-900 md:text-5xl">
        Produtos sustentáveis para um futuro melhor
      </h2>

      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        Encontre produtos ecológicos para tornar o seu dia a dia mais
        consciente, prático e sustentável.
      </p>

      <a
        href="#produtos"
        className="mt-8 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
      >
        Ver produtos
      </a>
    </section>
  );
}

export default Hero;