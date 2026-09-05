function Rodape() {
  return (
    <footer className="mt-8 bg-ink px-5 py-10 text-paper sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-8 sm:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_1fr_0.7fr]">
        <a href="#inicio" className="w-fit font-editorial text-4xl tracking-[-0.05em]">EcoTrend.</a>
        <div><h2 className="font-editorial text-2xl">Consumo consciente, na prática.</h2><p className="mt-3 max-w-md text-sm leading-6 text-paper/75">Do algodão orgânico à energia solar, reunimos alternativas para vestir, cuidar de você e equipar a casa.</p></div>
        <nav aria-label="Rodapé" className="flex items-start gap-6 text-sm lg:justify-end"><a href="#produtos" className="underline underline-offset-4">Ver catálogo</a><a href="#inicio" className="underline underline-offset-4">Voltar ao início ↑</a></nav>
      </div>
    </footer>
  );
}
export default Rodape;
