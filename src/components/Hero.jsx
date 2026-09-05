function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-[1536px] px-5 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <div className="grid grid-cols-[1fr_0.8fr] bg-ink text-paper md:grid-cols-[1.05fr_1fr]">
        <div className="col-span-2 flex flex-col items-start px-6 py-8 sm:px-10 md:col-span-1 md:justify-between md:py-10 lg:px-12 lg:py-12">
          <p className="text-sm text-accent">Objetos para viver com consciência.</p>
          <h2 className="my-6 max-w-lg font-editorial text-[2.8rem] leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[4.7rem]">O que faz parte<br />da sua <em className="font-normal text-accent">rotina?</em></h2>
          <div className="max-w-sm">
            <p className="text-sm leading-6 text-paper/80 sm:text-base sm:leading-7">Roupas, cuidados naturais, reutilizáveis e tecnologia verde. Produtos sustentáveis com espaço na vida real.</p>
            <a href="#produtos" className="mt-6 inline-flex min-h-11 items-center gap-8 border-b border-accent pb-2 text-sm font-medium text-paper transition-colors hover:text-accent">Explorar o catálogo <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <figure className="col-span-2 grid grid-cols-[1fr_0.8fr] md:col-span-1 md:block">
          <img src="/imagens/garrafa.png" alt="Garrafa reutilizável verde com tampa de bambu" fetchPriority="high" className="aspect-square max-h-64 w-full object-cover md:aspect-square md:max-h-[540px]" />
          <figcaption className="flex flex-col justify-end bg-[#dce0cb] p-5 text-ink md:flex-row md:items-center md:justify-between md:gap-4 md:px-6 md:py-3">
            <span className="text-sm">Em foco: garrafa reutilizável</span>
            <a href="#produtos" className="mt-3 text-sm underline underline-offset-4 md:mt-0">No catálogo <span aria-hidden="true">↗</span></a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
export default Hero;
