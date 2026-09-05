function Loading() {
  return (
    <div role="status" className="flex flex-col items-center justify-center py-16">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-line border-t-olive motion-reduce:animate-none"></div>

      <p className="mt-4 text-muted">
        Carregando produtos...
      </p>
    </div>
  );
}

export default Loading;